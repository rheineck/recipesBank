const { Router } = require('express')

const InstructionsController = require('../controllers/InstructionsController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const instructionsRoutes = Router()

const instructionsController = new InstructionsController()

instructionsRoutes.use(ensureAuthenticated)

instructionsRoutes.get('/', instructionsController.index)

module.exports = instructionsRoutes