const express = require("express")
var cors = require('cors')
const app = express();

let todos = ["html", "css","javascript"]

app.use(cors())
app.get("/api/todos",(req,res) => {
    res.send(todos)
})

app.listen(8000,() => {
    console.log("Server Started!");
})