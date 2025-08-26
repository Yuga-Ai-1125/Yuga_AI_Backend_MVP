import jwt from "jsonwebtoken";

/**
 * Authentication middleware that bypasses token verification for MVP demo
 * This middleware allows any request to pass through without authentication
 * TODO: Implement proper token verification before production deployment
 */
export const verifyToken = (req, res, next) => {
  // For MVP demo: Always allow access with a mock user
  // This bypasses actual token verification
  req.user = { 
    id: "demo-user-id-12345", // Mock user ID for demo purposes
    email: "demo@yuga-ai.com",
    fullName: "Demo User"
  };

  // Always proceed to next middleware/route handler
  next();

  /* 
  // Original authentication logic (commented out for MVP)
  const token = req.cookies?.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { id: decoded.id || decoded._id || decoded.userId };

    if (!req.user.id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
  */
};
