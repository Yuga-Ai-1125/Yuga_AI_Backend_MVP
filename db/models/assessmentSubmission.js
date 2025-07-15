import mongoose from "mongoose";

const assessmentSubmissionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lesson: {
    type: String, // or mongoose.Schema.Types.ObjectId if referencing Lesson model
    required: true,
  },
  answers: [
    {
      questionId: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  score: {
    type: Number,
    required: true,
  },
  passed: {
    type: Boolean,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model(
  "AssessmentSubmission",
  assessmentSubmissionSchema
);
