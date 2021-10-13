import React, { Component } from 'react';
// import Background from '../shared/Background/Background'
// import axios from 'axios';
import {connect} from 'react-redux';
import {login, signUp, logout, sendNewPassword} from '../../redux/userReducer';
import './Login.css';
const nodemailer = require('nodemailer');



class Login extends Component {
  constructor(){
    super();

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });
      
      let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: 'nodemailer test',
        text:'hello'
      };
      
      transporter.sendMail(mailOptions, function(err, data){
        if (err) {
          console.log('Error' + err); 
        } else {
          console.log('Email sent')
        }
      })
      
  }
      
  handleEmail(value) {
    console.log(value);
    this.setState({ email: value });
    }
  
  handlePassword(value) {
    console.log(value);
    this.setState({ password: value });
  }

  makePassword = (length) => {
    console.log('Forgot Password pressed')
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   console.log(result)
   return result;
}

// console.log(makeid(8));
 



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

              <div id='buttons'>
                <button onClick={() => this.props.login(this.state.email, this.state.password)}>Log In</button>

                <button onClick={() => this.props.signUp(this.state.email, this.state.password, this.props.user.admin)}>Sign Up</button>

                <button onClick={() => this.props.sendNewPassword(this.state.email, this.makePassword(8))}>Forgot Password</button>
              </div>
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

export default connect(mapStateToProps, {login, signUp, logout, sendNewPassword}) (Login)