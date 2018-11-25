import { createAction } from 'redux-actions';

import app from '../app';

export const additionsLoaded = createAction('[additions] Load');

export const loadAdditions = () => (dispatch) => {
  app.get('additions').then(res => {
    dispatch(additionsLoaded(res.data));
  });
}
