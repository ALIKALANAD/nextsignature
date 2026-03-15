const mongoose = require("mongoose")

const agentSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    licenseNumber: {
        type: String
    },

    phone: {
        type: String
    },

    company: {
        type: String
    },

    experience: {
        type: Number
    },

    languages: [
        {
            type: String
        }
    ],

    specialization: [
        {
            type: String
        }
    ],

    address: {
        type: String
    },

    bio: {
        type: String
    },

    rating: {
        type: Number,
        default: 0
    }

},
{ timestamps: true }
)

module.exports = mongoose.model("Agent", agentSchema)