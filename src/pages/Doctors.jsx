import { Link } from "react-router-dom";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ananya Rao",
      specialization: "General Physician",
      experience: "8 Years Experience",
    },
    {
      id: 2,
      name: "Dr. Rahul Kumar",
      specialization: "Cardiologist",
      experience: "10 Years Experience",
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "6 Years Experience",
    },
  ];

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

      {/* Doctors Section */}
      <main className="page-container">
        <h1 className="page-title">Find a Doctor</h1>

        <div className="card-container">
          {doctors.map((doctor) => (
            <div className="card" key={doctor.id}>
              <h2>{doctor.name}</h2>

              <p>
                <span className="highlight-label">
                  Specialization
                </span>
              </p>

              <p>{doctor.specialization}</p>

              <p>
                <span className="highlight-label">
                  Experience
                </span>
              </p>

              <p>{doctor.experience}</p>

              <Link to="/appointment" className="btn">
                Get Appointment
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Doctors;