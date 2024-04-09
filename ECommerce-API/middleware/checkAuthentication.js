const jwt = require("jsonwebtoken");
const { SELLER, BUYER } = require("../constant/role");

function checkAuthentication(req, res, next) {
    let token = req.headers.authorization?.replaceAll("Bearer ", "")
    if (token) {
        try {
            const decodeUser = jwt.verify(token, "StickyBomb");

            req.user = decodeUser;
            return next()
        } catch (err) {
            /* if there is error in jwt token from clinet.
            just leave it , bwlow code will handle */
        }
    }
    return res.status(401).send({
        msg: "Unauthorized"
    })
}

const isSeller = (req, res, next) => {
    if (req.user.role === SELLER) {
        return next();  
    }
    res.status(403).send({
        msg: "Only for seller!"  
    })
}
const isBuyer = (req, res, next) => {
    if (req.user.role === BUYER) {
        return next();  
    }
    res.status(403).send({
        msg: "Only for buyer!"  
    })
}

module.exports = {
    checkAuthentication, isSeller, isBuyer
}