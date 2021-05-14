import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp, login, logout, continueAsGuest, requestUserData} from '../../redux/userReducer';


class Login extends Component{


  componentDidMount(){
    console.log(this.state);
    console.log(this.props);
    this.props.requestUserData();
  }

  handleEmail(value) {
    this.setState({ email: value });
    // console.log(this.state.email)
  }

  handlePassword(value) {
    this.setState({ password: value });
    // console.log(this.state.password)
  }

  render(){
    console.log(this.props)
    const {email, password} = this.props;
    const isLoggedin = false;
    console.log(`${email} ${password}`)
  return(
    <div>
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
      <button onClick={() => login(this.state) }>Log In</button>
      <button onClick={() => signUp(this.state)}>Sign Up</button>
      <br />
        <button onClick={() => (this.props.continueAsGuest())}>Continue As Guest</button>

      </header>
    </div>
    );
  }
}  

function mapStateToProps(state){
  console.log(state)
  return {
    email: state.email,
    admin: false
  }
}

export default connect(mapStateToProps, {signUp, login, logout, continueAsGuest, requestUserData}) (Login);