require('dotenv').config()
const express = require('express')

const { appConfig } = require('./config') //Solo usa la proiedad app

const app = express()

app.listen(appConfig.port, () => {
    console.log(`Server listening on port ${appConfig.port}`)
})