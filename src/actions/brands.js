import { createAction } from 'redux-actions';

import app from '../app';

export const brandsLoaded = createAction('[brands] Load');

export const loadBrands = () => (dispatch) => {
  app.get('models').then(res => {
    dispatch(brandsLoaded(res.data));
  });
}
