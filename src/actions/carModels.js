import { createAction } from 'redux-actions';

import app from '../app';

export const carModelsLoaded = createAction('[CarModels] Load');

export const loadCarModels = () => (dispatch) => {
  app.get('brands').then(res => {
    dispatch(carModelsLoaded(res.data));
  });
}
