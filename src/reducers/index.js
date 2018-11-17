import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import brands from './brands';

export default combineReducers({
  routing: routerReducer,
  brands,
});
