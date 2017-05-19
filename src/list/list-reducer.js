import * as Actions from '../constants/';

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.ADD:
      return [...state, payload];
    case Actions.DELETE:
      return state.filter(asks => payload !== asks.id);
    default:
      return state;
  }
}
