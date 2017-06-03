import cuid from 'cuid';

// constants
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const ANSWER_ASK = 'ANSWER_ASK';
export const FETCH_DATA = 'FETCH_DATA';

// action creators
export const addAsk = (
  { asked = '', person = '', result = undefined, id = cuid(), uid = 1 } = {}
) => ({
  type: ADD,
  payload: {
    asked,
    person,
    id,
    result,
    uid
  }
});
export const deleteAsk = (id, uid) => ({
  type: DELETE,
  id,
  uid
});
export const answerAsk = ({ id, result = undefined, uid } = {}) => ({
  id,
  result,
  type: 'ANSWER_ASK',
  uid
});
export const fetchData = uid => ({
  type: FETCH_DATA,
  uid
});

// selector
export const getList = ({ list }) => {
  const unAnsweredAsks = Object.keys(list).filter(item => list[item].result === undefined);
  const listSelector = {};
  unAnsweredAsks.forEach(id => (listSelector[id] = list[id]));
  return listSelector;
};
export const getHistory = ({ list }) => {
  const unAnsweredAsks = Object.keys(list).filter(item => list[item].result !== undefined);
  const historySelector = {};
  unAnsweredAsks.forEach(id => (historySelector[id] = list[id]));
  return historySelector;
};
export const getPoints = ({ list }) =>
  Object.keys(list).reduce(
    (score, id) =>
      list[id].result === 'REJECTED'
        ? score + 10
        : list[id].result === 'ACCEPTED' ? score + 1 : score,
    0
  );
export const getUID = ({ login }) => login.uid;
// reducer
const initialState = {};
export default function (state = initialState, { type, payload, id, result }) {
  switch (type) {
    case ADD:
      return { ...state, [payload.id]: payload };
    case ANSWER_ASK: {
      return { ...state, [id]: { ...state[id], result } };
    }
    case DELETE: {
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    case FETCH_DATA:
    default:
      return state;
  }
}
