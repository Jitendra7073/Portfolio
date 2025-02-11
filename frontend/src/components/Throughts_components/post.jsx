import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../../assets/css/components_css/Throught_Post.css";
import { ToastContainer, toast } from "react-toastify";
import "../../assets/css/components_css/Post.css";

import WhySuggection from "../Throughts_components/Why_Suggetion";

const DiscussionBoard = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [userData, setUserData] = useState({ user: "", email: "" });
  const [otp, setOtp] = useState("");

  const [showUserForm, setShowUserForm] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  // 📌 Fetch messages when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/messages")
      .then((response) => setMessages(response.data))
      .catch(() => toast.error("Failed to fetch messages"));
  }, []);

  // 📌 Handle user clicking send message button
  const handleSend = () => {
    if (inputText.trim() !== "") {
      setShowUserForm(true);
    }
  };

  // 📌 Send OTP to user's email
  const handleUserSubmit = async () => {
    if (!userData.user || !userData.email) {
      toast.error("Please enter both name and email.");
      return;
    }

    setIsSendingOtp(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/messages/send-otp",
        {
          user: userData.user,
          email: userData.email,
          text: inputText,
        }
      );

      toast.success(response.data.message);
      setShowUserForm(false);
      setShowOtpForm(true); // ✅ Ensure OTP form is displayed
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to send OTP");
    }
    setIsSendingOtp(false);
  };

  // 📌 Verify OTP and store message after successful verification
  const handleOtpSubmit = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/messages/verify-otp",
        {
          email: userData.email,
          otp: otp,
        }
      );

      toast.success(response.data.message);
      setShowOtpForm(false);

      // ✅ Fetch updated messages from backend
      axios
        .get("http://localhost:5000/api/messages")
        .then((response) => setMessages(response.data));

      // ✅ Reset input fields after successful submission
      setInputText("");
      setUserData({ user: "", email: "" });
      setOtp("");
    } catch (error) {
      toast.error(error.response?.data?.error || "OTP verification failed");
    }
    setIsVerifyingOtp(false);
  };

  return (
    <div className="discussion-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Drop your ideas / Thoughts here ...."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSend}>➤</button>
      </div>

      {/* 📌 User Details Form */}
      {showUserForm && (
        <div className="overlay" onClick={() => setShowUserForm(false)}>
          <motion.div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <h2 className="popup-title">Enter Your Details</h2>
            <p className="popup-subtitle">Just one step to go! 🚀</p>

            <div className="flex-input-group">
              <input
                type="text"
                placeholder="Your Name"
                value={userData.user}
                onChange={(e) =>
                  setUserData({ ...userData, user: e.target.value })
                }
                className="popup-input"
              />
              <div className="input_button_group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  className="popup-input"
                />
                <button
                  onClick={handleUserSubmit}
                  className="popup-button"
                  disabled={isSendingOtp}
                >
                  {isSendingOtp ? (
                    <span className="spinner"></span>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 📌 OTP Verification Form */}
      {showOtpForm && (
        <div className="overlay" onClick={() => setShowUserForm(false)}>
          <motion.div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <h3 className="popup-title">Enter OTP</h3>
            <div className="input_button_group">
              <input
                type="text"
                placeholder="Enter OTP"
                className="popup-input"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={handleOtpSubmit}
                disabled={isVerifyingOtp}
                className="popup-button"
              >
                {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 📌 Messages Section */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 10px",
              }}
            >
              <strong>{msg.user}</strong>
              <strong>{msg.email}</strong>
            </div>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <ToastContainer />

      <div className="short-discription">
        <WhySuggection />
      </div>
    </div>
  );
};

export default DiscussionBoard;
