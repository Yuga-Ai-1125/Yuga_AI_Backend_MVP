import express from "express";
import {
  getCourseById,
  getLessonById,
  getLessonsByCourse,
  listAll,
} from "../controllers/access-course.js";

const router = express.Router();

router.get("/courses", listAll);
router.get("/courses/:id", getCourseById);
router.get("/courses/:id/lessons", getLessonsByCourse);
router.get("/lessons/:id", getLessonById);

export default router;
