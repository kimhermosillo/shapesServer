exports.up = function(knex, Promise) {
  return knex.schema.createTable('TargetArea', function(table) {
    table.increments()
    table.text('TargetArea')
  })
}
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('TargetArea')
}