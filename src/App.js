import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/Homepage';
import Project from './Component/Projectlist'
import Education from './Component/Education'
import Contact from './Component/Contact '
import "./App.css";



import Skills from './Component/Skills';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
          <nav className="nav">
          <ul>
            <li><Link to={'/'} className="nav-link"><span>About Me</span></Link></li>
            <li><Link to={'/skills'} className="nav-link"><span>Skills</span></Link></li>
            <li><Link to={'/Project'} className="nav-link"><span>Projects</span></Link></li>
            <li><Link to={'/Education'} className="nav-link"><span>Education</span></Link></li>
            <li><Link to={'/Contact'} className="nav-link"><span>Contact</span></Link></li>
            <a  className = "resume" href="https://drive.google.com/file/d/1-dqzYzTuIvOxbYGs6MTKispjH9J7t4eu/view">Resume</a>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/skills' component={Skills} />
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
