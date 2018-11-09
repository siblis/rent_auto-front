import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { routerMiddleware } from 'react-router-redux';

import { history } from './index';

export default createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), thunk),
);
