import { questions } from "../data/questions.js";

export const getQuestionsByLesson = (req, res) => {
  const { lessonId } = req.params;

  // Optional: case-insensitive comparison
  const lessonQuestions = questions
    .filter((q) => q.lessonId.toLowerCase() === lessonId.toLowerCase())
    .map(({ correctAnswer, ...rest }) => rest); // Hide correct answer

  // Log for debugging
  console.log("Requested lessonId:", lessonId);
  console.log("Matching question count:", lessonQuestions.length);

  if (lessonQuestions.length === 0) {
    return res
      .status(404)
      .json({ message: "No questions found for this lesson" });
  }

  res.json({ questions: lessonQuestions });
};
