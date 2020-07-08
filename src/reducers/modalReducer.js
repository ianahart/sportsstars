import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const INITIAL_STATE = {
  isModalOpen: null,
  playerId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, playerId: action.payload };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};
