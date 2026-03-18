let mongoose = require("mongoose");

let optSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    otp: {
        type: String,
        require: true
    },
    attempts: {
        type: Number,
        default: 0
    },
    expiry: {
        type: Date,
        default: Date.now,
        expires: 300
    }
})

module.exports = mongoose.model("otps", optSchema)