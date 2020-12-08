import React, { useEffect } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './layout';
import Storage from './boot/storage';

import { LOGIN_AUTH, STORAGE_AUTH } from './reducers/auth';

import { FETCH_CONFIG } from './reducers/config';

function App() {
  const dispatch = useDispatch();
  const payload = Storage.getItem(STORAGE_AUTH);

  useEffect(() => {
    dispatch({ type: FETCH_CONFIG });
    if (payload) dispatch({ type: LOGIN_AUTH, payload });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
