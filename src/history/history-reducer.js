import * as Actions from '../constants';

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.ADD_HISTORY:
      return [...state, payload];
    case Actions.CLEAR_HISTORY:
      return [];
    case Actions.DELETE_FROM_HISTORY:
      return state.filter(hist => hist.id !== payload);
    default:
      return state;
  }
}
