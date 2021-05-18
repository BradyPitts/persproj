import React, { Component } from 'react';
import Background from '../shared/Background/Background'
import axios from 'axios';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    async componentDidMount() {
        let res = await axios.get('/auth/user-data')
        if (res.data.loggedIn) this.props.history.push('/my-products')
    }

    async login(e) {
        if (e) e.preventDefault();
        const { email, password } = this.state;
        try {
            const res = await axios.post('/auth/login', { email, password });
            if (res.data.loggedIn) {
                let someone = res.data.authenticatedUser
                this.props.history.push('/my-products')
            }
        } catch (e) {
            alert('Login failed. Please try again.');
        }
    }

    render() {
        return (
            <Background>
                {/* <img src='./images/newbanner.jpg' alt='Wimpitts Banner' /> */}
                <form className='login-form' onSubmit={(e) => this.login(e)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <button className='btn btn-success btn-lg' type='submit'>Log in</button>
                </form>
            </Background>
        )
    }
}

export default Login