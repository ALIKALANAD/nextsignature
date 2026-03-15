// properties model 

const mongoose = require("mongoose")

const propertiesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        agent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        images: [
            {
                type: String
            }
        ],
        status: {
            type: String,
            enum: ["available", "sold", "pending"],
            default: "available"
        },
        type: {
            type: String,
            enum: ["rent", "sale"],
            default: "rent"
        },
        category: {
            type: String,
            enum: ["apartment", "house", "land", "office", "shop"],
            default: "apartment"
        },
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true
        },
        area: {
            type: Number,
            required: true
        },
        amenities: [
            {
                type: String
            }
        ],
        features: [
            {
                type: String
            }
        ],
        videos: [
            {
                type: String
            }
        ],
        documents: [
            {
                type: String
            }
        ],

        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }



    },
    { timestamps: true }
)

module.exports = mongoose.model("Properties", propertiesSchema)
