import { createAsk } from './actions';
// Eric Elliott cuid lib

export const defaultState = {
  byId: {
    // 1: { id: 1 },
    // 2: { id: 2 },
  },
};

export const asksReducer = (state = defaultState, action = { type: '' }) => {
  console.log(`action: ${JSON.stringify(action, null, 2)}`);
  const { type, payload } = action;

  switch (type) {
    case createAsk().type:
      return {
        ...state,
        byId: { ...state.byId, 1: { id: 1, ...payload } },
      };

    default:
      return state;
  }
};
