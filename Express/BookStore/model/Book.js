const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    isbn: {
        type: Number,
        require: true,
    },
    author: {
        type: String,
        ref: "Author",
        require: true,
    }
})

const Book = mongoose.model("Book", BookSchema)
module.exports = Book;