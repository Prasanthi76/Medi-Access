const express = require("express");
const router = express.Router();

// Get all appointments
router.get("/", (req, res) => {
  res.json([]);
});

// Get appointment by ID
router.get("/:id", (req, res) => {
  res.json({
    message: "Appointment details endpoint",
    id: req.params.id
  });
});

// Create appointment
router.post("/", (req, res) => {
  res.status(201).json({
    message: "Appointment created successfully",
    appointment: req.body
  });
});

module.exports = router;