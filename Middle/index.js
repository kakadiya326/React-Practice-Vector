let express = require('express')
let app = express()
app.use(express.json())
app.listen(5000)

app.use("/", (req, res, next) => {
    res.write("middleware-1");
    next()
})

app.get("/data", (req, res, next) => {
    res.write("middleware-2")
    next()
})

app.get("/data", (req, res,next) => {
    res.end("middleware-3")

})

app.post("/data", (req, res,next) => {
    res.end("middleware-4")
})