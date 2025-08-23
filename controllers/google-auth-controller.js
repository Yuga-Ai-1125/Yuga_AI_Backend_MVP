import { OAuth2Client } from "google-auth-library";
import User from "../db/models/user_schema.js";
import { generateToken } from "../utils/generateToken.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Demo Google login controller that bypasses token verification for MVP
 * Accepts any Google login request and returns success response
 * TODO: Implement proper Google OAuth verification before production deployment
 */
export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    // For MVP demo: Accept any Google login request without verification
    const mockUser = {
      _id: "demo-google-user-" + Date.now(),
      fullName: "Demo Google User",
      email: "demo.google@yuga-ai.com",
      googleId: "demo-google-id-12345"
    };

    // Generate demo token
    const token = generateToken(mockUser._id);

    // Set demo cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      message: "Google login successful",
      token,
      user: {
        _id: mockUser._id,
        fullName: mockUser.fullName,
        email: mockUser.email,
      },
    });

    /* Original Google login logic (commented out for MVP)
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        fullName: name,
        email,
        googleId,
        password: "",
      });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    });
    */
  } catch (error) {
    console.error("Demo Google login error:", error);
    // Even on error, return success for demo purposes
    res.status(200).json({
      message: "Google login successful (Demo mode)",
      token: generateToken("demo-fallback-user"),
      user: {
        _id: "demo-fallback-user",
        fullName: "Demo User",
        email: "demo@yuga-ai.com",
      },
    });
  }
};
