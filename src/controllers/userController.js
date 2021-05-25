const db = require('../models/index')

async function addUser(req,res){
    try {
        console.log(req.body)
        const user = await db.customers.create(req.body)
        res.status(200).json({
            message: "User created",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            data: "Todo mal"
        })
    }
}

async function getAllUsers(req,res){
    try {
        const users = await db.customers.findAll()
        res.status(200).json({
            message: "Usuarios encontrados con exito",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            data: "Todo mal"
        })
    }
}

async function getUser(req,res){
    try {
        const user = await db.customers.findByPk(req.params.userid)
        res.status(200).json({
            message: "User finded",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            data: "Todo mal"
        })
    }
}

function updateUser(req,res){
    try {
        res.status(200).json({
            data: `Update user with id ${req.params.userid}`
        })
    } catch (error) {
        res.status(500).json({
            data: "Todo mal"
        })
    }
}

function deleteUser(req,res){
    try {
        res.status(200).json({
            data: `Deelte user with id ${req.params.userid}`
        })
    } catch (error) {
        res.status(500).json({
            data: "Todo mal"
        })
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}