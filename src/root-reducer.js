import { combineReducers } from 'redux';

import { reducer as Questions } from './reducers/questions';

export default combineReducers({
  Questions,
});
