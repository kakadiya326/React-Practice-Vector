let express = require('express');
let multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage });

let app = express()
app.listen(5000);
app.use('/imgs', express.urlencoded({ "extended": true }));
app.post("/data", upload.single('img'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    res.json({ "msg": "data saved" });
})