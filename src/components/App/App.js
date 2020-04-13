import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import ProcessFart from '../ProcessFart/ProcessFart';

const history = createBrowserHistory();

const trackingId = "UA-163519116-1";
ReactGA.initialize(trackingId);

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
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
