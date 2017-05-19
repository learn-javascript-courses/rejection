import * as Actions from '../constants/index';

const initialState = 0;
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.REJECTED:
      return state + 10;
    case Actions.ACCEPTED:
      return state + 1;
    case Actions.CLEAR_SCORE:
      return 0;
    default:
      return state;
  }
}
