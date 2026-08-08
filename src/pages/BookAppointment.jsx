import { useState } from "react";
import { Link } from "react-router-dom";

function BookAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctor: "",
    hospital: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.patientName ||
      !formData.doctor ||
      !formData.hospital ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Appointment request submitted!");

    setFormData({
      patientName: "",
      doctor: "",
      hospital: "",
      date: "",
      time: "",
    });
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

      {/* Appointment Form */}
      <main className="form-container">
        <h1>Book an Appointment</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name</label>

            <input
              type="text"
              name="patientName"
              placeholder="Enter patient name"
              value={formData.patientName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Doctor</label>

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Ananya Rao">
                Dr. Ananya Rao
              </option>
              <option value="Dr. Rahul Kumar">
                Dr. Rahul Kumar
              </option>
              <option value="Dr. Priya Sharma">
                Dr. Priya Sharma
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Hospital</label>

            <select
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
            >
              <option value="">Select Hospital</option>
              <option value="MediCare Hospital">
                MediCare Hospital
              </option>
              <option value="City Care Hospital">
                City Care Hospital
              </option>
              <option value="Apollo Care Hospital">
                Apollo Care Hospital
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Appointment Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Appointment Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="form-button">
            Book Appointment
          </button>
        </form>
      </main>
    </div>
  );
}

export default BookAppointment;