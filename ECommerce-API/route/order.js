const express = require("express");
const { createOrder } = require("../controller/order");
const { checkAuthentication, isBuyer } = require("../middleware/checkAuthentication");


const router = express.Router();

router.post("", checkAuthentication, isBuyer, createOrder)

module.exports = router;