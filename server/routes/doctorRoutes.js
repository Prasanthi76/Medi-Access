const express = require("express");
const mongoose = require("mongoose");
const Doctor = require("../models/Doctor");

const router = express.Router();

/*
  GET ALL DOCTORS

  Supports:
  - Search
  - Specialization
  - Location
  - Fee
  - Experience
  - Rating
  - Availability

  Example:
  /api/doctors
  /api/doctors?specialization=Cardiology
  /api/doctors?location=Vijayawada
*/

router.get("/", async (req, res) => {
  try {
    const {
      search,
      specialization,
      location,
      minFee,
      maxFee,
      minExperience,
      minRating,
      availability,
    } = req.query;

    const filter = {};

    // -----------------------------
    // SPECIALIZATION
    // -----------------------------
    if (specialization) {
      filter.specialization = {
        $regex: specialization,
        $options: "i",
      };
    }

    // -----------------------------
    // LOCATION
    // -----------------------------
    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    // -----------------------------
    // SEARCH
    // Doctor name / specialization
    // -----------------------------
    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          specialization: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // -----------------------------
    // FEE FILTER
    // -----------------------------
    if (minFee || maxFee) {
      filter.fee = {};

      if (minFee) {
        filter.fee.$gte = Number(minFee);
      }

      if (maxFee) {
        filter.fee.$lte = Number(maxFee);
      }
    }

    // -----------------------------
    // EXPERIENCE FILTER
    // -----------------------------
    if (minExperience) {
      filter.experience = {
        $gte: Number(minExperience),
      };
    }

    // -----------------------------
    // RATING FILTER
    // -----------------------------
    if (minRating) {
      filter.rating = {
        $gte: Number(minRating),
      };
    }

    // -----------------------------
    // AVAILABILITY FILTER
    // -----------------------------
    if (availability === "today") {
      filter.availableToday = true;
    }

    if (availability === "tomorrow") {
      filter.availableTomorrow = true;
    }

    // -----------------------------
    // FETCH DOCTORS
    // -----------------------------
    const doctors = await Doctor.find(filter)
      .populate(
        "hospital",
        "name location address phone rating departments"
      )
      .sort({
        rating: -1,
        experience: -1,
      });

    res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });
  } catch (error) {
    console.error("GET /api/doctors error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch doctors",
      error: error.message,
    });
  }
});

/*
  GET DOCTOR BY ID
*/

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    const doctor = await Doctor.findById(id).populate(
      "hospital",
      "name location address phone rating departments"
    );

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    console.error("GET /api/doctors/:id error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch doctor",
      error: error.message,
    });
  }
});

module.exports = router;