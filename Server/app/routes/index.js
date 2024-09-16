const express = require('express');
const router = express.Router();
const charRoutes = require("./charRoutes");

// Root route
router.get("/", (req, res) => {
    res.status(200).json({ success: true, message: `${req.method} - Request made` });
});


router.use("/characters", charRoutes);

module.exports = router;
