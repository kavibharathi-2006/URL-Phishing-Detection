
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const {
    networkLogger,
    getNetworkActivities
} = require("./middleware/networkLogger");

app.use(cors());
app.use(express.json());

app.use(networkLogger);

app.get("/api/network-activity", (req, res) => {
    res.json(getNetworkActivities());
});

app.use("/api/url", require("./routes/urlRoutes"));

app.get("/", (req, res) => {
    res.json({
        message: "URL Phishing Detection System Backend is Running!"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "Success",
        message: "Backend API is working correctly"
    });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
