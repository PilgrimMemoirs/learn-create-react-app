import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props){
    super(props);
    this.state = {greetingName: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  render(){
    return (
      <div className="AddGreeter">
        <input type="text" onClick={this.handleUpdate()}/>
        &nbsp;&nbsp;
        <button> Add </button>
      </div>
    );
  }
}

export default AddGreeter;
