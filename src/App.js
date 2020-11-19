import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import Layout from './layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
