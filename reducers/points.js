import { handleActions } from 'redux-actions';
import * as Actions from '../constants/index';

const initialState = 0;
export default handleActions(
  {
    [Actions.REJECTED]: (state, { payload }) => {
      const total = state + 10;
      return total;
    },
    [Actions.ACCEPTED]: (state, { payload }) => {
      const total = state + 1;
      return total;
    },
    [Actions.CLEAR_SCORE]: (state, { payload }) => 0
  },
  initialState
);
