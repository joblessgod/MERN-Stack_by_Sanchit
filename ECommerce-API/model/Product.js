const { string, number } = require('joi');
const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const ProductSchema = new Schema({

  // Category: {
  // type: String,  
  // },
  inStock: {
    type: Number,
    default: 0,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxLength: 255,
  },
  quantity: {
    type: Number,
    min: 1,
    require: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
  createdBy: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
  },
},
  {
    timestamps: true
  }
)
// ProductSchema.post("deleteOne", function() {
//
// });



const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;