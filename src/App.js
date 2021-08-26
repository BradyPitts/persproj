import React, { Component } from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import './App.css';
import routes from './routes';
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

class App extends Component {

    render() {
        return (
            <Router>
                <div id='app'>
                    {routes}
                </div>
            </Router>
        );
    }
}

export default App;