const Botella = require('../models/Botella')

async function addBotella(req, res){
    try {
        const{
            nombre,
            marca,
            tipo,
            contenido,
            precio,
            imgUrl,
            descripcion
        } = req.body

        const botella = Botella({
            nombre,
            marca,
            tipo,
            contenido,
            precio,
            imgUrl,
            descripcion
        })

        const botellaStored = await botella.save()

        res.status(201).send({botellaStored})
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    addBotella
}