const { Router } =require('express')

const usersRoutes = require('./users.routes')
const recipesRoutes = require('./recipes.routes')
const ingredientsRoutes = require('./ingredients.routes')
const instructionRoutes = require('./instructions.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/recipes', recipesRoutes)
routes.use('/ingredients', ingredientsRoutes)
routes.use('/instructions', instructionRoutes)
routes.use('/sessions', sessionsRoutes)

module.exports = routes