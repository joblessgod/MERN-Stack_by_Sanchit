const express = require('express')
const app = express()


let products = {
    title: "Iphone 20",
    img: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg"
}





app.get('/api/products', function (req, res) {
    console.log("send todos..");
    res.send 
    let todos = ["html", "css", "js"]

    res.send(products)
    res.send(todos)
})
app.post("/api/pro", function (req, res) {
    console.log("API posted");
    let pro = ['sanchit amir']

    res.send(pro)
})

app.listen(8000)