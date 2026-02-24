let express = require('express')
const { addBook, getBooks } = require('../controllers/bookController')
let bookRoute = express.Router()

bookRoute.post('/add', addBook)
bookRoute.get('/', getBooks)

module.exports = bookRoute