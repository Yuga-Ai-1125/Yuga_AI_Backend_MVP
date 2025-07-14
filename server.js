import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/index.js";
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Yuga Backend!");
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
