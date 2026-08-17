require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 1198;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Node API Foundation is running.",
    });
});

app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "healthy",
        service: "node-api-foundation",
        uptime: Number(process.uptime().toFixed(2)),
        timestamp: new Date().toISOString(),
    });
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found.",
    });
});

app.use((error, req, res, next) => {
    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal server error.",
    });
});

app.listen(PORT, () => {
    console.log(`Node API Foundation running on port ${PORT}`);
});
