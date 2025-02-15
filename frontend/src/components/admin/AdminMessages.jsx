import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/admin/style.css";

const AdminMessages = ({ token, setToken }) => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = "https://portfolio-backend-bnkc.onrender.com";

  useEffect(() => {
    // 🔹 Redirect to login if not authenticated
    if (!token) {
      navigate("/admin/login");
      return;
    }

    // 🔹 Fetch messages if logged in
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/messages`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to fetch");

        setMessages(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMessages();
  }, [token, navigate]);

  const handleApprove = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/admin/approve/${id}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });

      // 🔹 Update UI after approval
      setMessages(
        messages.map((msg) =>
          msg._id === id ? { ...msg, isApproved: true } : msg
        )
      );
    } catch (err) {
      setError("Failed to approve message");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_BASE_URL}/admin/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to delete");

      // 🔹 Remove deleted message from UI
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (err) {
      setError("Failed to delete message");
    }
  };

  const handleLogout = () => {
    setToken(null); // Clear token
    localStorage.removeItem("adminToken"); // Remove token from storage
    navigate("/admin/login"); // Redirect to login
  };

  return (
    <div className="admin_view_section">
      {/* 🔹 Logout Button */}
      <div className="heading_logout">
        <h2 className="admin_heading">Admin Messages</h2>
        <div className="logout_button">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="user_info_section">
            <div className="user_data">
              <p>{msg.user}</p>
              <p>{msg.email}</p>
            </div>
            <p className="user_message"><span className="text_label">Message = </span>{msg.text}</p>
            <p><span className="text_label">Created At = </span>{msg.createdAt}</p>
            <p>Status: <span className={msg.isApproved ? "Approved" : "Pending"}>{msg.isApproved ? "Approved" : "Pending"}</span></p>
            
            {/* 🔹 Approve Button */}
            {!msg.isApproved && (
              <button className="approve_delete_button" onClick={() => handleApprove(msg._id)}>Approve</button>
            )}

            {/* 🔹 Delete Button */}
            <button className="approve_delete_button" onClick={() => handleDelete(msg._id)}   >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminMessages;
