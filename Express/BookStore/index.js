const express = require("express")
const app = express()
const mongoose = require('mongoose');
const Book = require("./model/Book")
const Author = require("./model/Auther")


mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
    .then(() => console.log('MongoDB Connected!'));



app.use(express.json()) // global muddle , require.body
/* app.get("/api/books", (req, res) => {
db.books.find() // no more 
    Book.find().then(data => { // asynchronus vayera . use garko
        console.log(data);
        res.send(data)
    })
}) */
const getInfoModels = (req, res) => {
    let { title, isbn, author } = req.body
}

//* neat and clean way to get data from mongo DB
app.get("/api/books", async (req, res, next) => {

    try {
        res.send(await Book.find({}))
        console.log("gotted")
    } catch (error) {
        return next(err)
    }
})


app.post("/api/books", async (req, res, next) => {
    getInfoModels

    try {        
        let BooksData = await Book.create(req.body)
        res.send(BooksData)
        console.log("postted");
    } catch (error) {
        return next(err)
    }
})

app.post("/api/authors", async (req,res,next) => {
    try {
        let author = await Author.create({
            name:hari
        })
    } catch (error) {
        return next(err)
    }
})


app.put("/api/books/:_id", async (req, res, next) => {
    getInfoModels

    try {
        let book = await Book.findByIdAndUpdate(req.params._id, (req.body), { new: true }) 
        res.send(book)
    } catch (error) {
        return next(err);
    }
})


app.delete("/api/books/:_id", async (req, res, next) => {
    getInfoModels

    try {
        let book = await Book.findByIdAndDelete(req.params._id, (req.res))
        getInfoModels
        res.send({
            id: req.params._id,
            status: `${req.body.title} Deleted`,
        })
    } catch (error) {
        return (next)
    }
})

app.use((err, req, res, next) => {

    let statusCode = 500;
    let msg = "Dear Sir, This is Server Error"

    if (err.name = "ValidationError") {
        statusCode = 400,
            msg = "Bad Request / Please watch your form carefully!!"
    }

    res.status(statusCode).send({
        msg: msg,
        name: err.name,
        error: err,
    });
})

/* Errors  Should be in array [] || object {} */
/* 
error = {
    title: "already exists"
    isbn: "only numbers allowed"
}
*/




app.listen(8000, () => {
    console.log("Server Started");
})