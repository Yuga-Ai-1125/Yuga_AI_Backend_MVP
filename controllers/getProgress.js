import mongoose from "mongoose";
import { courses } from "../data/course.js";
import LessonProgress from "../db/models/lessonProgress.js";
import AssessmentSubmission from "../db/models/assessmentSubmission.js";

export const getCourseProgress = async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user.id; // Comes from verifyToken middleware

  const course = courses.find((c) => c.id === courseId);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  try {
    const allLessonIds = course.lessons.map((lesson) => lesson.id);
    const objectUserId = new mongoose.Types.ObjectId(userId);

    // Fetch completed lessons
    const completedLessons = await LessonProgress.find({
      user: objectUserId,
      lesson: { $in: allLessonIds },
      completed: true,
    });

    // Fetch assessments
    const submissions = await AssessmentSubmission.find({
      user: objectUserId,
      lesson: { $in: allLessonIds },
    });

    const completedLessonIds = completedLessons.map((lp) => lp.lesson);

    const progress = {
      totalLessons: allLessonIds.length,
      completedLessons: completedLessonIds.length,
      completedLessonIds,
      assessments: submissions.map((s) => ({
        lessonId: s.lesson,
        score: s.score,
        passed: s.passed,
      })),
      overallStatus:
        completedLessonIds.length === allLessonIds.length &&
        submissions.every((s) => s.passed)
          ? "Course Completed"
          : "In Progress",
    };

    res.status(200).json(progress);
  } catch (err) {
    console.error("Error fetching progress:", err);
    res
      .status(500)
      .json({ message: "Error fetching progress", error: err.message });
  }
};
