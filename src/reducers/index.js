import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import brands from './brands';
import additions from './additions';
import cars from './cars';

export default combineReducers({
  routing: routerReducer,
  brands,
  additions,
  cars,
});
