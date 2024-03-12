require("dotenv").config();

module.exports={
    database:{
        host: process.env.dbhost,
        user: process.env.dbuser,
        port: process.env.dbport,
        password: process.env.dbpass,
        database: process.env.db,
    }
}