const express = require("express")
const app = express()
const mongoose = require("mongoose") // it is neccessaty to connect mongoDB

mongoose.connect('mongodb://127.0.0.1:27017/gamestore')
    .then(() => console.log('MongoDB Conntected'));

const Schema = mongoose.Schema;
const GameSchema = new Schema({
    name: String,
    rlsd: Number,
    founder: String,
    download: Number
})

const Game = mongoose.model("Game", GameSchema)

app.use(express.json()) // global middleware :- req.body.title // <- like this 

app.get("/api/games", async (req, res) => {
    try {
        let GameData = await Game.find({})
        res.send(GameData)
        console.log("Games Data gotted");

    } catch (err) {
        res.status(500).send({
            msg: "Server Error"
        })
    }
})

app.post("/api/games", async (req, res) => {
    let { name, rlsd, founder, download } = req.body
    try {
        let GameData = await Game.create({ name, rlsd, founder, download })
        res.send(GameData)
        console.log(GameData);

    } catch (error) {
        res.status(405).send({ 
            msg: "Please, put valid informations in valid place.."
        })
    }
})

app.put("/api/games")

app.listen(8000, () => {
    console.log('server started');
}) 