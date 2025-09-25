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

// CORS configuration for deployed environments
const allowedOrigins = [
  "http://localhost:5173", 
  "https://soft-longma-c0dc57.netlify.app",
  "https://yugaai.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cookie']
}));

// Handle preflight requests
app.options('*', cors());

// Increase payload limit for audio data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/voice", voiceRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Yuga Backend!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  if (err.message.includes('CORS')) {
    return res.status(403).json({ error: 'CORS policy violation' });
  }
  
  res.status(500).json({ 
    error: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
});
