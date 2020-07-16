import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/Homepage';
import Project from './Component/Projectlist'
import Education from './Component/Education'
import Contact from './Component/Contact'
import Resume from './../public/ManjuFinalResume.pdf'
import "./App.css";

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
          <nav className="nav">
          <ul>
            <li><Link to={'/'} className="nav-link"><span>About Me</span></Link></li>
            <li><Link to={'/Project'} className="nav-link"><span>Projects</span></Link></li>
            <li><Link to={'/Education'} className="nav-link"><span>Education</span></Link></li>
            <li><Link to={'/Contact'} className="nav-link"><span>Contact</span></Link></li>
            <a className="resume" href={Resume}>Resume</a>
          </ul>
          </nav>
          <hr />
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
