import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInput || !password) {
      alert("Please enter email/mobile and password");
      return;
    }

    try {
      // Decide whether user entered email or mobile
      const isEmail = loginInput.includes("@");

      const loginData = isEmail
        ? {
            email: loginInput,
            password: password,
          }
        : {
            mobile: loginInput,
            password: password,
          };

      // Send login request to backend
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      console.log("Login response:", response.data);

      alert("Login successful!");

      // Store logged-in user information
      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      // Go to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      if (error.response && error.response.data) {
        alert(
          error.response.data.message ||
            "Login failed. Please check your details."
        );
      } else {
        alert(
          "Unable to connect to server. Make sure backend is running on port 5000."
        );
      }
    }
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-name">Medi Access</span>
          <span className="hospital-logo">🏥</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/doctors">Doctors</Link>

          <Link to="/hospitals">Hospitals</Link>

          <Link to="/login" className="green-btn">
            Login
          </Link>

          <Link to="/register" className="green-btn">
            Register
          </Link>
        </div>
      </nav>

      {/* Login Form */}
      <main className="form-container">
        <h1 className="login-title">Login to Medi Access</h1>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email / Mobile</label>

            <input
              type="text"
              placeholder="Enter your email or mobile"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="form-button">
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </main>
    </div>
  );
}

export default Login;