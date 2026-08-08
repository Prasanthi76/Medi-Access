import { Link } from "react-router-dom";

function Hospitals() {
  const hospitals = [
    {
      id: 1,
      name: "MediCare Hospital",
      location: "Hyderabad",
      type: "Multi-Speciality Hospital",
    },
    {
      id: 2,
      name: "City Care Hospital",
      location: "Hyderabad",
      type: "General Hospital",
    },
    {
      id: 3,
      name: "Apollo Care Hospital",
      location: "Hyderabad",
      type: "Speciality Hospital",
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

      {/* Hospitals Section */}
      <main className="page-container">
        <h1 className="page-title">Find a Hospital</h1>

        <div className="card-container">
          {hospitals.map((hospital) => (
            <div className="card" key={hospital.id}>
              <h2>{hospital.name}</h2>

              <p>
                <span className="highlight-label">
                  Location
                </span>
              </p>

              <p>{hospital.location}</p>

              <p>
                <span className="highlight-label">
                  Type
                </span>
              </p>

              <p>{hospital.type}</p>

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

export default Hospitals;