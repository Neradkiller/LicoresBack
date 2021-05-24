const config = {
    appConfig: {
        host: process.env.HOST,
        port: process.env.PORT
    },
    db:{
        db_uri: process.env.DB_URI
    }
}

module.exports = config