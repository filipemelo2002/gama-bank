import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';
import rootReducer from './reducer';

const middlewares = [];
middlewares.push(thunk);
middlewares.push(createLogger({ collapsed: true, duration: true, diff: true }));

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
