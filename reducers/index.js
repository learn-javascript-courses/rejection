import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import points from './points';
import list from './list';
import history from './history';

export default combineReducers({
  list,
  points,
  history,
  form: formReducer
});
