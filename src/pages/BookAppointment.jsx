import React from "react";
import "./BookAppointment.css";

function BookAppointment() {
  return (
    <div className="appointment-page">

      <div className="appointment-card">

        <div className="appointment-header">
          <h1>Book an Appointment</h1>
          <p>Schedule your hospital visit easily</p>
        </div>

        <form className="appointment-form">

          <label>Patient Name</label>
          <input
            type="text"
            placeholder="Enter patient name"
          />

          <label>Doctor</label>
          <select>
            <option>Select Doctor</option>
            <option>Dr. Priya</option>
            <option>Dr. Rahul</option>
            <option>Dr. Anjali</option>
          </select>

          <label>Hospital</label>
          <select>
            <option>Select Hospital</option>
            <option>City Care Hospital</option>
            <option>Medicare Hospital</option>
            <option>Health Plus Hospital</option>
          </select>

          <label>Appointment Date</label>
          <input type="date" />

          <label>Appointment Time</label>
          <input type="time" />

          <button type="submit">
            Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default BookAppointment;