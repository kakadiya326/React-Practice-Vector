let mongoose = require('mongoose');
let express = require('express');
let userRoute = require('./routes/userRoute')
let app = express();

mongoose.connect("mongodb://localhost:27017/useDB").then(() => {
    console.log("✅ DB is con");
}).catch(() => {
    console.log("❌ DB con failed");
})

app.use(express.json())
app.use("/", userRoute)
app.listen(5000)
