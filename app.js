const express = require('express')
const botellasRoutes = require('./routes/botellas')

const app = express()

app.use('/api/v1', botellasRoutes)

module.exports = app;