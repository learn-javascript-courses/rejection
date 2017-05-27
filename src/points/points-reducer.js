// constants
export const REJECTED = 'REJECTED';
export const ACCEPTED = 'ACCEPTED';
const CLEAR_SCORE = 'CLEAR_SCORE';

// action creators
export const rejected = () => ({
  type: REJECTED
});
export const accepted = () => ({
  type: ACCEPTED
});
export const clearScore = () => ({
  type: CLEAR_SCORE
});

// reducer
const initialState = 0;
export default function (state = initialState, action) {
  switch (action.type) {
    case REJECTED:
      return state + 10;
    case ACCEPTED:
      return state + 1;
    case CLEAR_SCORE:
      return 0;
    default:
      return state;
  }
}
