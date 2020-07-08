import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sportsReducer from './sportsReducer';
import athleteReducer from './athleteReducer';
import modalReducer from './modalReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  sports: sportsReducer,
  athlete: athleteReducer,
  form: formReducer,
  modal: modalReducer,
});
