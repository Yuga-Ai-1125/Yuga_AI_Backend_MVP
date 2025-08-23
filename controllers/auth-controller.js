import User from "../db/models/user_schema.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";

/**
 * Demo signup controller that bypasses validation for MVP
 * Accepts any credentials and returns success response
 * TODO: Implement proper validation before production deployment
 */
export const signup = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  try {
    // For MVP demo: Accept any signup credentials without validation
    const mockUser = {
      _id: "demo-user-" + Date.now(), // Generate unique demo ID
      fullName: fullName || "Demo User",
      email: email || "demo@yuga-ai.com",
      createdAt: new Date()
    };

    // Generate a demo token
    const token = generateToken(mockUser._id);

    // Set demo cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: mockUser._id,
        fullName: mockUser.fullName,
        email: mockUser.email,
      },
    });

    /* Original signup logic (commented out for MVP)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // No need to hash manually – schema does it!
    const newUser = new User({
      fullName,
      email,
      password,
      confirmPassword,
    });

    await newUser.save();

    const token = generateToken(newUser._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
    */
  } catch (error) {
    console.error("Demo signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * Demo login controller that bypasses credential validation for MVP
 * Accepts any login credentials and returns success response
 * TODO: Implement proper authentication before production deployment
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // For MVP demo: Accept any login credentials without validation
    const mockUser = {
      _id: "demo-user-" + Date.now(), // Generate unique demo ID
      fullName: "Demo User",
      email: email || "demo@yuga-ai.com"
    };

    // Generate a demo token
    const token = generateToken(mockUser._id);

    // Set demo cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: mockUser._id,
        fullName: mockUser.fullName,
        email: mockUser.email,
      },
    });

    /* Original login logic (commented out for MVP)
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
    */
  } catch (err) {
    console.error("Demo login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Logout controller - clears authentication cookies
 */
export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Demo forgot password controller for MVP
 * Returns success without sending actual email
 */
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: "Email not provided" });
    }

    // For MVP demo: Always return success without sending actual email
    res.status(200).json({ 
      message: "Password reset email sent successfully (Demo mode)" 
    });

    /* Original forgot password logic (commented out for MVP)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    await user.save();

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset-password/${resetToken}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error("There was an error: ", err);
        return res.status(500).json({ message: "Email could not be sent" });
      } else {
        res.status(200).json({ message: "Password reset email sent" });
      }
    });
    */
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Demo reset password controller for MVP
 * Returns success without actual password reset
 */
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }

    // For MVP demo: Always return success
    res.status(200).json({ message: "Password reset successful (Demo mode)" });

    /* Original reset password logic (commented out for MVP)
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = newPassword;
    user.confirmPassword = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
    */
  } catch (err) {
    console.error("Password reset error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Demo get user profile controller
 * Returns mock user data for any user ID
 */
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    // For MVP demo: Return mock user data
    const mockUser = {
      _id: userId,
      fullName: "Demo User",
      email: "demo@yuga-ai.com",
      currentStreak: 5,
      joinedDate: new Date(),
    };

    res.status(200).json(mockUser);

    /* Original get user profile logic (commented out for MVP)
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
    */
  } catch (error) {
    console.error("Get User Profile Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Demo update user profile controller
 * Returns success for any update request
 */
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Request body is empty" });
    }

    if ("password" in req.body || "confirmPassword" in req.body) {
      return res
        .status(400)
        .json({ message: "Password updates not allowed in profile update" });
    }

    // For MVP demo: Return mock updated user
    const mockUpdatedUser = {
      _id: userId,
      fullName: req.body.fullName || "Demo User",
      email: req.body.email || "demo@yuga-ai.com",
      currentStreak: req.body.currentStreak || 5,
      ...req.body
    };

    res.status(200).json({
      message: "Profile updated successfully",
      user: mockUpdatedUser,
    });

    /* Original update user profile logic (commented out for MVP)
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
    */
  } catch (error) {
    console.error("Update User Profile Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Demo get user profile by ID helper function
 * Returns mock user data for any user ID
 */
export const getUserProfileById = async (userId) => {
  try {
    // For MVP demo: Return mock user data
    const mockUser = {
      _id: userId,
      fullName: "Demo User",
      email: "demo@yuga-ai.com",
      currentStreak: 5,
    };

    return mockUser;

    /* Original getUserProfileById logic (commented out for MVP)
    const user = await User.findById(userId).select("-password");
    return user;
    */
  } catch (err) {
    console.error("GetUserProfileById Error:", err);
    throw err;
  }
};
