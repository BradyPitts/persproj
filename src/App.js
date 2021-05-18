import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import './App.css';
import routes from './routes';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div id='app'>
                    {/* <Home /> */}
                    {routes}    
                </div>
            </HashRouter>
        );
    }
}

export default App;