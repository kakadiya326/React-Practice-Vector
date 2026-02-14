let express = require('express')
let mongoose = require('mongoose')
let App = express()

// It's say express that which type data you have to handle
App.use(express.json())

App.listen(5000)

mongoose.connect('mongodb://localhost:27017/emp').then(() => {
    console.log('🤙Connection is ok!!');
}).catch(() => {
    console.log('Error in DB in Connection');
});

let empModel = new mongoose.Schema({
    "_id": Number,
    "name": String,
    "city": String,
    "dept": String,
    "sal": Number,
    "gen": String
});

let em = mongoose.model("emp", empModel);

let arr = [];

// App.get("/", (req, res) => {
//     res.send(arr)
//     res.json({ "msg": "It is home path" });
// })

// App.get("/data", (req, res) => {
//     res.json({ "msg": "Collected th data" });
// })

// App.get("/search/:id", (req, res) => {
//     console.log(req.params.id);
//     res.send(arr[req.params.id])
//     res.json({ "msg": "This is search result" });
// })

// App.post("/add", (req, res) => {
//     arr.push(req.body)
//     console.log(arr);
//     res.json({ "msg": "This is search result" });
// })

App.post("/add", (req, res) => {
    let data = new em(req.body)
    data.save().then(() => {
        res.json({ "msg": "Data stored" })
    }).catch(() => {
        res.json({ "msg": "Error in storing the data" })
    })
})

App.get("/", (req, res) => {
    em.find().then((data) => {
        res.json(data)
    }).catch(() => {
        res.json({ "msg": "Error in fetching data" })
    });
})