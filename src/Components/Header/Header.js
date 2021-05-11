import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp, login, logout, continueAsGuest} from '../../redux/userReducer';


class Header extends Component{


  componentDidMount(){
    this.props.requestUserData();
  }

  handleEmail(value) {
    this.setState({ email: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }

  render(){
    const {email, password} = this.props.user;
  return(
    <>
      <header>
        
      <input
        type="email"
        placeholder="Email"
        value={this.email}
        onChange={e => this.handleEmail(e.target.value)}
        />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={this.password}
        onChange={e => this.handlePassword(e.target.value)}
        />
      <br />
      <button onClick={() => (this.login())}>Log In</button>
      <button onClick={() => (this.signUp())}>Sign Up</button>
      <br />
      {/* <Link> */}
        <button>Continue As Guest</button>
      {/* </Link> */}
        <nav>
          
        </nav>
      </header>
    </>
    );
  }
}  

function mapStateToProps(state){
  return {
    eamil: state.email,
    password: state.password
  }
}

export default connect(mapStateToProps, {signUp, login, logout, continueAsGuest}) (Header);