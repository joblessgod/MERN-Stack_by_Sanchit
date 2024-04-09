const Joi = require("joi");
const Order = require("../model/Order");
const Product = require("../model/Product")

const storeOrderValidationSchema = Joi.object({
    products: Joi.array()
        .items({
            _id: Joi.required(),
            quantity: Joi.number().min(1).required()
        }).min(1).required()
})

const createOrder = async (req, res, next) => {
    try {
        await storeOrderValidationSchema.validateAsync(req.body,
            {
                allowUnknown: true,
                abortEarly: false
            }
        );
    } catch (err) {
        res.status(400).send({
            msg: "Validation Error",
            errors: err.details.map(el => {
                return {
                    field: el.context.key,
                    msg: el.message,
                };
            }),
        })
    }
    try {
        let products = [];
        for (let index = 0; index < req.body.products.length; index++) {
            let el = req.body.products[index];

            // req.body.products.forEach(async (el) => {     // block bhayeko thiyo

            let dbProduct = await Product.findById(el._id);
            console.log(dbProduct);
            products.push({
                _id: el._id,
                name: dbProduct.name,
                rate: dbProduct.price,
                quantity: el.quantity

            })
        }

        // });  

        console.log(products);

        let order = await Order.create({
            products: products,
        })
        res.send(order)

        console.log("new order posted! ");

    } catch (err) {
        return next(err)
    }
}


module.exports = {
    createOrder
}