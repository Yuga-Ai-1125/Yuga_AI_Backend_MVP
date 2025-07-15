import express from "express";
import { submitAssessment } from "../controllers/submitAssessment.js";
import { verifyToken } from "../middleware/auth-middleware.js";
import { getQuestionsByLesson } from "../controllers/getQuestions.js";

const router = express.Router();
router.get("/lessons/:lessonId/assessment", verifyToken, getQuestionsByLesson);
router.post(
  "/lessons/:lessonId/assessment/submit",
  verifyToken,
  submitAssessment
);
export default router;
