const express = require('express')
const router = express.Route()
const queries = require ('../queries')

router.get('/', (request, response, next) => {
  queries.list()
    .then(TargetArea => {
      response.json({ TargetArea})
    })
    .catch(next)
})
/*
router.get('/', (request, response, next) => {
  queries.list()
    .then
})
*/