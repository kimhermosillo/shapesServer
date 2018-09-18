exports.up = function(knex, Promise) {
  return knex.schema.createTable('workouts', function(table) {
    table.increments()
    table.text('name')
    table.text('description')
    table.text('image_URL')
  })
}
  
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workouts')
}