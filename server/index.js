require('dotenv').config()
const massive = require('massive') 
const express = require('express')
const app = express()

const {CONNECTION_STRING, SERVER_PORT} = process.env;
const ctrl = require('./controller')

app.use(express.json())


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
    }).then( db => {
        app.set('db', db)
        console.log('connected to db')
    }).catch( err => console.log(err))


app.listen(SERVER_PORT, ()=> console.log(`Connected to port ${SERVER_PORT}`))