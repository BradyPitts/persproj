import React, { Component } from 'react';
// import Background from '../shared/Background/Background'
// import axios from 'axios';
import {connect} from 'react-redux';
import {login, signUp, logout} from '../../redux/userReducer';
import './Login.css';


class Login extends Component {

    handleEmail(value) {
        console.log(value);
        this.setState({ email: value });
      }
    
      handlePassword(value) {
        console.log(value);
        this.setState({ password: value });
      }

    render() {
      console.log(this.props.user)
        return (
            <div id='login' > 
                {this.props.user.isLoggedIn ? 

                  <div id='logout'>
                  <button onClick={() => this.props.logout()} >Log out</button>
                  </div>
                  :
                  <div id='log-in'>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" onChange={e => this.handleEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={e => this.handlePassword(e.target.value)} />
                    </div>
                    <button onClick={() => this.props.login(this.state.email, this.state.password)}>Log In</button>
                    <button onClick={() => this.props.signUp(this.state.email, this.state.password, this.props.user.admin)}>Sign Up</button>
                  </div>

                }
                    
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps, {login, signUp, logout}) (Login)