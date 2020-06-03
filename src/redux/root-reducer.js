import { combineReducers } from 'redux';
import recepiesReducer from './recepies/recepie.reducer';

export default combineReducers({
  recepies: recepiesReducer,
});
