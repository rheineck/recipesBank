exports.up = knex => knex.schema.createTable('recipes', table => {
  table.increments('id')
  table.text('title').notNullable()
  table.text('category').notNullable()
  table.text('picture').notNullable()
  table.timestamp('updated_at').default(knex.fn.now())
  table.timestamp('created_at').default(knex.fn.now())
})
  
exports.down = knex => knex.schema.dropTable('recipes')