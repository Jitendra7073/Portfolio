const express = require("express");
const router = express.Router();
const Message = require("../models/UserSuggestion");
const sendOTP = require("../utils/sendOTP");

// 📌 Step 1: User submits message and gets an OTP
router.post("/send-otp", async (req, res) => {
  try {
    const { user, email, text } = req.body;

    if (!user || !email || !text) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const otp = await sendOTP(email);

    const newMessage = new Message({ user, email, text, otp });
    await newMessage.save();

    res.status(200).json({ message: "OTP sent to email", email });
  } catch (error) {
    res.status(500).json({ error: "Failed to send OTP" });
  }
});

// 📌 Step 2: Verify OTP
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const message = await Message.findOne({ email, otp });

    if (!message) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    message.isVerified = true;
    await message.save();

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ error: "OTP verification failed" });
  }
});

// 📌 Step 3: Admin Approves Message
router.post("/approve-message", async (req, res) => {
  try {
    const { id } = req.body;
    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    message.isApproved = true;
    await message.save();

    res.status(200).json({ message: "Message approved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to approve message" });
  }
});

// 📌 Step 4: Fetch Approved Messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({ isApproved: true }).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
