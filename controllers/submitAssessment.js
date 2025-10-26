import mongoose from "mongoose";
import { questions } from "../data/questions.js";
import AssessmentSubmission from "../db/models/assessmentSubmission.js";
import LessonProgress from "../db/models/lessonProgress.js";

export const submitAssessment = async (req, res) => {
  const { lessonId } = req.params;
  const userId = req.user?.id; // from token

  const { answers } = req.body;

  try {
    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // 1. Get questions for the lesson
    const lessonQuestions = questions.filter((q) => q.lessonId === lessonId);

    if (lessonQuestions.length === 0) {
      return res
        .status(404)
        .json({ message: "No questions found for this lesson" });
    }

    // 2. Auto-evaluate answers
    let score = 0;
    lessonQuestions.forEach((question) => {
      const submitted = answers.find((a) => a.questionId === question.id);
      if (submitted?.answer?.trim() === question.correctAnswer?.trim()) {
        score++;
      }
    });

    const passed = score / lessonQuestions.length >= 0.6;

    // 3. Save AssessmentSubmission
    const submission = await AssessmentSubmission.create({
      user: new mongoose.Types.ObjectId(userId),
      lesson: lessonId,
      answers,
      score,
      passed,
    });

    // 4. Save or update LessonProgress
    await LessonProgress.findOneAndUpdate(
      { user: userId, lesson: lessonId },
      {
        completed: true,
        submittedAt: new Date(),
        score,
        passed,
      },
      { upsert: true, new: true }
    );

    // 5. Respond to client
    res.status(201).json({ message: "Submitted", score, passed, submission });
  } catch (err) {
    console.error("Assessment submission error:", err);
    res.status(500).json({ message: "Error", error: err.message });
  }
};
