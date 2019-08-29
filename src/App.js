import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Component/homepage.js";

import { Router, Route, Switch } from "react-router";


class App extends  React.Component {
  render() {
    return (
      <div  className="router">
      <HomePage/>
      </div>
    );
  }
}

export default App;
