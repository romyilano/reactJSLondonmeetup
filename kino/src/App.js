import React, { Component } from 'react';
import logo from './logo.svg';
import whiskybottle from "./../public/blended-whisky-that-boutiquey-whisky-company-whisky.jpg";
import milroys from "./../public/Milroys.jpg"
import './App.css';

// here's a component. this stuff is weird
function Movie() {
  return <div>Hello!
    <img src={milroys} className="Milroys-image" />
  </div>
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={whiskybottle} className="Whisky-image"  alt="Sample Whisky Logo"/>
          <h2>Whiskey List</h2>
          <Movie />
          <img src={milroys} className="Milroys-image" />
        </div>
        <p className="App-intro">
         Dude! get started, edit <code>src/App.js</code> and save to reload.
         <Movie />
        </p>
      </div>
    );
  }
}

export default App;
