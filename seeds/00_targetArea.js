
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shapes').del()
    .then(function () {
      // Inserts seed entries
      return knex('shapes').insert([
        {id: 1, name: 'rowValue1', target_id: '', description: '', image_URL: '' },
        {id: 2, name: 'rowValue2', target_id: '', description: '', image_URL: ''},
        {id: 3, name: 'rowValue3', target_id: '', description: '', image_URL: ''},
      ])
    })
}
