let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    "name": String,
    "phno": String,
    "pwd": String,
    "role": {
        type: String,
        default: "user"
    }
})

module.exports = mongoose.model("users", userSchema);