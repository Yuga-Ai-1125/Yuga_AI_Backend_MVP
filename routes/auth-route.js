import express from "express";
import {
  forgotPassword,
  getUserProfile,
  getUserProfileById,
  login,
  logout,
  resetPassword,
  signup,
  updateUserProfile,
} from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth-middleware.js";
import { googleLogin } from "../controllers/google-auth-controller.js";

const router = express.Router();

router.get("/users/:id", verifyToken, getUserProfile);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.put("/users/:id", verifyToken, updateUserProfile);
router.post("/google-login", googleLogin);

router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await getUserProfileById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      currentStreak: user.currentStreak || 0,
    });
  } catch (err) {
    console.error("Error in /me route:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
