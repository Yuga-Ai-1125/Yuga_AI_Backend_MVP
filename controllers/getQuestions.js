import { questions } from "../data/questions.js";

export const getQuestionsByLesson = (req, res) => {
  const { lessonId } = req.params;

  const lessonQuestions = questions
    .filter((q) => q.lessonId === lessonId)
    .map(({ correctAnswer, ...rest }) => rest); // Remove correctAnswer

  if (lessonQuestions.length === 0) {
    return res
      .status(404)
      .json({ message: "No questions found for this lesson" });
  }

  res.json({ questions: lessonQuestions });
};
