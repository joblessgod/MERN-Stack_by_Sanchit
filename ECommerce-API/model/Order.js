const mongoose = require("mongoose");
const Product = require("../model/Product")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    products: [
        {
            _id: ObjectId,
            rate: {
                type: Number,
                required: true
            },
            name: { 
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                required: true
            },
            createdBy: {
                type: ObjectId,
            },
            status: {
                type: String,
                enum: ["pending", "completed", "reject"],
                default: "pending",
            },
        }
    ]

});
OrderSchema.post("save", function () {
    let order = this;
    let orderProducts = order.products;
    orderProducts.forEach(async (el) => {
        await Product.findByIdAndUpdate(el._id, {
            $inc: { inStock: -el.quantity },
        });
    });
})

const Order = mongoose.model("Order", OrderSchema)
module.exports = Order;