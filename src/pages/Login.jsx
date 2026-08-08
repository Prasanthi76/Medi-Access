import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Medi Access</div>

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
        <h1>Login to Medi Access</h1>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/register">
            Register here
          </Link>
        </p>
      </main>
    </div>
  );
}

export default Login;