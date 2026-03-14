const userModel = require("../models/userModel")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
const counterModel = require("../models/counterModel")

let register = async (req, res) => {
    try {
        let arr = await userModel.find({ $or: [{ "email": req.body.email }, { "phno": req.body.phno }] })
        if (arr.length > 0) {
            res.json({ "msg": "acc exists" })
        }
        else {
            let pwdhash = await bcrypt.hash(req.body.pwd, 10)
            let counter = await counterModel.findByIdAndUpdate(
                { _id: "userid" },
                { $inc: { seq: 1 } },
                { new: true, upsert: true }
            )
            let id = counter.seq.toString().padStart(6, '0')
            let data = new userModel({ _id: id, ...req.body, "pwd": pwdhash })
            await data.save()
            console.log("Saved:", data)
            res.json({ "msg": "reg done" })
        }
    }
    catch (err) {
        res.json({ "msg": "error in reg" })
        console.log(err);
    }
}

let login = async (req, res) => {
    try {
        console.log(req.body.uid);
        if (/^[0-9]{6}$/.test(req.body.uid)) {
            let obj = await userModel.findById(req.body._id)
            if (obj) {
                let f = await bcrypt.compare(req.body.pwd, obj.pwd)
                if (f) {
                    res.json({ "token": jwt.sign({ "_id": obj._id }, "12345"), "name": obj.name })
                }
                else {
                    res.json({ "msg": "check pwd" })
                }
            }
            else {
                res.json({ "msg": "check enroll no" })
            }
        }
        else {
            
            let arr = await userModel.find({ $or: [{ "email": req.body.uid }, { "phno": req.body.uid }] })
            console.log(arr);
            if (arr.length > 0) {
                let obj = arr[0]
                let f = await bcrypt.compare(req.body.pwd, obj.pwd)
                if (f) {
                    res.json({ "token": jwt.sign({ "_id": obj._id }, "12345"), "name": obj.name })
                }
                else {
                    res.json({ "msg": "check pwd" })
                }
            }
            else {
                res.json({ "msg": "check phno or email" })
            }

        }


    }
    catch(e) {
        res.json({ "msg": "error in login" })
    }
}

let updmarks = async (req, res) => {
    try {
        let data = await userModel.findByIdAndUpdate({ "_id": req.body._id }, { $push: { "marks": { $each: [req.body.sub1, req.body.sub2, req.body.sub3, req.body.sub4] } } })
        res.json({ "msg": "marks updated" })
    }
    catch {
        res.json({ "msg": "error in updating marks" },'eror',e)
    }
}

let gethnos = async (req, res) => {
    try {
        let data = await userModel.find({ "role": "user" }, { "_id": 1 })
        res.json(data)
    }
    catch {
        res.json({ "msg": "error fetching hno" })
    }
}

let userDetails = async (req, res) => {
    try {
        let obj = await userModel.findById(req.params.hno)
        res.json(obj)
    }
    catch {
        res.json({ "msg": "Error fetching details based on hno" })
    }
}

let usersDetails = async (req, res) => {
    try {
        let obj = await userModel.findById(req.body._id)
        res.json(obj)
    } catch {
        res.json({ "msg": "Error fetching details based on hno" })
    }
}

module.exports = { login, register, updmarks, gethnos, userDetails, usersDetails }