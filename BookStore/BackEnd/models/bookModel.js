let mongoose = require('mongoose')

let bookSchema = mongoose.Schema({
    "_id": Number,
    "title": String,
    "author": String,
    "price": Number,
    "dt": Date
})

module.exports = mongoose.model("books", bookSchema)    