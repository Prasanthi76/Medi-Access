const express = require("express");
const Hospital = require("../models/Hospital");

const router = express.Router();

// GET all hospitals
router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch hospitals",
      error: error.message,
    });
  }
});

// GET hospital by ID
router.get("/:id", async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);

    if (!hospital) {
      return res.status(404).json({
        message: "Hospital not found",
      });
    }

    res.json(hospital);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch hospital",
      error: error.message,
    });
  }
});

module.exports = router;