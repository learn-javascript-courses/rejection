import { handleActions } from 'redux-actions';
import * as Actions from '../constants/rejection';

const initialState = 0;
export default handleActions({

  [Actions.Rejected] : (state, { payload }) => points + 10,
  [Actions.Accepted] : (state, {payload}) => points + 1,

}, initialState);
