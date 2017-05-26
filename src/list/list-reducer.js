import cuid from 'cuid';

// constants
const ADD = 'ADD';
const DELETE = 'DELETE';
const EDIT = 'EDIT';

// action creators
export const add = ({ asked = '', person = '', id = cuid() } = {}) => ({
  type: ADD,
  payload: {
    asked,
    person,
    id
  }
});

export const edit = id => ({
  type: EDIT,
  payload: id
});
export const deleteAsk = id => ({
  type: DELETE,
  payload: id
});

// selector
export const getList = state => state.list.map(({ person, asked, id }) => ({ person, asked, id }));

// reducer
const initialState = [];
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state.filter(asks => payload !== asks.id);
    default:
      return state;
  }
}
