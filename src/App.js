import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Login} exact />
                    <Route path='/my-products' component={Home} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;