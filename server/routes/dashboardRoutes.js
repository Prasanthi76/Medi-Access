const express = require("express");
const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");
const Appointment = require("../models/Appointment");
const User = require("../models/User");

const router = express.Router();

// ==========================================
// DASHBOARD SUMMARY
// ==========================================

router.get("/", async (req, res) => {
  try {
    const [doctors, hospitals, appointments, patients] =
      await Promise.all([
        Doctor.countDocuments(),
        Hospital.countDocuments(),
        Appointment.countDocuments(),
        User.countDocuments({ role: "patient" }),
      ]);

    res.json({
      message: "Dashboard data fetched successfully",
      data: {
        doctors,
        hospitals,
        appointments,
        patients,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dashboard data",
      error: error.message,
    });
  }
});

module.exports = router;