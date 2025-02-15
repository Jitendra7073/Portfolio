const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Message = require("../models/UserSuggestion");

const router = express.Router();
const SECRET_KEY = "ardnetijrahtus"; // Use environment variables for security

// 🔹 Admin Credentials (Stored as Hashed Password)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10); // Hashed Password

// ✅ Admin Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔹 Check Admin Email & Password
    if (
      email !== ADMIN_EMAIL ||
      !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)
    ) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 🔹 Generate JWT Token (Expires in 2 Minutes)
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1m" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error during login" });
  }
});

// ✅ Middleware to Verify Token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer Token
  if (!token)
    return res.status(403).json({ error: "Access denied, token missing" });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.admin = verified; // Attach admin data to request
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// ✅ Fetch All Messages (Protected Route)
router.get("/messages", verifyToken, async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// ✅ Approve Message by ID (Protected Route)
router.post("/approve/:id", verifyToken, async (req, res) => {
  try {
    await Message.findByIdAndUpdate(req.params.id, { isApproved: true });
    res.status(200).json({ message: "Message approved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve message" });
  }
});
// ✅ Approve Message by ID (Protected Route)

router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    if (!deletedMessage)
      return res.status(404).json({ error: "Message not found" });

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete message" });
  }
});

module.exports = router;
