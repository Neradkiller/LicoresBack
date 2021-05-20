const express = require('express')
const api = express.Router()

api.post('/botellas',(req,res) => {
    res.status(201).send({sucess: true})
})

module.exports = api