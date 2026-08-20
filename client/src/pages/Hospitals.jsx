import { useState } from "react";
import { Link } from "react-router-dom";
import { hospitals } from "../data/healthcaredata";
import "./Hospitals.css";

function Hospitals() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const filteredHospitals = hospitals.filter((hospital) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      !searchText ||
      hospital.name.toLowerCase().includes(searchText) ||
      hospital.location.toLowerCase().includes(searchText) ||
      hospital.departments.some((dept) =>
        dept.toLowerCase().includes(searchText)
      );

    const matchesLocation =
      !location ||
      hospital.location.toLowerCase() === location.toLowerCase();

    const matchesDepartment =
      !department ||
      hospital.departments.some(
        (dept) => dept.toLowerCase() === department.toLowerCase()
      );

    return matchesSearch && matchesLocation && matchesDepartment;
  });

  const locations = [...new Set(hospitals.map((hospital) => hospital.location))];

  const allDepartments = [
    ...new Set(hospitals.flatMap((hospital) => hospital.departments)),
  ];

  return (
    <div className="hospitals-page">

     {/* Navbar */}
<nav className="navbar">

  <div className="logo">
    Medi Access
    <span className="hospital-logo">🏥</span>
  </div>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/doctors">Doctors</Link>
    <Link to="/hospitals">Hospitals</Link>

    <Link to="/login" className="login-btn">
      Login
    </Link>

    <Link to="/register" className="register-btn">
      Register
    </Link>
  </div>

</nav>

      {/* Header */}
      <section className="hospital-header">
        
        <h1>HOSPITALS NEAR BY YOU</h1>

  
      </section>

      {/* Search */}
      <section className="hospital-search">

        <input
          type="text"
          placeholder="Search hospital, location or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>

          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">All Departments</option>

          {allDepartments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setSearch("");
            setLocation("");
            setDepartment("");
          }}
        >
          Clear Filters
        </button>
      </section>

      {/* Results */}
      <section className="hospital-results">

        <p className="results-heading">SEARCH RESULTS</p>

        <h2>Available Hospitals</h2>

        <p>{filteredHospitals.length} hospitals found</p>

        <div className="hospital-grid">

          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => (
              <div className="hospital-card" key={hospital.id}>

                <div className="hospital-icon">🏥</div>

                <h3>{hospital.name}</h3>

                <p className="hospital-location">
                  📍 {hospital.location}
                </p>

                <p>
                  🏢 {hospital.type} Hospital
                </p>

                <div className="department-list">
                  <strong>Departments</strong>

                  <div className="department-tags">
                    {hospital.departments.map((dept) => (
                      <span key={dept}>{dept}</span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/appointment"
                  className="hospital-btn"
                >
                  Book Appointment
                </Link>

              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No hospitals found</h3>
              <p>
                Try searching with another hospital name,
                location or department.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Hospitals;