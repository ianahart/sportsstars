import { FETCH_ATHLETE } from '../actions/types';

const INITIAL_STATE = {
  athlete: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ATHLETE:
      return { ...state, athlete: action.payload };

    default:
      return state;
  }
};
