import React, { Component } from 'react';
import { HashRouter} from 'react-router-dom';
import './App.css';
import routes from './routes';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div id='app'>
                    {routes}    
                </div>
            </HashRouter>
        );
    }
}

export default App;