const { hash } = require('bcryptjs')
const knex = require('../database/index')
const AppError = require('../utils/AppError')

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body

    const [checkUserExists] = await knex('users').select().where({ email })

    if(checkUserExists) {
      throw new AppError('Este email já está em uso!')
    }

    const hashedPassword = await hash(password, 8)

    await knex('users').insert({
      name,
      email,
      password: hashedPassword,
    })
    
    return res.status(201).json()

  }

}

module.exports = UserController