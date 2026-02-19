let mongoose = require('mongoose');
let express = require('express');
let cors = require('cors');
// mongodb://localhost:27017/emp
mongoose.connect("mongodb://localhost:27017/firstproject").then(() => {
    console.log('con is ok');
}).catch(() => {
    console.log('error in con');
});

let userSchema = new mongoose.Schema({
    "name": String,
    "place": String,
    "phno": String,
    "dob": Date,
    "email": String
});

let userModel = mongoose.model("user", userSchema);
let app = express();
app.listen(5000);
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
    try {
        let data = new userModel(req.body);
        await data.save();
        res.json({ "msg": "Data added" });
    }
    catch (e) {
        res.json({ "msg": `Error in adding details ${e}` });
    }
})

app.get("/data", async (req, res) => {
    try {
        let data = await userModel.find();
        res.json(data);
    }
    catch {
        res.json({ "msg": "Error while fetching" });
    }
})

app.get("/search/:data", async (req, res) => {
    try {
        let data = await userModel.find({"name":req.params.data});
        res.json(data);
    } catch {
        res.json({ "msg": "No data found." });
    }
})