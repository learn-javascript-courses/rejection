import { handleActions } from 'redux-actions';
import * as Actions from '../constants/';
const initialState = [];

export default handleActions({
  [Actions.ADD]: (state, { payload }) => {
    const request = Object.assign(payload, {
      filter: 'none',
      id: state.reduce((maxId, ask) => Math.max(ask.id, maxId), -1) + 1
    });
    return [...state, request];
  },
  [Actions.DELETE]: (state, { payload }) => state.filter(asks => state[payload].id !== asks.id)

}, initialState);

