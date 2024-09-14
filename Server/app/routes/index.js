const express = require('express');
const router = express.Router();

// localhost: 3000/api
router.get("/", (req, res) => {
    res.status(200).json ({
        message: "GET to API",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.get("/:id", (req,res) => {
    const { id } = req.params;
    res
    .status(200)
    .json({
        message: "GET to /api/:id",
        id,
        metadata: { hostname: req.hostname, method: req.method },
    });
});


router.post("/", (req, res) => {
    const { data } = req.body;
    res.status(200).json({
        message: "POST to /api", 
        data,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

module.exports = router; 