exports.up = function(knex, Promise) {
  return knex.schema.createTable('targetarea', function(table) {
    table.increments()
    table.text('targetarea')
  })
}
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('targetarea')
}