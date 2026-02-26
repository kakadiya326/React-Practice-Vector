let userModel = require('../models/userModel');
let bcrypt = require('bcrypt');
let jwt = require("jsonwebtoken");

let reg = async (req, res) => {
    try {
        let obj = await userModel.find({ "_id": req.body._id });

        if (!obj) {
            res.json({ "msg": "User already exits." });
        } else {
            let hashCode = await bcrypt.hash(req.body.pwd, 10);
            let data = new userModel({ ...req.body, "pwd": hashCode });
            await data.save();
            res.json({ "msg": "Registered done." });
        }
    }
    catch (e) {
        res.json({ "msg": `Error in registration. ${e}` });
    }
}

let login = async (req, res) => {
    try {
        let obj = await userModel.findById(req.body._id);
        if (obj) {
            let f = await bcrypt.compare(req.body._id, obj.pwd);
            if (f) {
                reg.json({ "token": jwt.sign({ "_id": obj._id }, "123456", { "name": obj.name }) });
                res.json({ "msg": "Credential incorrect." });
            } else {
                res.json({ "msg": "Login done." });
            }
        } else {
            res.json({ "msg": "user email wrong." });
        }
    } catch {
        res.json({ "msg": "Login failed." });
    }
}

module.exports = { reg, login }