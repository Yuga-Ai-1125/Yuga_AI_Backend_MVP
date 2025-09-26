import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/index.js";
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import courseRoutes from "./routes/course-route.js";
import assessmentRoutes from "./routes/assessment-route.js";
import progressRoutes from "./routes/progress-route.js";
import voiceRoutes from "./routes/voice-route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration for all environments
const allowedOrigins = [
  "http://localhost:5173", 
  "https://soft-longma-c0dc57.netlify.app",
  "https://yugaai.vercel.app",
  "https://yuga-ai-frontend-mvp.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list or if it's a subdomain of vercel.app
    if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }
    
    const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
    return callback(new Error(msg), false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cookie', 'Accept'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Handle preflight requests explicitly
app.options('*', cors());

// Increase payload limit for audio data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/voice", voiceRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Welcome to the YUGA AI Backend API",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint with detailed info
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    allowedOrigins: allowedOrigins,
    memoryUsage: process.memoryUsage(),
    uptime: process.uptime()
  });
});

// Test voice endpoint
app.get("/api/voice/test", (req, res) => {
  res.json({ 
    message: "Voice endpoint is working",
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error Stack:', err.stack);
  
  if (err.message.includes('CORS')) {
    return res.status(403).json({ 
      error: 'CORS policy violation',
      allowedOrigins: allowedOrigins,
      yourOrigin: req.headers.origin
    });
  }
  
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { 
      details: err.message,
      stack: err.stack 
    })
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ Allowed origins: ${allowedOrigins.join(', ')}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`🎤 Voice test: http://localhost:${PORT}/api/voice/test`);
});
