const signup = (username, password) => {
    let data = {
        username,
        password,
    }
    console.log(data);
    console.log(`sign up successfull, San`);
}
const login = () => {
    console.log(`login successfull, San`);
}

module.exports = {
    "signup": signup,
    "login": login,
}
/* named exports */
// module.exports = {
//     "createAccount": signup,
//     "rejoinAccount": login,
// }

let loggedIn = true
let hasValidRole = false

function checkAuth(req, res, next) {
    if (!loggedIn) {
        return res.status(401).send("not logged in")
    }
    next()
    console.log("checked AUth");

}

function checkValidRole(req, res, next) {
    if (!hasValidRole) {
        return res.status(403).send()
    }
    next()
    console.log("valid role has not yet.");
}

module.exports = {
    checkAuth,
    checkValidRole
}