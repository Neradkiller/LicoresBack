require('dotenv').config()
const app = require('./app')

const { appConfig} = require('./config') //Solo usa la propiedad app

async function initApp(appConfig){
    try
    {
        app.listen(appConfig.port, () => {
            console.log(`Server listening on port ${appConfig.port}`)
        })
    }
    catch(e){
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig)