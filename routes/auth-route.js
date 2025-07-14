import express from "express";
import {
  forgotPassword,
  getUserProfile,
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
export default router;
