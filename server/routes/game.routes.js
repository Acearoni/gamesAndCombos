const GameController = require('../controllers/game.controller')

module.exports = (app) => {
    app.post('/api/createGame', GameController.createGame)
    app.get('/api/findOneGame/:id', GameController.findOneGame)
    app.get('/api/findAllGames', GameController.findAllGames)
    app.put('/api/updateGame/:id', GameController.updateGame)
    app.delete('/api/deleteGame/:id', GameController.deleteGame)
}