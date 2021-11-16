exports.up = function(knex) {
  return knex.schema.createTable('forceUsers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('homeWorld')
    table.boolean('jedi').default(true)
    table.boolean('sith').default(true)
    table.boolean('neutral').default(true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('forceUsers')
}
