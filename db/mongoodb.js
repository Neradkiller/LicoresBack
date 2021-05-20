const mongoose = require('mongoose')

mongoose.connection.on('open', () => {
    console.log('DB coneected')
})

async function connectDB(uri){//Destructuracion de objestos
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDB