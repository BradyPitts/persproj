import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCartNumber} from '../../redux/productsReducer';
import Login from '../Login/Login';
import './Header.css';


class Header extends Component{

  // componentDidMount(){
  //   getCartNumber(user_id);
  // }

  render(){
    return(
      <div id='header'>
        {/* <HashRouter> */}
          
          <Link to='/' className='links'>Home</Link>
          <Link to='/Shop' className='links'>Shop</Link>
          <Link to='/About' className='links'>About Us</Link>
          {/* <Link to='/ContactUs' className='links'>Contact Us</Link> */}
          <Link to='/Cart' className='links'>Cart</Link>
         
          <Login />
        {/* </HashRouter> */}
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    user: state.user,
    products: state.products
  }
}

export default connect(mapStateToProps, {getCartNumber}) (Header)