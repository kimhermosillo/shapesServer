
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shapes').del()
    .then(function () {
      // Inserts seed entries
      return knex('shapes').insert([
        {id: 1, targetArea: 'Upper Body' },
        {id: 2, TargetArea: 'Lower Body' },
        {id: 3, TargetArea: 'Abdominals' },
      ])
    })
}
