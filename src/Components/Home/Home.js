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
      <button>Log In</button>
      <button>Sign Up</button>
      <br />
      <button>Continue As Guest</button>
      </div>
    )
  }
};