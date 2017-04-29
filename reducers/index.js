import { combineReducers } from 'redux';
import points from './points';
import list from './list';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  list,
  points,
  form: formReducer
});
