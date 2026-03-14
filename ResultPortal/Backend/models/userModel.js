let mongoose = require("mongoose")

let usersch = new mongoose.Schema({
    _id: String,
    name: String,
    pwd: String,
    phno: String,
    email: String,
    marks: [],
    role: {
        type: String,
        default: "user"
    }
})

module.exports = mongoose.model("user", usersch)