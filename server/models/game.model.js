const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please enter the game name"],
        minLength: [3, "Game name must be at least 3 characters long"]
    },

}, {timestamps: true})

const Game = mongoose.model('Game', GameSchema)
module.exports = Game