import axios from 'axios';
import React, {Component} from 'react';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      admin: false
    }

  }

  handleEmail(value) {
    this.setState({ email: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }

  signUp(){
    console.log('signUp pressed')
    const {email, password} = this.state;
    axios.post('/auth/signup', {email, password})
    .then(res =>{
      console.log('signUp response')
      console.log(res.data)
      this.setState({email: '', password: ''})

    })
    .catch(err => {
      alert(`an error has occured ${err}`);
      console.log(err)
    })
  }

  login(){

  }

  continue(){

  }

  render(){
    return(
      <div id='home' >
        
      <input
        type="text"
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
      <button onClick={() => (this.continue())}>Continue As Guest</button>
      </div>
    )
  }
};