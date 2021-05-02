import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
