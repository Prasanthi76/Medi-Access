import { Link } from "react-router-dom";
import { useState } from "react";
import { doctors, hospitals, departments } from "../data/healthcareData";
import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("none");
  const [searched, setSearched] = useState(false);

  const searchHealthcare = () => {
    setSearched(true);
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const normalizedLocation = location.trim().toLowerCase();

  // =========================
  // FILTER DOCTORS
  // =========================

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      !normalizedSearch ||
      doctor.name.toLowerCase().includes(normalizedSearch) ||
      doctor.specialization.toLowerCase().includes(normalizedSearch) ||
      doctor.hospital.toLowerCase().includes(normalizedSearch);

    const matchesLocation =
      !normalizedLocation ||
      doctor.location.toLowerCase().includes(normalizedLocation);

    let matchesBudget = true;

    if (budget === "100-300") {
      matchesBudget = doctor.fee <= 300;
    }

    if (budget === "300-500") {
      matchesBudget = doctor.fee > 300 && doctor.fee <= 500;
    }

    if (budget === "500-1000") {
      matchesBudget = doctor.fee > 500 && doctor.fee <= 1000;
    }

    if (budget === "1000-plus") {
      matchesBudget = doctor.fee > 1000;
    }

    return matchesSearch && matchesLocation && matchesBudget;
  });

  // =========================
  // FILTER HOSPITALS
  // =========================

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      !normalizedSearch ||
      hospital.name.toLowerCase().includes(normalizedSearch) ||
      hospital.location.toLowerCase().includes(normalizedSearch) ||
      hospital.departments.some((department) =>
        department.toLowerCase().includes(normalizedSearch)
      );

    const matchesLocation =
      !normalizedLocation ||
      hospital.location.toLowerCase().includes(normalizedLocation);

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="home-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="brand">
          <span className="brand-name">Medi Access</span>
          <span className="hospital-logo">🏥</span>
        </div>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/doctors">
            Doctors
          </Link>

          <Link to="/hospitals">
            Hospitals
          </Link>

          <Link to="/login" className="nav-button">
            Login
          </Link>

          <Link to="/register" className="nav-button">
            Register
          </Link>

        </div>

      </nav>


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero-section">

        <h1 className="hero-title">
          SMART HEALTHCARE DISCOVERY
        </h1>

        


        {/* =========================
            SEARCH
        ========================= */}

        <div className="search-container">

          <div className="search-field">

            <label>
              Doctor / Hospital / Specialization
            </label>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Doctor, hospital or specialist"
            />

          </div>


          <div className="search-field">

            <label>
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City or area"
            />

          </div>


          <div className="search-field">

            <label>
              Budget
            </label>

            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >

              <option value="none">
                None
              </option>

              <option value="100-300">
                ₹100 - ₹300
              </option>

              <option value="300-500">
                ₹300 - ₹500
              </option>

              <option value="500-1000">
                ₹500 - ₹1000
              </option>

              <option value="1000-plus">
                ₹1000+
              </option>

            </select>

          </div>


          <button
            className="search-button"
            onClick={searchHealthcare}
          >
            Search
          </button>

        </div>

      </section>


      {/* =========================
          SEARCH RESULTS
      ========================= */}

      {searched && (

        <section className="search-results">

          <div className="section-heading">

            <p>
              SEARCH RESULTS
            </p>

            <h2>
              Doctors & Hospitals
            </h2>

            <span>
              Results based on your search
            </span>

          </div>


          {/* DOCTORS */}

          <div className="results-title">

            <h3>
              Doctors ({filteredDoctors.length})
            </h3>

          </div>


          {filteredDoctors.length > 0 ? (

            <div className="doctor-grid">

              {filteredDoctors.map((doctor) => (

                <div
                  className="doctor-card"
                  key={doctor.id}
                >

                  <div className="doctor-image">
                    👨‍⚕️
                  </div>

                  <h3>
                    {doctor.name}
                  </h3>

                  <p>
                    {doctor.specialization}
                  </p>

                  <p>
                    📍 {doctor.location}
                  </p>

                  <p>
                    🏥 {doctor.hospital}
                  </p>

                  <p>
                    ⭐ {doctor.rating}
                  </p>

                  <p>
                    Consultation: ₹{doctor.fee}
                  </p>

                  <Link to="/doctors">

                    <button>
                      View Doctor
                    </button>

                  </Link>

                </div>

              ))}

            </div>

          ) : (

            <div className="no-results">
              No doctors found for your search.
            </div>

          )}


          {/* HOSPITALS */}

          <div className="results-title hospital-results-title">

            <h3>
              Hospitals ({filteredHospitals.length})
            </h3>

          </div>


          {filteredHospitals.length > 0 ? (

            <div className="hospital-grid">

              {filteredHospitals.map((hospital) => (

                <div
                  className="hospital-card"
                  key={hospital.id}
                >

                  <div className="hospital-icon">
                    🏥
                  </div>

                  <h3>
                    {hospital.name}
                  </h3>

                  <p>
                    📍 {hospital.location}
                  </p>

                  <p>
                    {hospital.type} Hospital
                  </p>


                  <div className="hospital-departments">

                    {hospital.departments.map(
                      (department) => (

                        <span key={department}>
                          {department}
                        </span>

                      )
                    )}

                  </div>


                  <Link to="/hospitals">

                    <button>
                      View Hospital
                    </button>

                  </Link>

                </div>

              ))}

            </div>

          ) : (

            <div className="no-results">
              No hospitals found for your search.
            </div>

          )}

        </section>

      )}


      {/* =========================
          SYMPTOM CHECKER
      ========================= */}

      <section className="symptom-section">

        <p>
          SMART SPECIALIST SUGGESTION
        </p>
         <h2>
          Not sure which specialist you need?
        </h2>

        <span>
          Enter your symptoms and get a suitable
          specialist suggestion.
        </span>


        
        <br />

        <Link to="/symptoms">

          <button className="action-button">
            Check Symptoms
          </button>

        </Link>

      </section>


      {/* =========================
          DEPARTMENTS
      ========================= */}

      <section className="departments-section">

        <div className="section-heading">

          <h2>
             SPECIALIZATIONS
          </h2>

          

        </div>


        <div className="department-grid">

          {departments.map((department) => (

            <div
              className="department-card"
              key={department.name}
              onClick={() => {
                setSearchTerm(department.name);
                setSearched(true);
              }}
            >

              <span>
                {department.icon}
              </span>

              <h3>
                {department.name}
              </h3>

            </div>

          ))}

        </div>

      </section>


      

     

      {/* =========================
          TESTIMONIALS
      ========================= */}

      <section className="testimonials-section">

        <div className="section-heading">

          <h2>
            PATIENT EXPERIENCES
          </h2>

          

        </div>


        <div className="testimonial-grid">

          <div className="testimonial-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "Medi Access helped me find a suitable
              doctor near my location easily."
            </p>

            <strong>
              — Patient
            </strong>

          </div>


          <div className="testimonial-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "The budget option helped me find
              an affordable appointment."
            </p>

            <strong>
              — Patient
            </strong>

          </div>


          <div className="testimonial-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "Finding the right specialist became
              much easier with Medi Access."
            </p>

            <strong>
              — Patient
            </strong>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-column">

          <h3>
            Medi Access 🏥
          </h3>

          <p>
            Making healthcare discovery and
            appointment booking simple and accessible.
          </p>

        </div>


        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/doctors">
            Doctors
          </Link>

          <Link to="/hospitals">
            Hospitals
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            For Patients
          </h3>

          <Link to="/doctors">
            Find Doctors
          </Link>

          <Link to="/hospitals">
            Find Hospitals
          </Link>

          <Link to="/register">
            Register
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            Contact
          </h3>

          <p>
            📧 support@mediaccess.com
          </p>

          <p>
            📱 +91 XXXXX XXXXX
          </p>

        </div>


        <div className="footer-bottom">

          © 2026 Medi Access. All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default Home;