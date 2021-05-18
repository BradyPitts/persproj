import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';


export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/Shop' component={Shop} />
    <Route path='/Cart' component={Cart} />
    <Route path='/Wishlist' component={Wishlist} />
  </Switch>
)