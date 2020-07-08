import sportsDB from '../apis/sportsDB';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_SPORTS,
  FETCH_ATHLETE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types';
// ====== Google oauth ==========/

export const signIn = (userId) => {
  localStorage.setItem('isSignedIn', true);
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

// export const signIn = (userId) => {
//   return async (dispatch) => {
//     dispatch({ type: SIGN_IN, payload: userId });
//   };
// };

export const signOut = () => {
  localStorage.removeItem('isSignedIn');
  return {
    type: SIGN_OUT,
  };
};

// ====== API ==========/

export const fetchSports = () => async (dispatch) => {
  const response = await sportsDB.get('/all_sports.php');
  dispatch({ type: FETCH_SPORTS, payload: response.data.sports });
};

export const fetchAthlete = (name) => {
  return async (dispatch) => {
    try {
      const response = await sportsDB.get(`searchplayers.php?p=${name}`);
      if (response.data.player === null) {
        return;
      }
      dispatch({ type: FETCH_ATHLETE, payload: response.data.player });
    } catch (e) {
      console.log(e);
    }
  };
};

// ======== MODAL ========/
export const openModal = (id) => {
  return {
    type: OPEN_MODAL,
    payload: id,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
