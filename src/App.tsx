import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Hello = () => {
  return <div>Hello World 2</div>;
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
};

export default App;
