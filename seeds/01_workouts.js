
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {id: 1, name: 'Curls on the Cable', description: 'Curling cable', image_URL: '' },
        {id: 2, name: 'Dips', description: 'Dips workout your tricep area! On parallel bars, jump up, straighten your arms and then lower your body by bending your elbows while leaning forward. This may take time to properly dip down until your shoulders are parallel with your elbows. Lift your body back up, that`s a dip! Repeat 12-15 times. ', image_URL: ''},
        {id: 3, name: 'Wall Balls', description: 'Wall balls are amazing for shoulders! Grab any size weighted ball (whatevers comfortable but somewhat tough for you) then throw it up at all wall, then catch. Repeat for 20 times.', image_URL: ''},
        {id: 4, name: 'Incline Hammer Curls', description: 'On a seated incline bench with a dumbbell in each hand (at whatever weight is challenging for you) and allow them to hang straight down at your side. Initiate by flexing at the elbow, keeping your upper arm stationary. Continue this movement about 12-15 times.', image_URL: ''},
        {id: 5, name: 'Kettle Raises - Arm', description: 'Working each arm seperately, a kettlebell at your choice of weight. Squating down, the kettlebell touching the floor, stand up, then raise the kettlebell to the sky. Repeat about 12-15 times.', image_URL: ''},
        {id: 6, name: 'Tricep Extensions', description: 'On a curling cable, at a comfortable weight, keep your elbows to the side and pull down. Repeat about 15 times.', image_URL: ''},
        {id: 7, name: 'Row 300 meters', description: 'Rowing 300 meters ideally under 2 minutes is a great way to get some cardio in while still working out your arms/back.', image_URL: ''},
        {id: 8, name: 'Leg Slides', description: 'Challenging abdominal workout. Adding some sort of plastic to your feet while planking allows you to slide each leg out, and back targetting the abdominal area. Repeat for 30 seconds at a time.', image_URL: ''},
        {id: 9, name: 'Obliques', description: 'I`ll figure out how to explain these eventually', image_URL: ''},
        {id: 10, name: 'Crunches', description: 'Basic crunches, do as many as you can for 30 seconds at a time.', image_URL: ''},
        {id: 11, name: 'Leg Raises', description: 'Great abdominal workout! Hang yourself from parallel bars and raise your legs up.', image_URL: ''},
        {id: 12, name: 'Squats', description: 'Work on your glutes! Squat down, keeping feet shoulder width apart.', image_URL: ''},
        {id: 13, name: 'Straight Deadlifts', description: 'Keeping your legs straight, deadlift desired weight while keeping your back straight.', image_URL: ''},
        {id: 14, name: 'Lunges', description: 'Lunge across the room and back with desired weight.', image_URL: ''},
        {id: 15, name: 'Hamstring Curls', description: 'Laying on a bench, add weights to your legs and curl up.', image_URL: ''},
        {id: 16, name: 'Calf Raises', description: 'Stand on a flat ground, and go on your tippy toes. You could add weights if you`d like.', image_URL: ''},
        {id: 17, name: 'Leg Press', description: 'Add desired weight and keep your heels flat.', image_URL: ''},
        {id: 18, name: 'Leg Extensions', description: 'Add desired weight.', image_URL: ''},
  
      ])
    }) .then(() => {
      return knex.raw('ALTER SEQUENCE workouts_id_seq RESTART WITH 17;')
    })
}
