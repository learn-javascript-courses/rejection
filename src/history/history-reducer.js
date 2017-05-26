// constants
export const HISTORYACCEPTED = 'HISTORYACCEPTED';
export const HISTORYREJECTED = 'HISTORYREJECTED';
export const ADD_HISTORY = 'ADD_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const DELETE_FROM_HISTORY = 'DELETE_FROM_HISTORY';

// action creators
export const deleteFromHistory = payload => ({
  type: DELETE_FROM_HISTORY,
  payload
});
export const clearHistory = () => ({
  type: CLEAR_HISTORY
});
export const addToHistory = payload => ({
  type: ADD_HISTORY,
  payload
});
export const historyRejected = id => ({
  payload: id,
  type: HISTORYREJECTED
});
export const historyAccepted = id => ({
  payload: id,
  type: HISTORYACCEPTED
});

export const getHistory = state =>
  state.history.map(({ person, asked, id, result, time }) => ({ person, asked, id, result, time }));

// reducer
const initialState = [];
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_HISTORY:
      return [...state, payload];
    case CLEAR_HISTORY:
      return [];
    case DELETE_FROM_HISTORY:
      return state.filter(hist => hist.id !== payload);
    case HISTORYACCEPTED:
      return state.map(hist => (hist.id !== payload ? hist : { ...hist, result: 'ACCEPTED' }));
    case HISTORYREJECTED:
      return state.map(hist => (hist.id !== payload ? hist : { ...hist, result: 'REJECTED' }));
    default:
      return state;
  }
}
