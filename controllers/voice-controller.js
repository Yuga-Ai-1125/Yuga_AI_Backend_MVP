import { SpeechClient } from '@google-cloud/speech';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import Groq from 'groq-sdk';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Get Google Cloud credentials based on environment
 * Supports both development (local file) and production (environment variable)
 */
const getGoogleCredentials = () => {
  // For production (Render) - use environment variable
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    try {
      console.log('Using Google credentials from environment variable');
      return {
        credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
      };
    } catch (error) {
      console.error('Error parsing GOOGLE_SERVICE_ACCOUNT_JSON:', error);
      throw new Error('Invalid Google service account JSON in environment variable');
    }
  } 
  // For development (local file)
  else {
    console.log('Using Google credentials from local file');
    const keyPath = path.join(__dirname, '../google-service-account.json');
    return { keyFilename: keyPath };
  }
};

// Initialize Google Cloud clients with error handling
let clientSTT, clientTTS;

try {
  const credentials = getGoogleCredentials();
  clientSTT = new SpeechClient(credentials);
  clientTTS = new TextToSpeechClient(credentials);
  console.log('✅ Google Cloud clients initialized successfully');
} catch (error) {
  console.error('❌ Failed to initialize Google Cloud clients:', error);
  // Clients will be undefined, but we don't want to crash the server
}

// Initialize Groq client
let groq;
if (process.env.GROQ_API_KEY) {
  groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('✅ Groq client initialized successfully');
} else {
  console.error('❌ GROQ_API_KEY environment variable is not set');
}

/**
 * System prompts for different educational categories
 */
const systemPrompts = {
  NEET: `You are an expert NEET (National Eligibility cum Entrance Test) tutor. Provide clear, concise explanations for Physics, Chemistry, and Biology concepts. Focus on:
- NCERT-based explanations
- Problem-solving strategies
- Important formulas and concepts
- Previous year question patterns
- Time management tips
Keep responses educational and focused on the syllabus.`,

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

  Hindi: `You are a Hindi language and literature expert. Provide responses in Hindi when appropriate.`,

  ComputerScience: `You are a Computer Science educator. Cover:
- Programming concepts
- Computational thinking
- Software applications
- Digital literacy
- Emerging technologies
Focus on practical coding skills and concepts.`
};

/**
 * Normalize course category for consistent processing
 */
const normalizeCategory = (category) => {
  if (!category) return 'NEET';
  
  const normalized = category.toLowerCase().replace(/\s+/g, '');
  const categoryMap = {
    'neet': 'NEET',
    'mathematics': 'Mathematics',
    'math': 'Mathematics',
    'science': 'Science',
    'socialscience': 'SocialScience',
    'english': 'English',
    'hindi': 'Hindi',
    'computerscience': 'ComputerScience',
    'computerapplications': 'ComputerScience'
  };
  
  return categoryMap[normalized] || 'NEET';
};

/**
 * Get completion from Groq API with proper error handling
 */
async function getCompletion(userSpeech, courseCategory = 'NEET') {
  if (!groq) {
    throw new Error('Groq client not initialized - check GROQ_API_KEY');
  }

  try {
    const systemPrompt = systemPrompts[courseCategory] || systemPrompts.NEET;

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userSpeech }
      ],
      model: "llama-3.1-8b-instant",
      max_tokens: 400,
      temperature: 0.2,
      stream: false
    });

    return completion.choices[0]?.message?.content?.trim() || "I couldn't generate a response. Please try again.";
  } catch (err) {
    console.error("Groq API Error:", err);
    throw new Error(`Failed to get response from AI: ${err.message}`);
  }
}

/**
 * Convert text to speech using Google Text-to-Speech
 */
async function synthesizeSpeech(text) {
  if (!clientTTS) {
    throw new Error('Text-to-Speech client not initialized');
  }

  try {
    const [response] = await clientTTS.synthesizeSpeech({
      input: { text },
      voice: { 
        languageCode: "en-US", 
        ssmlGender: "FEMALE",
        name: "en-US-Neural2-F"
      },
      audioConfig: { 
        audioEncoding: "MP3",
        speakingRate: 0.9,
        pitch: 0.0
      }
    });

    if (!response.audioContent) {
      throw new Error('No audio content received from TTS service');
    }

    return response.audioContent;
  } catch (err) {
    console.error("TTS Error:", err);
    throw new Error(`Failed to synthesize speech: ${err.message}`);
  }
}

