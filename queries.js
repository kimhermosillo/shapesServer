const database = require('./database-connection')

module.exports = {
  listTargetArea() {
    return database('shapes')
  },
}