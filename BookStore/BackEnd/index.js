let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors');
const bookRoute = require('./routes/bookRoutes');

mongoose.connect("mongodb://localhost:27017/BookStore").then(() => {
    console.log("✅ connection is ok!");
}).catch(() => {
    console.log("❌ fail to connect");
})

let app = express()
app.listen(5000)
app.use(express.json())
app.use(cors())
app.use("/Book", bookRoute)