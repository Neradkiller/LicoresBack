require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/mongoodb')

const { appConfig,db } = require('./config') //Solo usa la propiedad app

async function initApp(appConfig, db){
    try
    {
        await connectDB(db.db_uri)
        app.listen(appConfig.port, () => {
            console.log(`Server listening on port ${appConfig.port}`)
        })
    }
    catch(e){
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, db)