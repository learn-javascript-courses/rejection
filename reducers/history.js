import { handleActions } from 'redux-actions';
import * as Actions from '../constants';

const initialState = [];

export default handleActions(
  {
    [Actions.ADD_HISTORY]: (state, { payload }) => {
      const historyItem = Object.assign(
        {},
        {
          asked: payload.asked,
          person: payload.person,
          time: payload.time,
          result: payload.result,
          id: state.reduce((maxId, curr) => Math.max(maxId, curr.id), -1) + 1
        }
      );
      return [historyItem, ...state];
    },
    [Actions.CLEAR_HISTORY]: (state, { payload }) => [],
    [Actions.DELETE_FROM_HISTORY]: (state, { payload }) => state.filter(hist => hist.id !== payload)
  },
  initialState
);
