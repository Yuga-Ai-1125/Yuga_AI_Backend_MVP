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

// Increase payload limit for audio data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Allow frontend domains (localhost + deployed frontend)
const allowedOrigins = [
  "http://localhost:5173",   // local dev
  "https://soft-longma-c0dc57.netlify.app", // old deployment
  "https://yugaai.vercel.app" // current frontend on Vercel
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/voice", voiceRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Yuga Backend!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
