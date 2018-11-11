import { handleActions } from 'redux-actions';

import { carModelsLoaded } from 'actions/carModels';

const initialState = {
  entities: [],
};

export default handleActions({
  [carModelsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
