import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/'

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  return createStore(rootReducer, data, middleware)
}
