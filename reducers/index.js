import { combineReducers } from 'redux';
import points from './points';
import list from './list';

export default combineReducers({
  list,
  points
});
