import { combineReducers } from 'redux';
import history from './history';

// so simple, just adding here for now
export const updating = (state = { isUpdating: false }, action) => {
  switch (action.type) {
    case 'START_UPDATING':
      return { isUpdating: true, ...action.q };
    case 'STOP_UPDATING':
      return { isUpdating: false };
    default:
      return state;
  }
};

export default combineReducers({
  history,
  updating,
});
