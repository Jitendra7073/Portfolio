import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import style
import "../../assets/css/admin/style.css";

const AdminLogin = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const API_BASE_URL = "https://portfolio-backend-bnkc.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error
    if (isLoading) return;
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
            disabled={isLoading}
          />
          <div className="input_group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
            <button
              type="button"
              className="eye_toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button type="submit" disabled={isLoading} className={isLoading ? "loading" : ""}>
            {isLoading ? (
              <span className="spinner_inline">Verifying credentials...</span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
