const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
    },

    experience: {
      type: Number,
      default: 0,
    },

    hospital: {
      type: String,
    },

    department: {
      type: String,
    },

    location: {
      type: String,
    },

    consultationFee: {
      type: Number,
      default: 0,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);