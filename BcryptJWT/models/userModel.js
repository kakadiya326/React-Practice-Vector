let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    "_id": String,
    "name": String,
    "phno": String,
    "pwd": String
});

module.exports = mongoose.model("users", userSchema)