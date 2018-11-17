import { handleActions } from 'redux-actions';

import { brandsLoaded } from 'actions/brands';

const initialState = {
  entities: [],
};

export default handleActions({
  [brandsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
