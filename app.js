const express = require('express')
const bodyParser = require('body-parser')
const botellasRoutes = require('./routes/botellas')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/api/v1', botellasRoutes)

module.exports = app;