import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Passwords do not match",
    },
  },

  preferences: {
    learningStyle: {
      type: String,
      enum: ["visual", "auditory", "reading", "kinesthetic"],
      default: "visual",
    },
    difficulty: {
      type: String,
      enum: ["easy", "intermediate", "hard"],
      default: "intermediate",
    },

    notifications: {
      type: Boolean,
      default: true,
    },
  },
  progress: {
    currentStreak: {
      type: Number,
      default: 0,
    },
    longestStreak: {
      type: Number,
      default: 0,
    },
    weeklyGoal: {
      type: Number,
      default: 5,
    },
    completedLessons: [
      {
        lessonId: String,
        completedAt: Date,
      },
    ],
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

// ✅ Pre-save hook to hash password only if modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = undefined; // remove confirmPassword from DB
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
