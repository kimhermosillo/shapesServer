exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('targetarea').del()
    .then(function () {
      // Inserts seed entries
      return knex('targetarea').insert([
        {id: 1, targetarea: 'Upper Body' },
        {id: 2, targetarea: 'Lower Body' },
        {id: 3, targetarea: 'Abdominals' },
      ])
    }).then(() => {
      return knex.raw('ALTER SEQUENCE targetarea_id_seq RESTART WITH 2;')
    })
}