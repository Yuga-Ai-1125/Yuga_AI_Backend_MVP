import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import db from "./db/index.js";
import authRoutes from "./routes/auth-route.js";
import courseRoutes from "./routes/course-route.js";
import assessmentRoutes from "./routes/assessment-route.js";
import progressRoutes from "./routes/progress-route.js";
import voiceRoutes from "./routes/voice-route.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Increase payload limit for audio data
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// ✅ CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://soft-longma-c0dc57.netlify.app",
      "https://yugaai.app",
      "http://66.116.198.191",
    ],
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/voice", voiceRoutes);

// ✅ Static file serving for production (Render, Netlify, etc.)
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/dist");
  app.use(express.static(buildPath));

  // Handle SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
} else {
  // Default route for local dev
  app.get("/", (req, res) => {
    res.send("Welcome to the Yuga Backend!");
  });
}

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("💥 Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
