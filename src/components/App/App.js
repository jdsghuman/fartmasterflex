import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import ProcessFart from '../ProcessFart/ProcessFart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
          />
        <Route
          path="/makefart"
          exact
          component={ProcessFart}
        />
      </Switch>
    </Router>
  )
}

export default App;
