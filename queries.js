const database = require('./database-connection')

module.exports = {
  listTargetArea() {
    return database('targetarea')
  },
  listWorkouts() {
    return database('workouts')
  },


}