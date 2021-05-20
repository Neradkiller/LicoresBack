const mongoose = require('mongoose')
//Modelo en moongose que corresponde a una BD no relacional
const Schema = mongoose.Schema

const BotellaSchema = Schema({
    nombre: String,
    marca: String,
    tipo: String,
    contenido: String,
    precio: Number,
    imgUrl: String,
    descripcion: String
},{
    timeStamps: true
})

module.exports = mongoose.model('Botellas', BotellaSchema)