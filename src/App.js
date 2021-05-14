import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Login from './Components/Login/Login';


export default class App extends Component {


  

render(){
  return (

    <div className="App">
      {/* <img src='./images/newbanner.jpg' alt='Wimpitts Banner' /> */}
      {/* {isLoggedIn ? null : <Login />} */}
      {/* <Header /> */}
      {/* <Home /> */}
      <Shop />
    </div>
  )};
};