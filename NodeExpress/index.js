let express = require('express')
let App = express()

App.get("/", (req,res) => {
    res.send("Welcome to entry point");
})

App.get("/about", (req,res) => {
    res.send("You are at about");
})

App.get("/login", (req,res) => {
    res.send("You are at login");
})

App.listen(5000, () => {
    console.log('Server Started...')
})