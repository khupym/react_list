import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Group from './Group';
import Listsubmit from './Listsubmit';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {items : []};
  }

  render() {
    //this.items
    return (
      <div className="App">
        <p className="App-intro">
          Insert text
        </p>
  
        <Listsubmit numbers={this.state.items}/>
      
      </div>
    );
  }
}

export default App;
