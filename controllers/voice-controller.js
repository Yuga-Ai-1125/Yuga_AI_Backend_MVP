import { SpeechClient } from '@google-cloud/speech';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Google Cloud clients
const clientSTT = new SpeechClient({
  keyFilename: path.join(__dirname, '../google-service-account.json')
});

const clientTTS = new TextToSpeechClient({
  keyFilename: path.join(__dirname, '../google-service-account.json')
});

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// System prompt for NEET assistant
const systemPrompt = `
You are an assistant that must only answer questions using the official NEET medical entrance test syllabus content.
Always keep answers concise, factual, and strictly limited to NEET syllabus topics (Physics, Chemistry, Biology).
If a user asks something outside the NEET syllabus, politely refuse and redirect them to ask a syllabus-related question.
`;

// Call Groq API
async function getCompletion(userSpeech, courseCategory = 'NEET') {
  try {
    const categoryPrompt = courseCategory === 'NEET' ? systemPrompt : `
You are an educational assistant for ${courseCategory} exams. Provide accurate, concise information 
relevant to the ${courseCategory} syllabus. If asked about unrelated topics, politely redirect to syllabus content.
`;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: categoryPrompt },
        { role: "user", content: userSpeech }
      ],
      model: "llama-3.1-8b-instant",
      max_tokens: 400,
      temperature: 0.2
    });

    return completion.choices[0]?.message?.content?.trim() || "I could not generate a response.";
  } catch (err) {
    console.error("LLM Error:", err);
    throw new Error("Failed to get response from Groq API");
  }
}

// Convert text -> speech
async function synthesizeSpeech(text) {
  try {
    const [response] = await clientTTS.synthesizeSpeech({
      input: { text },
      voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
      audioConfig: { audioEncoding: "MP3" }
    });

    return response.audioContent;
  } catch (err) {
    console.error("TTS Error:", err);
    throw new Error("Failed to synthesize speech");
  }
}

// Transcribe audio
async function transcribeAudio(audioBuffer) {
  try {
    const [response] = await clientSTT.recognize({
      audio: { content: audioBuffer.toString('base64') },
      config: {
        encoding: "WEBM_OPUS",
        sampleRateHertz: 48000,
        languageCode: "en-US",
      }
    });

    if (!response.results || response.results.length === 0) {
      throw new Error('No speech detected in audio');
    }

    return response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
  } catch (err) {
    console.error("STT Error:", err);
    throw new Error("Failed to transcribe audio");
  }
}

export const handleVoiceQuery = async (req, res) => {
  try {
    const { audio, messages = [], courseCategory = 'NEET' } = req.body;
    
    console.log('Received voice query for category:', courseCategory);
    
    // If audio is provided, transcribe it
    let userSpeech = '';
    if (audio) {
      console.log('Processing audio data...');
      const audioBuffer = Buffer.from(audio, 'base64');
      userSpeech = await transcribeAudio(audioBuffer);
      console.log('Transcribed speech:', userSpeech);
    } else if (messages && messages.length > 0) {
      // Get the last user message if no audio
      const lastUserMessage = messages.filter(m => m.role === 'user').pop();
      userSpeech = lastUserMessage?.content || '';
      console.log('Using text message:', userSpeech);
    } else {
      return res.status(400).json({ error: 'No audio or text provided' });
    }

    if (!userSpeech.trim()) {
      return res.status(400).json({ error: 'No speech content detected' });
    }

    // Get response from Groq
    console.log('Getting response from Groq...');
    const reply = await getCompletion(userSpeech, courseCategory);
    console.log('Groq response received');

    // Convert response to speech
    console.log('Synthesizing speech...');
    const audioContent = await synthesizeSpeech(reply);
    console.log('Speech synthesized successfully');

    // Ensure we're returning a proper base64 string
    let audioBase64;
    if (Buffer.isBuffer(audioContent)) {
      audioBase64 = audioContent.toString('base64');
    } else if (typeof audioContent === 'string') {
      audioBase64 = audioContent;
    } else {
      audioBase64 = Buffer.from(audioContent).toString('base64');
    }

    res.json({
      transcription: userSpeech,
      response: reply,
      audio: audioBase64,
      success: true
    });
  } catch (error) {
    console.error('Voice query error:', error);
    res.status(500).json({ 
      error: error.message,
      details: 'Check server logs for more information',
      success: false
    });
  }
};
