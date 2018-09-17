exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('TargetArea').del()
    .then(function () {
      // Inserts seed entries
      return knex('TargetArea').insert([
        {id: 1, TargetArea: 'Upper Body' },
        {id: 2, TargetArea: 'Lower Body' },
        {id: 3, TargetArea: 'Abdominals' },
      ])
    })
}