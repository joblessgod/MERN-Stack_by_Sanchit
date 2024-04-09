const express = require("express")
const fileUpload = require("express-fileupload");

const app = express()
// throw new error(custom error)
const productRouter = require("./route/product")
const userRouter = require("./route/auth")
const orderRouter = require("./route/order")


require("./config/database") // database connected

app.use(express.json())
app.use(fileUpload()); // handles form-data

/* Server statics files */
app.use('/uploads', express.static('uploads'))

app.use("/api/products", productRouter)
app.use("/api/auth", userRouter)
app.use("/api/order", orderRouter)

app.listen(8000, () => {
    console.log("LocalHost Server Started!");
})
