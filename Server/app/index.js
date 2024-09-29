const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const routeHandler = require("./routes"); // Correctly pointing to routes directory

// Middleware order
app.use(cors()); // Enable CORS before parsing JSON
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan("dev")); // Logging middleware

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running", 
        success: true
    });
});

// Use route handler for all API routes
app.use("/api/v1", routeHandler);

module.exports = app;
