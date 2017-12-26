import React, { Component } from 'react';
import './HelloWorldList.css';

import HelloWorld from './HelloWorld';


class HelloWorldList extends Component {
  render() {
    return (
      <div className="HelloWorldList">
        <HelloWorld name="Amper"/>
        <HelloWorld name="Octo"/>
      </div>
    )
  }
}


export default HelloWorldList;
