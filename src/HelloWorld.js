import React, { Component } from 'react';
import './App.css';

const HelloWorld = props => {
  return (<div className="HelloWorld"> Hello {props.name}! </div> )
};

export default HelloWorld;
