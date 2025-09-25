import { SpeechClient } from '@google-cloud/speech';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Google Cloud clients using environment variables
const getGoogleCredentials = () => {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    // For production (Render)
    return JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  } else {
    // For development (local file)
    const keyPath = path.join(__dirname, '../google-service-account.json');
    return { keyFilename: keyPath };
  }
};

const clientSTT = new SpeechClient(getGoogleCredentials());
const clientTTS = new TextToSpeechClient(getGoogleCredentials());

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Normalize category function
function normalizeCategory(category) {
  if (!category) return 'NEET';
  const cat = category.toLowerCase().replace(/\s+/g, '');
  if (cat === 'neet') return 'NEET';
  if (cat === 'mathematics' || cat === 'math') return 'Mathematics';
  if (cat === 'science') return 'Science';
  if (cat === 'socialscience') return 'SocialScience';
  if (cat === 'english') return 'English';
  if (cat === 'hindi') return 'Hindi';
  if (cat === 'computerscience') return 'ComputerScience';
  return 'NEET'; // default fallback
}

// System prompts for different subjects
const systemPrompts = {
  NEET: `You are an expert NEET (National Eligibility cum Entrance Test) tutor. Provide clear, concise explanations for Physics, Chemistry, and Biology concepts. Focus on:
- NCERT-based explanations
- Problem-solving strategies
- Important formulas and concepts
- Previous year question patterns
- Time management tips
Strictly limit responses to NEET syllabus topics.`,

  Mathematics: `You are a Mathematics expert for CBSE/State Board curricula. Focus on:
- Step-by-step problem solving
- Mathematical reasoning
- Formula applications
- Real-world applications
- Common misconceptions
Provide clear explanations with examples.`,

  Science: `You are a Science educator covering Physics, Chemistry, and Biology. Emphasize:
- Conceptual understanding
- Experimental learning
- Real-world applications
- Scientific methodology
- Interdisciplinary connections
Make science engaging and accessible.`,

  SocialScience: `You are a Social Science specialist covering History, Geography, Civics, and Economics. Focus on:
- Historical context and significance
- Geographical patterns
- Civic awareness
- Economic principles
- Current events connections
Make social sciences relevant and interesting.`,

  English: `You are an English language and literature expert. Cover:
- Grammar and composition
- Literary analysis
- Writing skills
- Communication strategies
- Critical reading
Focus on practical language skills.`,

  Hindi: `You are a Hindi language and literature expert. Cover:
- व्याकरण और रचना
- साहित्यिक विश्लेषण
- लेखन कौशल
- संचार strategies
- मौखिक अभिव्यक्ति
Focus on comprehensive language development.`,

  ComputerScience: `You are a Computer Science educator. Cover:
- Programming concepts
- Computational thinking
- Software applications
- Digital literacy
- Emerging technologies
Focus on practical coding skills and concepts.`
};

async function getCompletion(userSpeech, courseCategory) {
  try {
    const systemPrompt = systemPrompts[courseCategory] || systemPrompts.NEET;
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Answer this question: ${userSpeech}` }
      ],
      model: "llama-3.1-8b-instant",
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
    let { audio, messages = [], courseCategory = 'NEET' } = req.body;

    console.log('Raw courseCategory received:', courseCategory);
    courseCategory = normalizeCategory(courseCategory);
    console.log('Normalized courseCategory:', courseCategory);
    console.log('Available systemPrompts keys:', Object.keys(systemPrompts));
    console.log('Selected systemPrompt:', systemPrompts[courseCategory] ? 'Found' : 'Not Found');
    if (systemPrompts[courseCategory]) {
      console.log('System prompt preview:', systemPrompts[courseCategory].substring(0, 100) + '...');
    }

    // If audio is provided, transcribe it
    let userSpeech = '';
    if (audio) {
      console.log('Processing audio data...');
      const audioBuffer = Buffer.from(audio, 'base64');
      userSpeech = await transcribeAudio(audioBuffer);
      console.log('Transcribed speech:', userSpeech);
    } else if (messages.length > 0) {
      // Get the last user message if no audio
      const lastUserMessage = messages.filter(m => m.role === 'user').pop();
      userSpeech = lastUserMessage?.content || '';
      console.log('Using text message:', userSpeech);
    } else {
      return res.status(400).json({ error: 'No audio or text provided' });
    }

    // Get response from Groq
    console.log('Getting response from Groq...');
    const reply = await getCompletion(userSpeech, courseCategory);
    console.log('Groq response:', reply);

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
      // Handle Uint8Array or other types
      audioBase64 = Buffer.from(audioContent).toString('base64');
    }

    res.json({
      transcription: userSpeech,
      response: reply,
      audio: audioBase64
    });
  } catch (error) {
    console.error('Voice query error:', error);
    res.status(500).json({ 
      error: error.message,
      details: 'Check server logs for more information'
    });
  }
};
