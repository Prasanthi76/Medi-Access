const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");

// ==========================================
// GET ALL APPOINTMENTS
// ==========================================

router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .populate("hospital", "name location");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch appointments",
      error: error.message,
    });
  }
});

// ==========================================
// GET APPOINTMENT BY ID
// ==========================================

router.get("/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .populate("hospital", "name location");

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.json(appointment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch appointment",
      error: error.message,
    });
  }
});

// ==========================================
// CREATE APPOINTMENT
// ==========================================

router.post("/", async (req, res) => {
  try {
    const {
      patient,
      doctor,
      hospital,
      appointmentDate,
      appointmentTime,
      reason,
    } = req.body;

    const appointment = new Appointment({
      patient,
      doctor,
      hospital,
      appointmentDate,
      appointmentTime,
      reason,
    });

    const savedAppointment = await appointment.save();

    res.status(201).json({
      message: "Appointment created successfully",
      appointment: savedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create appointment",
      error: error.message,
    });
  }
});

// ==========================================
// UPDATE APPOINTMENT STATUS
// ==========================================

router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "pending",
      "confirmed",
      "completed",
      "cancelled",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid appointment status",
        allowedStatuses,
      });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .populate("hospital", "name location");

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.json({
      message: "Appointment status updated successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update appointment status",
      error: error.message,
    });
  }
});

// ==========================================
// CANCEL APPOINTMENT
// ==========================================

router.patch("/:id/cancel", async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true, runValidators: true }
    )
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .populate("hospital", "name location");

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.json({
      message: "Appointment cancelled successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to cancel appointment",
      error: error.message,
    });
  }
});

// ==========================================
// SAVE APPOINTMENT REMINDER
// ==========================================

router.patch("/:id/reminder", async (req, res) => {
  try {
    const { reminderTime } = req.body;

    const allowedReminderTimes = [
      "1_week",
      "1_day",
      "2_hours",
      "30_minutes",
    ];

    if (!allowedReminderTimes.includes(reminderTime)) {
      return res.status(400).json({
        message: "Invalid reminder time",
        allowedReminderTimes,
      });
    }

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        reminderTime,
        reminderSent: false,
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .populate("hospital", "name location");

    if (!appointment) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    res.json({
      message: "Appointment reminder saved successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to save appointment reminder",
      error: error.message,
    });
  }
});

module.exports = router;