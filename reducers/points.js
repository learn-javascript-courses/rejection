import { handleActions } from 'redux-actions';
import * as Actions from '../constants/rejection';

const initialState = 0;
export default handleActions({

  [Actions.REJECTED] : (state, { payload }) => {
    console.log(state)
    const total = state + 10;
    return total;
  },
  [Actions.ACCEPTED] : (state, {payload}) => {
    const total = state + 1;
    return total
  }

}, initialState);
