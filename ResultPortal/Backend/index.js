let express = require("express")
let mongoose = require("mongoose")
const route = require("./routes/userRoute")
let cors = require("cors")

mongoose.connect("mongodb+srv://chiranj:chiranj123@cluster0.2dwko.mongodb.net/?appName=ResultPortal").then(() => {
    console.log("✅ con is ok")
}).catch((e) => {
    console.log("❌ con error");
    console.log(e);
})

let app = express()
app.listen(5000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use("/", route)