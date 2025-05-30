
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  email: { type: String, required: true, unique: false },
  text: { type: String, required: true },
  otp: { type: String },
  isVerified: { type: Boolean, default: false },
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }, // Stores the like count
  likedBy: { type: [String], default: [] }, // Stores user IPs to prevent duplicate likes
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
