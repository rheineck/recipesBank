const knex = require('../database/index')

class InstructionsController {
  async create(req, res) {
    const instructions = await knex('instructions')
    .groupBy('description')

    return res.json(instructions)
  }
}

module.exports = InstructionsController