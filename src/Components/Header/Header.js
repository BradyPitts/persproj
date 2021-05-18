import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp, login, logout, continueAsGuest, requestUserData} from '../../redux/userReducer';
import Login from '../Login/Login';
import About from '../About/About';


export default class Header extends Component{

  render(){
    return(
      <div id='header'>
        <HashRouter>
          <Link to='/' className='links'>Home</Link>
          <Link to='/Shop' className='links'>Shop</Link>
          <Link to='/About' className='links'>About Us</Link>
          <Link to='/ContactUs' className='links'>Contact Us</Link>
          <Login />
          <Link to='/Cart' className='links'>Cart</Link>
        </HashRouter>
      </div>
    )
  }
}