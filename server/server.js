const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());

// ===============================
// API Routes
// ===============================

app.use("/api/auth", authRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/departments", departmentRoutes);

// ===============================
// Test Route
// ===============================

app.get("/", (req, res) => {
  res.json({
    message: "Medi Access API is running",
  });
});

// ===============================
// MongoDB Connection
// ===============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
  });

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});