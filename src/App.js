import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/homepage';
import Projects from './Component/project'
import "./App.css";


import Skills from './Component/Skills';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
          <nav className="nav">
          <ul>
            <li><Link to={'/'} className="nav-link"><span>Home</span></Link></li>
            <li><Link to={'/skills'} className="nav-link"><span>Skills</span></Link></li>
            <li><Link to={'/Project'} className="nav-link"><span>Project</span></Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/skills' component={Skills} />
              <Route path='/Project' component={Projects}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
