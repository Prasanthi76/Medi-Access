import { Link } from "react-router-dom";
import "./Reminder.css";

function Reminder() {
  return (
    <div className="reminder-page">

      {/* NAVBAR */}
      <nav className="reminder-navbar">

        <div className="reminder-logo">
          <span>Medi Access</span>
          <span>🏥</span>
        </div>

        <div className="reminder-nav-links">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/hospitals">Hospitals</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

      </nav>


      {/* REMINDER CONTENT */}
      <main className="reminder-container">

        <div className="reminder-header">
          <p>APPOINTMENT REMINDER</p>

          <h1>Set Your Reminder</h1>

          <span>
            Never miss your upcoming healthcare appointment.
          </span>
        </div>


        {/* REMINDER CARD */}
        <div className="reminder-card">

          <div className="reminder-icon">
            🔔
          </div>

          <h2>Appointment Reminder</h2>

          <p className="reminder-description">
            Choose when you would like to receive a reminder
            before your appointment.
          </p>


          {/* APPOINTMENT DETAILS */}

          <div className="appointment-summary">

            <div className="summary-item">
              <span>Doctor</span>
              <strong>Dr. Rahul Kumar</strong>
            </div>

            <div className="summary-item">
              <span>Specialization</span>
              <strong>Cardiology</strong>
            </div>

            <div className="summary-item">
              <span>Hospital</span>
              <strong>City Care Hospital</strong>
            </div>

            <div className="summary-item">
              <span>Appointment Date</span>
              <strong>20 August 2026</strong>
            </div>

            <div className="summary-item">
              <span>Appointment Time</span>
              <strong>10:30 AM</strong>
            </div>

          </div>


          {/* REMINDER OPTIONS */}

          <div className="reminder-options">

            <h3>Remind me before appointment</h3>

            <label className="reminder-option">
              <input type="radio" name="reminder" />
              <span>1 Week Before</span>
            </label>

            <label className="reminder-option">
              <input type="radio" name="reminder" />
              <span>1 Day Before</span>
            </label>

            <label className="reminder-option">
              <input type="radio" name="reminder" />
              <span>2 Hours Before</span>
            </label>

            <label className="reminder-option">
              <input type="radio" name="reminder" />
              <span>30 Minutes Before</span>
            </label>

          </div>


          <button className="save-reminder-button">
            Save Reminder
          </button>

        </div>

      </main>

    </div>
  );
}

export default Reminder;