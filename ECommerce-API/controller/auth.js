const User = require("../model/User")
const bcrypt = require("bcrypt")
const Joi = require('joi');
const jwt = require("jsonwebtoken");

const signupValidationSchema = Joi.object({
    username: Joi.string().min(3).max(16).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: Joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')).required(),
    role: Joi.string().valid("buyer", "seller").required(),
})

const fetchUser = async (req, res) => {
    res.send(await User.find())
    console.log("User Info gotted");
}

const getUserParams = (req, res) => {
    let { username, role, email, phone, password } = req.body
}

const signupUser = async (req, res, next) => {
    try {
        const value = await signupValidationSchema.validateAsync(req.body, {
            allowUnknown: true,
            abortEarly: false
        });
    } catch (err) {
        return next(err)
    }

    try {
        getUserParams // This is Server Side Security
        let userUsernameVerify = await User.findOne({ username: req.body.username })
        if (userUsernameVerify) {
            return res.status(404).send({
                msg: "Validation Error",
                errors: [
                    {
                        field: "Username",
                        msg: "⚠️ Username already exits. Please Choose another username."
                    }
                ]

            })
        }
        let userEmailVerify = await User.findOne({ email: req.body.email })
        if (userEmailVerify) {
            res.status(404).send({
                msg: "Validation Error",
                errors: [
                    {
                        field: "email",
                        msg: "⚠️ email already exits. Please Choose another email."
                    }
                ]

            });
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10); // convert password into one way encryption
        res.send(await User.create({ ...req.body, password: hashPassword }))
        console.log("New Signup Granted!");


        // user = user.toObject()
        // delete user.password
        // user.password = "Can't Show Password! Please check your mail to get password."
        // password = null;

        // res.send(await User.create(req.body))

    } catch (err) {
        // return next(err)
        res.status(400).send({
            msg: "Validation Error",
            errors: err.details.map(el => {
                return {
                    field: el.context.key,
                    msg: el.message,
                }
            }),
        })
    }

};

const loginUser = async (req, res, next) => {

    try {
        getUserParams
        let username = await User.findOne({ username: req.body.username })
        if (username) {
            let user = await User.findOne({ email: req.body.email }).select('+password')
            if (user) {
                let matchPassword = await bcrypt.compare(req.body.password, user.password)
                if (matchPassword) {

                    user = user.toObject();
                    user.password = undefined

                    const token = jwt.sign(user, "StickyBomb", { expiresIn: "7d" })
                    return res.send({ user, token })
                } else {
                    res.status(401).json({
                        msg: "Password didnot matched!"
                    })
                }
            }
        }
    } catch (err) {
        return res.status(401).send({
            msg: err.name,
            errors: [{
                field: err.name,
                msg: err.message
            }]
        })
    }
}

module.exports = {
    fetchUser, signupUser, loginUser
}


