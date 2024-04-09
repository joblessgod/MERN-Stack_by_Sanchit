// const bcrypt = require('bcrypt');
// const path = require("path") // core module

/* Global Object node
    - console
    - __dirname
    - __filename
   Node Modules
    - third party
        eg: axios, bcrypt, nodemon....
    - core
    - local (research)
        - common js (express)
        - es module (react)
*/


const auth = require("./1auth")

// console.log(path.join(__dirname, "uploads"));

auth.signup("ram", "password")
auth.login()


// function signUp(username, email, password) {
//     bcrypt.hash(password, 10, function (err, hash) {
//        // Store hash in your password DB.
//         console.log({hash});
//         let data = {
//             username,
//             email,
//             "password": hash
//         }
//         console.log(data);
//     });
// }

// signUp("JobLessGod", "iamjoblessgod@gmail.com", "IcantShareBRO")
// login("JobLessGod", "iamjoblessgod@gmail.com", "IcantShareBRO")