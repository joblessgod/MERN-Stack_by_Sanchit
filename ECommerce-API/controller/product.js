const path = require("path");
const Joi = require("joi");
const fs = require("fs");

const Product = require("../model/Product")
    

const fetchProduct = async (req, res,) => {
    // req.query.search

    /* TODO: try to add category 😀 */
    try {

        let sort = req.query.sort || "dateDesc"
        let priceFrom = parseFloat(req.query.priceFrom) || 0;
        let priceTo = parseFloat(req.query.priceTo) || 9999999999;
        let perPage = parseInt(req.query.perPage) || 5;
        let page = parseInt(req.query.page) || 1;


        let sortBy = {
            createdAT: -1,
        }

        if (sort == "priceAsc") {
            sortBy = { price: 1 };
        } else if (sort == "priceDesc") {
            sortBy = { price: -1 };
        } else if (sort == "nameAsc") {
            sortBy = { name: 1 };
        } else if (sort == "nameDesc") {
            sortBy = { name: -1 };
        }


        let ProductFilter = {
            name: new RegExp(req.query.search, "i"), // i means all character like 'A' & 'a' //
            $and: [{ price: { $gte: priceFrom } }, { price: { $lte: priceTo } }],
        }


        let productData = await Product.find(ProductFilter)
            .sort(sortBy)
            .skip((page - 1) * perPage)
            .limit(perPage);

        let totalProduct = await Product.countDocuments(ProductFilter)


        res.send(
            {
                page,
                perPage,
                totalProduct,
                data: productData
            }
        )
        console.log("product info gotted!");
    } catch (err) {
        return next(err)
    }
}

const storeProductValidationSchema = Joi.object({
    name: Joi.required(),
    image: Joi.object({
        size: Joi.number()
            .max(2 * 1024 * 1024)
            .messages({
                "number.max": "files must be less or equal to 2mb."
            }),
        mimeType: Joi.string().valid(
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/svg",
            "image/webp"
        ),
    }),
    price: Joi.number().min(10).required(),
    inStock: Joi.number().min(1).max(10000).required()
})

const storeProduct = async (req, res, next) => {
    getProductParams
    /* NOT DONE YET TODO: try to re-use this joi validation code. also being used in singup */
    try {
        await storeProductValidationSchema.validateAsync(
            { ...req.body, ...req.files },
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
        let imagePath = null;

        if (req.files?.image) { // optional chaining = ?
            let rootPath = path.resolve();
            let uniqueTimestap = Date.now() + Math.floor(Math.random() * 1000)

            imagePath = path.join("/", "uploads", `${uniqueTimestap}-${req.files.image.name}`)
                .replaceAll("\\", "/");

            req.files.image.mv(path.join(rootPath, imagePath));
        }

        // product create
        res.send(await Product.create({
            ...req.body,
            image: imagePath,
            createdBy: req.user._id
        }))
        console.log("new product possted");
    } catch (err) {
        return next(err)
    }
}

const updateProduct = async (req, res, next) => {
    try {
        getProductParams
        let matched = await Product.findById(req.params._id);
        if (!matched) {
            let error = new Error();
            error.statusCode = 404;
            error.msg = "Not found";
            throw error;
        }
        let productData = await Product.findByIdAndUpdate(req.params._id, { new: true });
        res.send(productData)
        console.log("product updated");
    } catch (err) {
        return next(err)
    }
}

const deleteProduct = async (req, res, next) => {
    getProductParams
    try {
        let matched = await Product.findById(req.params._id);
        if (!matched) {
            let error = new Error();
            error.statusCode = 404;
            error.msg = "Not found";
            throw error;
        }
        let product = await Product.findByIdAndDelete(req.params._id); // easy for us
        // let product = await Product.deleteOne({ _id: req.params._id });
        fs.unlinkSync(path.join(path.resolve(), product.image));
        res.send("product deleted");

        console.log("product deleted");
    } catch (err) {
        return next(err)
    }
};

module.exports = {
    fetchProduct, storeProduct, updateProduct, deleteProduct
}
const getProductParams = (req, res) => {
    let { name, description, quantity, price, image } = req.body
} // allows me to change model names if I added smthing new models

