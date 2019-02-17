import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from './constants/routes';

import Nav from './components/Nav';
import LandingPage from './pages/landing';
import SelectSkills from './pages/skill-selection';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import NoMatch from './pages/noMatch';

import './App.css';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route 
                exact path={routes.LANDING}
                component={LandingPage}
              />
              <Route 
                exact path={routes.SKILL_SELECT}
                component={SelectSkills}
              />
              <Route 
                exact path={routes.SIGNUP}
                component={Signup}
              />
              <Route 
                exact path={routes.DASHBOARD}
                component={Dashboard}
              />

              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
