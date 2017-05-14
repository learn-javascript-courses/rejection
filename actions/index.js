import cuid from 'cuid';
import * as Constants from '../constants';

export const add = (
  asked = '',
  person = '',
  time = Date.now(),
  result = undefined,
  id = cuid()
) => ({
  type: Constants.ADD,
  payload: {
    asked,
    person,
    time,
    result,
    id
  }
});

export const rejected = () => ({
  type: Constants.REJECTED
});
export const accepted = () => ({
  type: Constants.ACCEPTED
});
export const edit = payload => ({
  type: Constants.EDIT,
  payload
});
export const deleteAsk = payload => ({
  type: Constants.DELETE,
  payload
});
export const deleteFromHistory = payload => ({
  type: Constants.DELETE_FROM_HISTORY,
  payload
});
export const clearHistory = () => ({
  type: Constants.CLEAR_HISTORY
});
export const addToHistory = payload => ({
  type: Constants.ADD_HISTORY,
  payload
});
export const clearScore = () => ({
  type: Constants.CLEAR_SCORE
});
