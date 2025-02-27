const Game = require('../models/game.model');

module.exports = {
//Create
    createGame: (req, res) => {
        Game.create(req.body)
            .then((newGame) => {
                res.status(201).json(newGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
//Read
    findOneGame: (req, res) => {
        Game.findOne({_id: req.params.id})
            .then((oneGame) => {
                res.status(200).json(oneGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    findAllGames: (req, res) => {
        Game.find()
            .then((allGames) => {
                res.status(200).json(allGames)
            })
            .catch((err) => {
                console.log("Something Went Wrong When Finding All")
                res.status(500).json(err)
            })
    },
//Update
updateGame: (req, res) => {
    Game.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then((updatedGame) => {
            res.json(updatedGame)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
},
    //Delete
    deleteGame: (req,res) => {
        Game.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}
