const express = require("express");
const { fetchProduct, storeProduct, updateProduct, deleteProduct, storeUser } = require("../controller/product");
const { checkAuthentication, isSeller } = require("../middleware/checkAuthentication");


const router = express.Router();

router.get("", fetchProduct);
router.post("", checkAuthentication, storeProduct);
router.put("/:_id", checkAuthentication, isSeller, updateProduct);
router.delete("/:_id", checkAuthentication, deleteProduct);


module.exports = router;