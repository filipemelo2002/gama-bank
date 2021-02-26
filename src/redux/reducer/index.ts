import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard';
import planning from './planning';
const appReducer = combineReducers({
  auth,
  dashboard,
  planning,
});

export default appReducer;
