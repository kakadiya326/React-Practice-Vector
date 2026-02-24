const bookModel = require("../models/bookModel")


let addBook = async (req, res) => {
    try {
        let data = new bookModel(req.body)
        await data.save()
        res.json({ "msg": "Data saved" })
    } catch {
        res.json({ "msg": "error in saving.!" })
    }
}

let getBooks = async (req, res) => {
    try {
        let data = await bookModel.find()
        res.json(data)
    } catch {
        res.json({ "msg": "error in fetching books" })
    }
}

module.exports={addBook,getBooks}