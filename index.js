require("dotenv").config();

const express = require("express");

const app = express();

const PORT = Number(process.env.PORT || 1198);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535.");
}

app.use(express.json({ limit: "100kb" }));

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
    if (res.headersSent) {
        return next(error);
    }

    const statusCode = Number(error.status ?? error.statusCode);
    const isClientError = Number.isInteger(statusCode) && statusCode >= 400 && statusCode < 500;
    const responseStatus = isClientError ? statusCode : 500;

    if (responseStatus === 500) {
        if (process.env.NODE_ENV === "production") {
            console.error("Internal server error.");
        } else {
            console.error(error);
        }
    }

    const message = responseStatus === 400
        ? "Invalid request body."
        : responseStatus === 413
            ? "Request body too large."
            : responseStatus === 500
                ? "Internal server error."
                : "Request could not be processed.";

    res.status(responseStatus).json({
        success: false,
        message,
    });
});

app.listen(PORT, () => {
    console.log(`Node API Foundation running on port ${PORT}`);
});
