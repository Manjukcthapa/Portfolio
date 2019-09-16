import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Component/homepage';
import Projects from './Component/project'

import Skills from './Component/Skills';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav>
          <ul>
            <li><Link to={'/'} className="nav-link"><span>Home</span></Link></li>
            <li><Link to={'/skills'} className="nav-link">Skills</Link></li>
            <li><Link to={'/Project'} className="nav-link">Project</Link></li>
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
