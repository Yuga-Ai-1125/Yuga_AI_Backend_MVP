import express from "express";
import { getCourseProgress } from "../controllers/getProgress.js";
import { verifyToken } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/courses/:courseId/progress", verifyToken, getCourseProgress);
export default router;
