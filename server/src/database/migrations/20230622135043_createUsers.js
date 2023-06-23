exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('name')
  table.text('email')
  table.text('password')
  table.timestamp('created_at').default(knex.fn.now())
  table.boolean('isAdmin').default(0)
})

exports.down = knex => knex.schema.dropTable('users')