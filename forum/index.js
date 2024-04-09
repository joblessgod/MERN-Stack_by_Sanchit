const express = require("express")
const app = express()

require("./config/database") // database connected





app.listen(8000, () => {
    console.log('LocalHost Server is started!');
})