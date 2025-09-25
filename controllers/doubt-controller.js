import { SpeechClient } from '@google-cloud/speech';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import fetch from 'node-fetch';

// Initialize Google Cloud clients using environment variable
let clientSTT, clientTTS;

try {
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
  
  clientSTT = new SpeechClient({
    credentials: serviceAccount
  });

  clientTTS = new TextToSpeechClient({
    credentials: serviceAccount
  });
} catch (error) {
  console.error('Error initializing Google Cloud clients:', error);
}

// System prompt for NEET assistant
const systemPrompt = `
You are an assistant that must only answer questions using the official NEET medical entrance test syllabus content.
Always keep answers concise, factual, and strictly limited to NEET syllabus topics (Physics, Chemistry, Biology).
If a user asks something outside the NEET syllabus, politely refuse and redirect them to ask a syllabus-related question.
`;

// Call Groq API
async function getCompletion(messages) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable is not set');
  }

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer ${GROQ_API_KEY},
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages,
      max_tokens: 400,
      temperature: 0.2
    })
  });

  if (!res.ok) throw new Error(Groq API error ${res.status});
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

// Convert text -> speech
async function synthesizeSpeech(text) {
  if (!clientTTS) {
    throw new Error('Text-to-Speech client not initialized');
  }

  const [response] = await clientTTS.synthesizeSpeech({
    input: { text },
    voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
    audioConfig: { audioEncoding: "MP3" }
  });

  return response.audioContent;
}

// Transcribe audio
async function transcribeAudio(audioBuffer) {
  if (!clientSTT) {
    throw new Error('Speech-to-Text client not initialized');
  }

  const [response] = await clientSTT.recognize({
    audio: { content: audioBuffer.toString('base64') },
    config: {
      encoding: "WEBM_OPUS",
      sampleRateHertz: 48000,
      languageCode: "en-US",
    }
  });

  return response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
}

export const solveDoubt = async (req, res) => {
  try {
    const { audio, messages = [] } = req.body;
    
    // If audio is provided, transcribe it
    let userSpeech = '';
    if (audio) {
      const audioBuffer = Buffer.from(audio, 'base64');
      userSpeech = await transcribeAudio(audioBuffer);
    } else if (messages.length > 0) {
      // Get the last user message if no audio
      const lastUserMessage = messages.filter(m => m.role === 'user').pop();
      userSpeech = lastUserMessage?.content || '';
    } else {
      return res.status(400).json({ error: 'No audio or text provided' });
    }

    // Add system prompt to messages if not already present
    const allMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
      { role: "user", content: userSpeech }
    ];

    // Get response from Groq
    const reply = await getCompletion(allMessages);

    // Convert response to speech
    const audioContent = await synthesizeSpeech(reply);

    res.json({
      transcription: userSpeech,
      response: reply,
      audio: audioContent.toString('base64')
    });
  } catch (error) {
    console.error('Doubt solving error:', error);
    res.status(500).json({ error: error.message });
  }
};
