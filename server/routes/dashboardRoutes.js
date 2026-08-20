const express = require("express");

const router = express.Router();

// Dashboard summary
router.get("/", (req, res) => {
  res.json({
    message: "Dashboard API is working",
    data: {
      doctors: 0,
      hospitals: 0,
      appointments: 0,
      patients: 0
    }
  });
});

module.exports = router;