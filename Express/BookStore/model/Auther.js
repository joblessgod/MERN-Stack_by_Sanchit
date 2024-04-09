const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const AuthorSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email: String,
    contact: Number,
    website: String,
})

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author