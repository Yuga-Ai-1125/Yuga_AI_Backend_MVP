import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/index.js";
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import courseRoutes from "./routes/course-route.js";
import assessmentRoutes from "./routes/assessment-route.js";
import progressRoutes from "./routes/progress-route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api", courseRoutes);
app.use("/api", assessmentRoutes);
app.use("/api", progressRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Yuga Backend!");
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
