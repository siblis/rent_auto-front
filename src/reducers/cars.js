import { handleActions } from 'redux-actions';

import { carsLoaded } from 'actions/cars';

const initialState = {
  entities: [],
};

export default handleActions({
  [carsLoaded]: (state, actions) => {

    // mapping images' URIs to cars
    actions.payload.forEach(item => {
      item.image_uri = `model-${item.id % 3 + 1}.jpg`;
      if (item.id === 10) {
        item.image_uri = 'no-image.png';
      }
    });

    return {
      entities: actions.payload,
    }
  }
}, initialState);
