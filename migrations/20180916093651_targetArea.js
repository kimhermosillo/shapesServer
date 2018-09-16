exports.up = function(knex, Promise) {
  return knex.schema.createTable('shapes', function(table) {
    table.increments()
    table.text('targetArea')
  })
}
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shapes')
}