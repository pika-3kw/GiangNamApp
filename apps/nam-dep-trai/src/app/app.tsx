import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import BottomNav from './components/BottomNavigation';

import Home from './screens/Home';
import Schedule from './screens/Schedule';
import Money from './screens/Money';

export const App = () => {
  return (
    <Router>
      <BottomNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
