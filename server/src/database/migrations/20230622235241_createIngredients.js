exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id')
  table.text('name').notNullable()
  table.integer('recipe_id').references('id').inTable('recipes').onDelete("CASCADE")
})

exports.down = knex => knex.schema.dropTable('ingredients')