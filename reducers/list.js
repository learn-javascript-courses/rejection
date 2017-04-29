import { handleActions } from 'redux-actions';
import * as Actions from '../constants/';

const initialState = [];

export default handleActions({
  [Actions.ADD] : (state, { payload }) => {
    const request = Object.assign(payload, {filter: 'none'});
    return [...state, request]
  },
  [Actions.DELETE]: (state, { payload}) => {
    console.log('here', state);
    return state.filter(asks => asks !== payload)
  }


}, initialState);