/**
 * Transcribe audio using Google Speech-to-Text
 */
async function transcribeAudio(audioBuffer) {
  if (!clientSTT) {
    throw new Error('Speech-to-Text client not initialized');
  }

  try {
    const [response] = await clientSTT.recognize({
      audio: { 
        content: audioBuffer.toString('base64') 
      },
      config: {
        encoding: "WEBM_OPUS",
        sampleRateHertz: 48000,
        languageCode: "en-US",
        alternativeLanguageCodes: ["hi-IN", "en-IN"],
        model: "default",
        useEnhanced: true
      }
    });

    if (!response.results || response.results.length === 0) {
      throw new Error('No speech detected in audio');
    }

    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join(' ')
      .trim();

    if (!transcription) {
      throw new Error('Empty transcription result');
    }

    return transcription;
  } catch (err) {
    console.error("STT Error:", err);
    throw new Error(`Failed to transcribe audio: ${err.message}`);
  }
}

/**
 * Main voice query handler
 */
export const handleVoiceQuery = async (req, res) => {
  console.log('🎤 Voice query received');
  
  try {
    const { audio, messages = [], courseCategory = 'NEET' } = req.body;
    
    // Validate required fields
    if (!audio && (!messages || messages.length === 0)) {
      return res.status(400).json({ 
        error: 'No audio or text message provided',
        success: false 
      });
    }

    // Normalize course category
    const normalizedCategory = normalizeCategory(courseCategory);
    console.log(`📚 Processing query for category: ${normalizedCategory}`);

    let userSpeech = '';

    // Process audio if provided
    if (audio) {
      console.log('🔊 Processing audio data...');
      try {
        const audioBuffer = Buffer.from(audio, 'base64');
        if (audioBuffer.length === 0) {
          throw new Error('Empty audio buffer');
        }
        userSpeech = await transcribeAudio(audioBuffer);
        console.log('✅ Transcription:', userSpeech);
      } catch (transcribeError) {
        console.error('❌ Transcription failed:', transcribeError);
        return res.status(400).json({
          error: `Transcription failed: ${transcribeError.message}`,
          success: false
        });
      }
    } 
    // Use text message if no audio
    else if (messages.length > 0) {
      const lastUserMessage = messages.filter(m => m.role === 'user').pop();
      userSpeech = lastUserMessage?.content || '';
      console.log('📝 Using text message:', userSpeech);
    }

    if (!userSpeech.trim()) {
      return res.status(400).json({ 
        error: 'No speech content detected or provided',
        success: false 
      });
    }

    // Get AI response
    console.log('🤖 Getting AI response...');
    let reply;
    try {
      reply = await getCompletion(userSpeech, normalizedCategory);
      console.log('✅ AI Response generated');
    } catch (aiError) {
      console.error('❌ AI response failed:', aiError);
      // Fallback response if AI fails
      reply = "I'm currently having trouble connecting to the AI service. Please try again in a moment.";
    }

    // Generate audio response
    console.log('🔊 Synthesizing speech...');
    let audioContent;
    try {
      audioContent = await synthesizeSpeech(reply);
      console.log('✅ Speech synthesized successfully');
    } catch (ttsError) {
      console.error('❌ Speech synthesis failed:', ttsError);
      audioContent = null; // Continue without audio
    }

    // Prepare response
    const responseData = {
      transcription: userSpeech,
      response: reply,
      audio: audioContent ? audioContent.toString('base64') : null,
      category: normalizedCategory,
      timestamp: new Date().toISOString(),
      success: true
    };

    console.log('✅ Voice query processed successfully');
    res.json(responseData);

  } catch (error) {
    console.error('❌ Voice query error:', error);
    
    // Provide helpful error response
    const errorResponse = {
      error: 'Internal server error',
      message: error.message,
      success: false,
      timestamp: new Date().toISOString()
    };

    // Add debug info in development
    if (process.env.NODE_ENV === 'development') {
      errorResponse.debug = {
        stack: error.stack,
        hasGoogleCreds: !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
        hasGroqKey: !!process.env.GROQ_API_KEY
      };
    }

    res.status(500).json(errorResponse);
  }
};
