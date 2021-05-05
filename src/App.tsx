import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import './App.global.scss';

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/Feed" />
      </Route>
      <Route path="/Feed" component={Feed} />
      <Route path="/Profile" component={Profile} />
    </Router>
  );
};

export default App;
