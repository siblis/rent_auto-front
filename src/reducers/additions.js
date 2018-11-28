import { handleActions } from 'redux-actions';

import { additionsLoaded } from 'actions/additions';

const initialState = {
  entities: [],
};

export default handleActions({
  [additionsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
