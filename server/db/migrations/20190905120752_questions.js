exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id')
    table.string('question')
    table.boolean('answer')
    table.string('fact')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('questions')
}
