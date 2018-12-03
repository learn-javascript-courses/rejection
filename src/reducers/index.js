import { combineReducers } from 'redux';
import history from './history';

// simple reducers, adding here for now
export const user = (state = { user: {} }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...action.user };
    case 'USER_LOGOUT':
      return { user: {} };
    default:
      return state;
  }
};

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

export const appLoading = (state = true, action) => {
  switch (action.type) {
    case 'STOP_APP_LOADING':
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  history,
  updating,
  user,
  appLoading,
});
