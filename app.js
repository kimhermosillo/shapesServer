const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const queries = require('./queries')

app.use(cors())
app.use(bodyParser.json())