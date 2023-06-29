const { Router } = require('express')

const UserController = require('../controllers/UserController.js')

const usersRoutes = Router()

const userController = new UserController()

usersRoutes.post('/', userController.create)

module.exports = userRoutes