let express = require('express')
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/findEx').then(() => {
    console.log('Connection is ok!!');
}).catch(() => {
    console.log('Error Connection.');
})

let stdsch = new mongoose.Schema({
    "_id": String,
    "name": String,
    "age": String,
    "dept": String,
    "marks": Number
});

let stdModel = mongoose.model('stds', stdsch);

let app = express()
app.use(express.json())
app.listen(5000)

// app.post("/add", (req, res) => {
//     stdModel.findById(req.body._id).then((obj) => {
//         if (obj) {
//             res.json({ "msg": "with given data user already exits" })
//         } else {
//             let data = new stdModel(req.body)
//             data.save().then(() => {
//                 res.json({ "msg": "Student record added" });
//             }).catch(() => {
//                 res.json({ "msg": "Error in storing" });
//             })
//         }
//     }).catch(() => {
//         res.json({ "msg": "Error in storing" })
//     })
// })

app.post('/add', (req, res) => {
    let data = new stdModel(req.body)
    data.save().then(() => {
        res.json({ 'msg': "Record added" })
    }).catch(() => {
        res.json({ "msg": "Error in storing" })
    })
});

app.get("/", (req, res) => {
    stdModel.find().then((data) => {
        res.json(data)
    }).catch(() => {
        res.json({ "msg": "Error in fetching data" })
    })
});

app.get("/search/:id", (req, res) => {
    stdModel.findById(req.params.id).then((obj) => {
        res.json(obj)
    }).catch(() => {
        res.json({"msg":"Error in searching"})
    })
});

app.get("/search/:col/:val", (req, res) => {
    stdModel.find({[req.params.col]:req.params.val}).then((obj) => {
        res.json(obj)
    }).catch(() => {
        res.json({"msg":"Error in searching"})
    })
});