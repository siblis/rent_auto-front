import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import carModels from './carModels';

export default combineReducers({
  routing: routerReducer,
  carModels,
});
