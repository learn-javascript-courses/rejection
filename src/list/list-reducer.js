import cuid from 'cuid';

// constants
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const ANSWER_ASK = 'ANSWER_ASK';
export const FETCH_DATA = 'FETCH_DATA';
export const LOAD_DATA = 'LOAD_DATA';
export const ERROR = 'ERROR';

// action creators
export const loadAsks = asks => ({
  type: LOAD_DATA,
  asks
});

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
export const createError = error => ({
  type: ERROR,
  error
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
  const unAnsweredAsks = Object.keys(list).filter(
    item => list[item].result !== undefined && list[item].deleted !== true
  );
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

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, [action.payload.id]: action.payload };
    case ANSWER_ASK:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          result: action.result
        }
      };
    case DELETE: {
      const newState = { ...state };
      newState[action.id].deleted = true;
      return newState;
    }
    case LOAD_DATA: {
      const newState = { ...state };
      for (let i = 0; i < action.asks.length; i += 1) {
        newState[action.asks[i].id] = action.asks[i];
      }
      return newState;
    }
    case ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
