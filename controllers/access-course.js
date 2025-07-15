import express from "express";
import { courses } from "../data/course.js";

export const listAll = (req, res) => {
  const simplifiedCourses = courses.map(({ id, name, chapters, duration }) => ({
    id,
    name,
    chapters,
    duration,
  }));

  res.json(simplifiedCourses);
};

// GET /courses/:id
export const getCourseById = (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
};

// GET /courses/:id/lessons
export const getLessonsByCourse = (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course.lessons);
};

// GET /courses/lesson/:id
export const getLessonById = (req, res) => {
  for (const course of courses) {
    const lesson = course.lessons.find((l) => l.id === req.params.id);
    if (lesson) {
      return res.json(lesson);
    }
  }
  res.status(404).json({ message: "Lesson not found" });
};
