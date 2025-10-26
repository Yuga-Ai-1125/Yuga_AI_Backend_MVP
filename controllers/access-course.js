// Import Express framework
import express from "express";
// Import courses data from external file
import { courses } from "../data/course.js";

// Controller function to list all courses (simplified version)
export const listAll = (req, res) => {
  // Create a simplified version of courses with only id, name, chapters, and duration
  const simplifiedCourses = courses.map(({ id, name, chapters, duration }) => ({
    id,
    name,
    chapters,
    duration,
  }));

  // Send the simplified courses as JSON response
  res.json(simplifiedCourses);
};

// GET /courses/:id - Controller function to get a specific course by ID
export const getCourseById = (req, res) => {
  // Find the course with the matching ID from the request parameters
  const course = courses.find((c) => c.id === req.params.id);
  // If course is not found, return a 404 error response
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  // Send the found course as JSON response
  res.json(course);
};

// GET /courses/:id/lessons - Controller function to get all lessons for a specific course
export const getLessonsByCourse = (req, res) => {
  // Find the course with the matching ID from the request parameters
  const course = courses.find((c) => c.id === req.params.id);
  // If course is not found, return a 404 error response
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  // Send the lessons array of the found course as JSON response
  res.json(course.lessons);
};

// GET /courses/lesson/:id - Controller function to get a specific lesson by ID across all courses
export const getLessonById = (req, res) => {
  // Loop through all courses to find the lesson with the matching ID
  for (const course of courses) {
    // Find the lesson in the current course
    const lesson = course.lessons.find((l) => l.id === req.params.id);
    // If lesson is found, return it as JSON response
    if (lesson) {
      return res.json(lesson);
    }
  }
  // If lesson is not found in any course, return a 404 error response
  res.status(404).json({ message: "Lesson not found" });
};