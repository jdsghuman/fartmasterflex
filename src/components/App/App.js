import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import ProcessFart from '../ProcessFart/ProcessFart';
import ReactGA from 'react-ga';
import auth from './auth.ts';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const trackingId = "UA-163519116-1";
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: auth.currentUserId(),
});

history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

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
        <Route
          path="/about"
          exact
          component={About}
        />
      </Switch>
    </Router>
  )
}

export default App;
