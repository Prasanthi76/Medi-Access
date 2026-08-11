import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { doctors } from "../data/healthcaredata";
import "./Doctors.css";

function Doctors() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");
  const [availability, setAvailability] = useState("");

  const getExperience = (doctor) => {
    if (doctor.experience) return doctor.experience;

    const experienceMap = {
      1: 8,
      2: 10,
      3: 5,
      4: 9,
      5: 7,
      6: 11,
      7: 14,
      8: 6,
      9: 8,
      10: 7,
      11: 12,
      12: 10,
      13: 9,
      14: 8,
      15: 6,
    };

    return experienceMap[doctor.id] || 5;
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        !search ||
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.specialization.toLowerCase().includes(searchText) ||
        doctor.hospital.toLowerCase().includes(searchText);

      const matchesLocation =
        !location ||
        doctor.location.toLowerCase() === location.toLowerCase();

      const matchesFee =
        !fee ||
        (fee === "under300" && doctor.fee < 300) ||
        (fee === "300-500" && doctor.fee >= 300 && doctor.fee <= 500) ||
        (fee === "500-700" && doctor.fee > 500 && doctor.fee <= 700) ||
        (fee === "above700" && doctor.fee > 700);

      const exp = getExperience(doctor);

      const matchesExperience =
        !experience ||
        (experience === "0-5" && exp <= 5) ||
        (experience === "6-10" && exp >= 6 && exp <= 10) ||
        (experience === "11+" && exp >= 11);

      const matchesRating =
        !rating ||
        (rating === "4+" && doctor.rating >= 4) ||
        (rating === "4.5+" && doctor.rating >= 4.5) ||
        (rating === "4.8+" && doctor.rating >= 4.8);

      const matchesAvailability =
        !availability ||
        (availability === "today" && doctor.id % 2 !== 0) ||
        (availability === "tomorrow" && doctor.id % 2 === 0);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesFee &&
        matchesExperience &&
        matchesRating &&
        matchesAvailability
      );
    });
  }, [search, location, fee, experience, rating, availability]);

  const clearFilters = () => {
    setSearch("");
    setLocation("");
    setFee("");
    setExperience("");
    setRating("");
    setAvailability("");
  };

  return (
    <div className="doctors-page">

      {/* NAVBAR */}
      <nav className="doctors-navbar">
        <Link to="/" className="doctors-logo">
          🏥 <span>Medi Access</span>
        </Link>

        <div className="doctors-nav-links">
          <Link to="/">Home</Link>
          <Link to="/doctors" className="active">
            Doctors
          </Link>
          <Link to="/hospitals">Hospitals</Link>
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <Link to="/register" className="nav-register">
            Register
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="doctors-hero">
        <p className="hero-small-title">
          FIND YOUR HEALTHCARE PROFESSIONAL
        </p>

        <h1>Find the Right Doctor</h1>

        <p>
          Search doctors by name, specialization, location, budget,
          experience and availability.
        </p>
      </section>

      {/* SEARCH PANEL */}
      <section className="doctor-search-section">
        <div className="search-box">

          <div className="search-field search-wide">
            <label>Doctor / Specialization / Hospital</label>
            <input
              type="text"
              placeholder="e.g. Cardiologist, Dr. Rahul, Apollo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label>Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Vijayawada">Vijayawada</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Guntur">Guntur</option>
            </select>
          </div>

          <div className="search-field">
            <label>Consultation Fee</label>
            <select
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            >
              <option value="">Any Fee</option>
              <option value="under300">Under ₹300</option>
              <option value="300-500">₹300 - ₹500</option>
              <option value="500-700">₹500 - ₹700</option>
              <option value="above700">Above ₹700</option>
            </select>
          </div>

          <div className="search-field">
            <label>Experience</label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Any Experience</option>
              <option value="0-5">0 - 5 Years</option>
              <option value="6-10">6 - 10 Years</option>
              <option value="11+">11+ Years</option>
            </select>
          </div>

          <div className="search-field">
            <label>Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Any Rating</option>
              <option value="4+">4.0+</option>
              <option value="4.5+">4.5+</option>
              <option value="4.8+">4.8+</option>
            </select>
          </div>

          <div className="search-field">
            <label>Availability</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="">Any Day</option>
              <option value="today">Available Today</option>
              <option value="tomorrow">Available Tomorrow</option>
            </select>
          </div>

          <button className="clear-button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section className="doctor-results">

        <div className="results-heading">
          <div>
            <p className="results-label">SEARCH RESULTS</p>
            <h2>Available Doctors</h2>
          </div>

          <span className="doctor-count">
            {filteredDoctors.length} doctors found
          </span>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="no-doctors">
            <div>🔍</div>
            <h3>No doctors found</h3>
            <p>Try changing your search or filters.</p>
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        ) : (
          <div className="doctor-grid">

            {filteredDoctors.map((doctor) => {
              const exp = getExperience(doctor);

              return (
                <div className="doctor-card" key={doctor.id}>

                  <div className="doctor-top">
                    <div className="doctor-avatar">
                      👨‍⚕️
                    </div>

                    <div className="rating-badge">
                      ⭐ {doctor.rating}
                    </div>
                  </div>

                  <h3>{doctor.name}</h3>

                  <p className="doctor-specialization">
                    {doctor.specialization}
                  </p>

                  <div className="doctor-info">
                    <p>
                      🏥 <span>{doctor.hospital}</span>
                    </p>

                    <p>
                      📍 <span>{doctor.location}</span>
                    </p>

                    <p>
                      💼 <span>{exp} Years Experience</span>
                    </p>

                    <p>
                      💰 <span>Consultation Fee: ₹{doctor.fee}</span>
                    </p>
                  </div>

                  <div className="availability">
                    {doctor.id % 2 !== 0
                      ? "✓ Available Today"
                      : "✓ Available Tomorrow"}
                  </div>

                  <Link
                    to="/appointment"
                    className="appointment-button"
                  >
                    Book Appointment
                  </Link>

                </div>
              );
            })}

          </div>
        )}

      </section>
    </div>
  );
}

export default Doctors;