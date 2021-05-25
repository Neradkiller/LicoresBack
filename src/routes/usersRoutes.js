const { Router } = require('express')
const api = Router()

const { addUser,
        getUser,
        getAllUsers,
        updateUser,
        deleteUser } = require('../controllers/userController')

//Aqui se llenaran todos los endpoints de users

api.post('/user', addUser)

api.get('/user',getAllUsers)

api.get('/user/:userid',getUser)

api.put('/user/:userid',updateUser)

api.delete('/user/:userid',deleteUser)

module.exports = api