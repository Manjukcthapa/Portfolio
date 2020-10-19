import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/Homepage';
import Project from './Component/Projectlist'
import Education from './Component/Education'
import Contact from './Component/Contact'
import Resume from './../public/ManjuResume.pdf'
import Header from "./Component/Header"
import "./App.css";

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
          <Header/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Project' component={Project}/>
              <Route path='/Education' component={Education}/>
              <Route path='/Contact' component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
