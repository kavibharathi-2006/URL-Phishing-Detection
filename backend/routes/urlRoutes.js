
const express = require("express");
const router = express.Router();
const URLModel = require("../models/URL");
const { validateURL } = require("../utils/urlValidator");
const { lookupDomain } = require("../services/dnsService");

router.get("/history", async (req, res) => {
    try {
        const history = await URLModel.find().sort({ createdAt: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch history" });
    }
});

router.get("/stats", async (req, res) => {
    try {
        const total = await URLModel.countDocuments();
        const valid = await URLModel.countDocuments({ status: "Valid" });
        const suspicious = await URLModel.countDocuments({ status: "Suspicious" });
        const invalid = await URLModel.countDocuments({ status: "Invalid" });

        res.json({ total, valid, suspicious, invalid });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch statistics" });
    }
});

router.delete("/history", async (req, res) => {
    try {
        await URLModel.deleteMany({});
        res.json({ message: "History cleared successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to clear history" });
    }
});

router.post("/analyze", async (req, res) => {
    try {
        const inputURL = (req.body.url || "").trim();

        if (!inputURL) {
            return res.status(400).json({ message: "Please enter a URL" });
        }

        const result = validateURL(inputURL);

        let dnsInfo = null;

        if (result.details && result.details.domain) {
            dnsInfo = await lookupDomain(result.details.domain);
        }

        const newURL = new URLModel({
            url: inputURL,
            status: result.status,
            reasons: result.reasons,
            details: result.details,
            dnsInfo: dnsInfo
        });

        await newURL.save();

        res.json({
            message: "URL analysis completed successfully",
            url: inputURL,
            status: result.status,
            reasons: result.reasons,
            details: result.details,
            dnsInfo,
            analysisId: newURL._id
        });
    } catch (error) {
        res.status(500).json({
            message: "URL analysis failed",
            error: error.message
        });
    }
});

module.exports = router;
