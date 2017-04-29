import { handleActions } from 'redux-actions';
import * as Actions from '../constants/rejection';

const initialState = [];

export default handleActions({
  [Actions.ADD] : (state, { payload }) => [...state, ...payload],

  [Actions.deleteAsk] : (state, { payload}) => state.filter(asks => asks.id !== payload ),

}, initialState);
