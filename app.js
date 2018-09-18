const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = parseInt(process.env.PORT || 7000)
const queries = require('./queries.js')
const cors = require('cors')


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'trappin outta' + port))

app.get('/targetarea', (request, response, next) => {
  console.log('is this working or notttttt')
  queries.listTargetArea()
    .then(shapes => {
      response.json({ shapes })
    })
    .catch(next)
})

app.get('/workouts', (request, response, next) => {
  console.log('pls work also lol')
  queries.listWorkouts()
    .then(shapes => {
      response.json({ shapes })
    })
    .catch(next)
})


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

//error handler
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err.stack: {},
    })
})

/*
app.get('/TargetArea/:id', (request, response, next) => {
  queries
    .selectTargetArea(request.params.id)
    .then(TargetArea => {
      TargetArea
        ? response.json({ TargetArea })
        : response.status(404).json({ message: 'bruh u fucked up' })
    })
    .catch(next)
})
*/

module.exports = app