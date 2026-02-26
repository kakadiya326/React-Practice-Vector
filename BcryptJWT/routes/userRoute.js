let express = require('express');
let { reg, login } = require('../controllers/userControllers');

let route = express.Router()

route.post("/regstration",reg)
route.post("/login", login)

module.exports=route