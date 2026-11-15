
const mongoose = require("mongoose");

const urlDetailsSchema = new mongoose.Schema(
    {
        protocol: {
            type: String
        },
        domain: {
            type: String
        },
        path: {
            type: String
        },
        subdomainCount: {
            type: Number
        },
        urlLength: {
            type: Number
        }
    },
    {
        _id: false
    }
);

const dnsInfoSchema = new mongoose.Schema(
    {
        status: {
            type: String
        },
        domain: {
            type: String
        },
        ipAddresses: [
            {
                address: {
                    type: String
                },
                family: {
                    type: Number
                },
                _id: false
            }
        ],
        message: {
            type: String
        }
    },
    {
        _id: false
    }
);

const urlSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: ["Valid", "Suspicious", "Invalid"],
            required: true
        },
        reasons: {
            type: [String],
            default: []
        },
        details: {
            type: urlDetailsSchema,
            default: null
        },
        dnsInfo: {
            type: dnsInfoSchema,
            default: null
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("URL", urlSchema);
