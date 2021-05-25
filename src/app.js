const express = require('express')
const userRoutes = require('./routes/usersRoutes')

const app = express()

//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/api/v1', userRoutes)

module.exports = app;