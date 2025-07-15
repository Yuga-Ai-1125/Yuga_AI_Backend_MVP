import { questions } from "../data/questions.js";
import AssessmentSubmission from "../db/models/assessmentSubmission.js";
import LessonProgress from "../db/models/lessonProgress.js";

export const submitAssessment = async (req, res) => {
  const { lessonId } = req.params;
  const { userId, answers } = req.body;

  try {
    const lessonQuestions = questions.filter((q) => q.lessonId === lessonId);

    if (lessonQuestions.length === 0) {
      return res
        .status(404)
        .json({ message: "No questions found for this lesson" });
    }

    // Auto-evaluation
    let score = 0;
    lessonQuestions.forEach((question) => {
      const submitted = answers.find((a) => a.questionId === question.id);
      if (submitted?.answer === question.correctAnswer) {
        score++;
      }
    });

    const passed = score / lessonQuestions.length >= 0.6;

    const submission = await AssessmentSubmission.create({
      user: userId,
      lesson: lessonId,
      answers,
      score,
      passed,
    });

    await LessonProgress.findOneAndUpdate(
      { user: userId, lesson: lessonId },
      { completed: true, submittedAt: new Date(), score, passed },
      { upsert: true, new: true }
    );

    res.status(201).json({ message: "Submitted", score, passed, submission });
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};
