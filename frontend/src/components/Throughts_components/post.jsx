import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { FcLike } from "react-icons/fc"; // Liked heart icon
import { AiOutlineHeart } from "react-icons/ai"; // Unliked heart icon
import WhySuggection from "../Throughts_components/Why_Suggetion";
import "../../assets/css/components_css/Throught_Post.css";
import "../../assets/css/components_css/Post.css";

const DiscussionBoard = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [userData, setUserData] = useState({ user: "", email: "" });
  const [otp, setOtp] = useState("");
  const [showUserForm, setShowUserForm] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

  const API_BASE_URL = "https://portfolio-backend-bnkc.onrender.com";
  // const API_BASE_URL = "http://localhost:5000";

  // 📌 Fetch messages when component mounts
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/messages`)
      .then((response) => {
        // Attach likedByUser status from localStorage
        const updatedMessages = response.data.map((msg) => ({
          ...msg,
          likedByUser: localStorage.getItem(`liked_${msg._id}`) === "true",
        }));
        setMessages(updatedMessages);
      })
      .catch(() => toast.error("Failed to fetch messages"));
  }, []);

  // 📌 Handle sending messages
  const handleSend = () => {
    if (inputText.trim() !== "") {
      setShowUserForm(true);
    }
  };

  // 📌 Send OTP
  const handleUserSubmit = async () => {
    if (!userData.user || !userData.email) {
      toast.error("Please enter both name and email.");
      return;
    }

    setIsSendingOtp(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/messages/send-otp`,
        {
          user: userData.user,
          email: userData.email,
          text: inputText,
        }
      );

      toast.success(response.data.message);
      setShowUserForm(false);
      setShowOtpForm(true);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to send OTP");
    }
    setIsSendingOtp(false);
  };

  // 📌 Verify OTP and store message
  const handleOtpSubmit = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/messages/verify-otp`,
        {
          email: userData.email,
          otp: otp,
        }
      );

      toast.success(response.data.message);
      setShowOtpForm(false);

      // Fetch updated messages
      axios.get(`${API_BASE_URL}/api/messages`).then((response) => {
        setMessages(response.data);
      });

      // Reset input fields
      setInputText("");
      setUserData({ user: "", email: "" });
      setOtp("");
    } catch (error) {
      toast.error(error.response?.data?.error || "OTP verification failed");
    }
    setIsVerifyingOtp(false);
  };

  // 📌 Handle Like Functionality using LocalStorage
  const handleLike = async (messageId) => {
    const likedKey = `liked_${messageId}`;

    // Check if the user has already liked this message
    if (localStorage.getItem(likedKey)) {
      toast.error("You have already liked this message.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/messages/like/${messageId}`
      );

      if (response.data.success) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg._id === messageId ? { ...msg, likes: response.data.likes } : msg
          )
        );

        // ✅ Store like status in localStorage
        localStorage.setItem(likedKey, "true");
      }
    } catch (error) {
      toast.error("Failed to like message.");
    }
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
                className="popup-button-window"
                disabled={isSendingOtp}
              >
                {isSendingOtp ? "Sending..." : "Send OTP"}
              </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 📌 OTP Verification Form */}
      {showOtpForm && (
        <div className="overlay" onClick={() => setShowOtpForm(false)}>
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
              className="popup-button-window"
            >
              {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
            </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 📌 Messages Section */}
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg._id} className="message-card">
            <div className="message-header" style={{display:"flex", justifyContent:"space-between"}}>
              <strong>{msg.user}</strong>
              <div className="like-comments">
                {localStorage.getItem(`liked_${msg._id}`) ? (
                  <FcLike className="liked" />
                ) : (
                  <AiOutlineHeart
                    className="unliked"
                    onClick={() => handleLike(msg._id)}
                  />
                )}
                <span>{msg.likes || 0}</span>
              </div>
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
