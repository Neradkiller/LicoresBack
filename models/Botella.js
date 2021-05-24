const mongoose = require('mongoose')
//Modelo en moongose que corresponde a una BD no relacional
const Schema = mongoose.Schema
const { appConfig } = require('../config')

const BotellaSchema = Schema({
    nombre: String,
    marca: String,
    tipo: String,
    contenido: String,
    precio: Number,
    imgUrl: String,
    descripcion: String
},{
    timestamps: true
})

BotellaSchema.methods.setImgUrl = function setImgUrl(filename){
 const { host, port } = appConfig
 this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Botellas', BotellaSchema)