require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authController = require('./controlers/authControler');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express()

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl:{
    rejectUnauthorized: false
  }
}).then(db =>{
  app.set('db', db);
  console.log('DataBase connected')
})

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);







app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))