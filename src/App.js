import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import Changebtn from './Changebtn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Hello name = "Hanson"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Changebtn/>
      </div>
    );
  }
}

export default App;
