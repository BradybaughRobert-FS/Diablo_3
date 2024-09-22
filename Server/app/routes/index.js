const express = require('express');
const router = express.Router();
const charRoutes = require('./charRoutes'); // Import character routes
const skillRoutes = require('./skillRoutes'); // Import skill routes

// Use character routes
router.use("/characters", charRoutes);

// Use skill routes
router.use("/skills", skillRoutes); // Adding skill routes

module.exports = router;
