const { Router } = require('express')

const RecipesController = require('../controllers/RecipesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const recipesRoutes = Router()

const recipesController = new RecipesController()

recipesRoutes.use(ensureAuthenticated)

recipesRoutes.post('/', recipesController.create)
recipesRoutes.delete('/:id', recipesController.delete)
recipesRoutes.get('/:id', recipesController.show)
recipesRoutes.get('/', recipesController.index)

module.exports = recipesRoutes