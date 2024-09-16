const express = require('express');
const app = express();
const routeHandler = require("./routes");

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API in running", 
        success: true
    });
});

app.use("/api/v1", routeHandler);

module.exports = app;
