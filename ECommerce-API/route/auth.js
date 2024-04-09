const express = require("express");
const { fetchUser, loginUser, signupUser } = require("../controller/auth");

const router = express.Router();

router.get("/users", fetchUser)
router.post("/signup", signupUser)
router.post("/login", loginUser)


module.exports = router;