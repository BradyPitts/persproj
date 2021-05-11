import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <img src='./images/newbanner.jpg' alt='Wimpitts Banner' />

      <Header />
      <Home />
    </div>
  );
}

export default App;
