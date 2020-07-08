import { FETCH_SPORTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SPORTS:
      return action.payload;
    default:
      return state;
  }
};
