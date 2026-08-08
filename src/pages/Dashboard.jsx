import { Link } from "react-router-dom";

function Dashboard() {
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

      {/* Dashboard */}
      <main className="dashboard-container">
        <h1 className="dashboard-title">
          Medi Access Dashboard
        </h1>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Find a Doctor</h3>

            <p>
              Search for doctors based on their
              specialization.
            </p>

            <Link to="/doctors" className="btn">
              View Doctors
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Find a Hospital</h3>

            <p>
              Explore hospitals and their available
              services.
            </p>

            <Link to="/hospitals" className="btn">
              View Hospitals
            </Link>
          </div>

          <div className="dashboard-card">
            <h3>Book Appointment</h3>

            <p>
              Schedule an appointment with a doctor.
            </p>

            <Link to="/appointment" className="btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;