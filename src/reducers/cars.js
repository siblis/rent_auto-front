import { handleActions } from 'redux-actions';

import { carsLoaded } from 'actions/cars';

const initialState = {
  entities: [],
};

export default handleActions({
  [carsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
