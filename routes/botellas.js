const express = require('express')
const upload = require('../libs/storage')
const { addBotella } = require('../controllers/botellaControler')
const api = express.Router()

api.post('/botellas',upload.single('imgUrl'),addBotella)

module.exports = api