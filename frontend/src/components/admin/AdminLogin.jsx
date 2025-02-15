import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import style
import "../../assets/css/admin/style.css";

const AdminLogin = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = "https://portfolio-backend-bnkc.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    try {
      const response = await fetch(`${API_BASE_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Save token & redirect to dashboard
      setToken(data.token);
      localStorage.setItem("token", data.token);
      navigate("/admin/messages"); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="admin_section">
      <div className="admin_login">
        <h2 className="admin_heading">Admin Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} className="admin_login_form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
