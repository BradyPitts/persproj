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
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.continue = this.continue.bind(this);
    this.logout = this.logout.bind(this);

  }

  handleEmail(value) {
    this.setState({ email: value });
  }

  handlePassword(value) {
    this.setState({ password: value });
  }

  signUp(){
    console.log('signUp pressed')
    const {email, password, admin} = this.state;
    axios.post('/auth/signup', {email, password, admin})
    .then(res =>{
      console.log('signUp response')
      console.log(res.data)
      this.setState({email: '', password: ''})

    })
    .catch(err => {
      alert(`a sign up error has occured ${err}`);
      console.log(err)
    })
  }

  login(){
    console.log(`login pressed`)
    const {email, password} = this.state;
    axios.post('/auth/login', {email, password})
    .then(res =>{
      console.log('login response')
      console.log(res.data)
      this.setState({email: '', password: ''})

    })
    .catch(err => {
      alert(`a login error has occured ${err}`);
      console.log(err)
    })
  }

  logout(){
    console.log('logout pressed')
  }

  continue(){
    console.log(`continue pressed`)

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
      {/* <Link> */}
        <button>Continue As Guest</button>
      {/* </Link> */}
      </div>
    )
  }
};