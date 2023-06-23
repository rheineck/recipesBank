exports.up = knex => knex.schema.createTable('instructions', table => {
  table.increments('id')
  table.text('description')
  table.integer('recipe_id').references('id').inTable('recipes').onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable('instructions')
