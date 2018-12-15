import { createAction } from 'redux-actions';

import app from '../app';

export const carsLoaded = createAction('[cars] Load');

export const loadCars = () => (dispatch) => {
  app.get('info_models').then(res => {
    dispatch(carsLoaded(res.data));
  });
}
