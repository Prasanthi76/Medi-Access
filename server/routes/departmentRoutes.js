const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

// GET ALL DEPARTMENTS
router.get("/", async (req, res) => {
  try {
    const departments = await Doctor.distinct("specialization");

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });
  } catch (error) {
    console.error("GET /api/departments error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch departments",
      error: error.message,
    });
  }
});

// GET DEPARTMENT BY NAME
router.get("/:id", async (req, res) => {
  try {
    const department = req.params.id;

    const doctors = await Doctor.find({
      specialization: {
        $regex: `^${department}$`,
        $options: "i",
      },
    }).populate(
      "hospital",
      "name location address phone rating departments"
    );

    res.status(200).json({
      success: true,
      department,
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    console.error("GET /api/departments/:id error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch department",
      error: error.message,
    });
  }
});

module.exports = router;