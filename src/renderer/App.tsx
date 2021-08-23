import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Search from './pages/Search';
import Msg from './pages/Msg';
import Profile from './pages/Profile';
import './App.global.scss';

const App = () => {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/Feed" />
      </Route>
      <Route path="/Feed" component={Feed} />
      <Route path="/Search" component={Search} />
      <Route path="/Msg" component={Msg} />
      <Route path="/Profile" component={Profile} />
    </Router>
  );
};

export default App;
