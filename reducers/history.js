import { handleActions } from 'redux-actions';
import * as Actions from '../constants';
const initialState = [];

export default handleActions({
  [Actions.ADD_HISTORY]: (state, { payload }) => {
    const historyItem = Object.assign({}, {
      asked: payload.value.asked,
      person: payload.value.person,
      time: payload.time,
      result: payload.answer().type,
      id: state.reduce((maxId, curr) => Math.max(maxId, curr.id), -1) + 1
    });
    return [historyItem, ...state];
  },
  [Actions.CLEAR_HISTORY]: (state, { payload }) => [],
  [Actions.DELETE_FROM_HISTORY]: (state, { payload }) => state.filter((hist) => hist.id !== payload)
}, initialState);

