import { combineReducers } from 'redux';

import users from './users';
import config from './config';
import auth from './auth';

export default combineReducers({
  users,
  config,
  auth,
});
