import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class ButtonForm = Rea

class ButtonForm extends Component {
  render() {
    return(
      <h1>{this.props.text}</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonForm text={this.props.text}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Done.
        </p>
      </div>
    );
  }
}

export default App;
