const GameController = require('../controllers/game.controller')

module.exports = (app) => {
    app.post('/api/createGame', GameController.createGame)
}