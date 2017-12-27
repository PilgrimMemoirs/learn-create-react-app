import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.state = {greeting: 'Hello'};
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }//constructor enabled
  removeGreeting(){
    this.props.removeGreeting(this.props.name);
  }
  render () {
    return (
      <div className="HelloWorld">
        <h2>{this.state.greeting} {this.props.name}!</h2>
        <button onClick={this.frenchify}> Frenchify! </button>
        <br>
        <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  } //render end
  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }

};//end HelloWorld class

export default HelloWorld;
