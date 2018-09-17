
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {id: 1, name: 'Curls on the Cable', description: 'Curling cable', image_URL: '' },
        {id: 2, name: 'Dips', description: 'triceps', image_URL: ''},
        {id: 3, name: 'Wall Balls', description: 'ball throws', image_URL: ''},
        {id: 4, name: 'Tilted Hammer Curls', description: 'hammer curl', image_URL: ''},
        {id: 5, name: 'Kettle Raises - Arm', description: 'bruisers', image_URL: ''},
        {id: 6, name: 'Tricep Extensions', description: 'triceps', image_URL: ''},
        {id: 7, name: 'Row 300 meters', description: 'cardio', image_URL: ''},
        {id: 8, name: 'Leg Slides', description: 'abs', image_URL: ''},
        {id: 9, name: 'Tricep Pulldown', description: 'werk', image_URL: ''},
        {id: 10, name: 'Obliques', description: 'twerk', image_URL: ''},
        {id: 11, name: 'Crunches', description: 'lalalla', image_URL: ''},
        {id: 12, name: 'Leg Raises', description: 'legz', image_URL: ''},
        {id: 13, name: 'Ball Sit Ups', description: 'sure', image_URL: ''},
        {id: 14, name: 'Squats', description: 'twerk', image_URL: ''},
        {id: 15, name: 'Straight Deadlifts', description: 'more twerk', image_URL: ''},
        {id: 16, name: 'Lunges', description: 'i hate gregg', image_URL: ''},
        {id: 17, name: 'Hamstring Curls', description: 'curls for legzzzz', image_URL: ''},
        {id: 18, name: 'Calf Raises', description: 'none', image_URL: ''},
        {id: 19, name: 'Leg Press', description: 'gross', image_URL: ''},
        {id: 20, name: 'Leg Extensions', description: 'the worst', image_URL: ''},
  
      ])
    }) .then(() => {
      return knex.raw('ALTER SEQUENCE workouts_id_seq RESTART WITH 19;')
    })
}
