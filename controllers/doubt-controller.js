import { SpeechClient } from '@google-cloud/speech';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import fetch from 'node-fetch';
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

// Call Groq API
async function getCompletion(messages, courseCategory) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable is not set');
  }

  const systemPrompt = systemPrompts[courseCategory] || systemPrompts.NEET;

  const allMessages = [
    { role: "system", content: systemPrompt },
    ...messages
  ];

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: allMessages,
      max_tokens: 400,
      temperature: 0.2
    })
  });

  if (!res.ok) throw new Error(`Groq API error ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

// Convert text -> speech
async function synthesizeSpeech(text) {
  const [response] = await clientTTS.synthesizeSpeech({
    input: { text },
    voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
    audioConfig: { audioEncoding: "MP3" }
  });

  return response.audioContent;
}

// Transcribe audio
async function transcribeAudio(audioBuffer) {
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

export const handleVoiceQuery = async (req, res) => {
  try {
    let { audio, messages = [], courseCategory = 'NEET' } = req.body;

    console.log('Doubt Controller - Raw courseCategory received:', courseCategory);
    courseCategory = normalizeCategory(courseCategory);
    console.log('Doubt Controller - Normalized courseCategory:', courseCategory);
    console.log('Doubt Controller - Available systemPrompts keys:', Object.keys(systemPrompts));
    console.log('Doubt Controller - Selected systemPrompt:', systemPrompts[courseCategory] ? 'Found' : 'Not Found');
    if (systemPrompts[courseCategory]) {
      console.log('Doubt Controller - System prompt preview:', systemPrompts[courseCategory].substring(0, 100) + '...');
    }

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
      { role: "system", content: systemPrompts[courseCategory] },
      ...messages,
      { role: "user", content: userSpeech }
    ];

    // Get response from Groq
    const reply = await getCompletion(allMessages, courseCategory);

    // Convert response to speech
    const audioContent = await synthesizeSpeech(reply);

    res.json({
      transcription: userSpeech,
      response: reply,
      audio: audioContent.toString('base64')
    });
  } catch (error) {
    console.error('Voice query error:', error);
    res.status(500).json({ error: error.message });
  }
};
