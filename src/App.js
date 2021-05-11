import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


export default class App extends Component {


  

render(){
  return (

    <div className="App">
      <img src='./images/newbanner.jpg' alt='Wimpitts Banner' />

      <Header />
      <Home />
    </div>
  )};
};