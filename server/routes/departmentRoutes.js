const express = require("express");

const router = express.Router();

// Get all departments
router.get("/", (req, res) => {
  res.json({
    message: "Departments API is working",
    departments: []
  });
});

// Get department by ID
router.get("/:id", (req, res) => {
  res.json({
    message: "Department API is working",
    departmentId: req.params.id
  });
});
module.exports = router;