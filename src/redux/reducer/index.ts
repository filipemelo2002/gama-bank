import { combineReducers } from 'redux';
import auth from './auth';

const appReducer = combineReducers({
  auth,
});

export default (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};
