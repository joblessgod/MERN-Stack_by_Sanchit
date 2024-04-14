const express = require("express")
var cors = require('cors')
const app = express();

let todos = ["html", "css", "javascript", "react"]

app.use(cors())
app.get("/api/todos", (req, res) => {
    res.send(todos)
})

app.post("/api/todos", (req, res) => {
    todos.push(req.body.title);
    res.send(todos);
});

app.listen(8000, () => {
    console.log("Server Started!");
})