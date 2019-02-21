import React, { Component } from 'react';
import Header from '../Header/Header.js'
import FamousPerson from '../FamousPerson/FamousPerson.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <FamousPerson/>
      </div>
    );
  }
}

export default App;
