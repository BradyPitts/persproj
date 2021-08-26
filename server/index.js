require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const path = require('path')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/../build`))

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
      maxAge: 1000* 60 * 60 * 24 * 7 * 4
    },
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})


app.post('/auth/signup', authController.signUp);
app.post('/auth/login', authController.login);
app.delete('/auth/logout', authController.logout);
app.get('/auth/user-data', authController.userData);

app.get('/api/products', productController.getAll);
app.post('/api/products', productController.addToCart);
app.post('/api/cart', productController.getAllFromCart);
app.post('/api/cartRemove', productController.removeFromCart);
app.post('/api/checkout', productController.checkout);
app.put('/api/products', productController.addProduct);
// app.get('/api/number', productController.getCartNumber);
// app.get('/api/wishlist', productController.getWishlist);
// app.post('/api/wishlist', productController.addToWishlist);



app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))