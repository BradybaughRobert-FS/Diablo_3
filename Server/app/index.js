const express = require('express');
const morgan = require('morgan');
const app = express();
const routeHandler = require("./routes"); // Correctly pointing to routes directory

// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running", 
        success: true
    });
});

app.use("/api/v1", routeHandler); // Routes prefixed with /api/v1

module.exports = app;
