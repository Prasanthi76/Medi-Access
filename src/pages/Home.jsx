import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="brand">
          <span className="brand-name">Medi Access</span>
          <span className="hospital-logo">🏥</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/hospitals">Hospitals</Link>

          <Link to="/login" className="nav-button">
            Login
          </Link>

          <Link to="/register" className="nav-button">
            Register
          </Link>
        </div>

      </nav>

      {/* HOME CONTENT */}
      <main className="home-content">

        <h1 className="main-heading">
          Welcome to Medi Access
        </h1>

        <p className="home-description">
          Book your hospital appointments easily and quickly.
        </p>

        <div className="home-buttons">

          <Link to="/doctors">
            <button className="action-button">
              Find Doctor
            </button>
          </Link>

          <Link to="/hospitals">
            <button className="action-button">
              Find Hospital
            </button>
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Home;