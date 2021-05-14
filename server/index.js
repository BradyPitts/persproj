require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authController2 = require('./controllers/authController2');
const productController = require('./controllers/productController');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

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
    secret: SESSION_SECRET,
    cookie:{
      maxAge: 1000* 60 * 60 * 7
    },
  })
);


app.post('/auth/signup', authController2.signUp);
app.post('/auth/login', authController2.login);
app.delete('/auth/logout', authController2.logout);
app.get('/auth/user-data', authController2.userData);

app.get('/api/products', productController.getAll);
app.post('/api/products', productController.addToCart);
app.get('/api/cart', productController.getAllFromCart);



app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))