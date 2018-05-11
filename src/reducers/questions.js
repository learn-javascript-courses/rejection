const UNANSWERED = 0;
const ADD_QUESTION = 'reducers/addQuestion';
const REMOVE_QUESTION = 'reducers/removeQuestion';

const time = () => {
  const date = new Date();
  const fullDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const hour = (date.getHours() < 12 ? date.getHours() : date.getHours() - 12);
  const minutes = (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());
  const am = date.getHours() < 12 ? ' a.m.' : ' p.m.';
  const dateStamp = `${fullDate} ${hour}:${minutes}${am}`;
  return dateStamp;
};

const initialState = [];

export const addQuestion = ({
  id = Math.random().toString(36).substr(2, 9),
  person = 'anonymous',
  question = 'no question',
  score = UNANSWERED,
  response = 'UNANSWERED',
  timestamp = time(),
} = {}) => ({
  type: ADD_QUESTION,
  payload: {
    id,
    person,
    question,
    score,
    response,
    timestamp,
  },
});

export const removeQuestion = ({
  id = 0,
} = {}) => ({
  type: REMOVE_QUESTION,
  payload: id,
});

export const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_QUESTION: return [...state, payload];
    case REMOVE_QUESTION: return state.filter(obj => obj.id !== payload);
    default: return state;
  }
};
