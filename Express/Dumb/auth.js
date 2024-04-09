const bcrypt = require("bcrypt")


function signup(username, password, emailId, fullName) {
    bcrypt.hash(password, 10    , function(err, hash) {

        let data = {
            username,
            password: hash,
            emailId,
            fullName,
        }
        console.log(data);
    //    let newHash =  console.log(data.password);

    })
}


function login(username, password, emailId, fullName) {
   // Load hash from your password DB.
   hash = "$2b$10$fYASUgK56OLKEAkYEzFnTeL08.VNgUT9i73rxSe8x7LFt6hqTz1cS"

bcrypt.compare(password, hash function(result) {
    // result == true
});
}

module.exports = {
    "signup": signup,
    "login": login,
}