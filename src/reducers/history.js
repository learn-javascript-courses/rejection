export const history = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        {
          status: action.status,
          id: action.id,
          timestamp: action.timestamp,
          question: action.question,
          askee: action.askee,
        },
        ...state,
      ];
    case 'UPDATE_QUESTION':
      return state.map(
        q => (q.id === action.id
          ? {
            status: action.status,
            id: action.id,
            timestamp: action.timestamp,
            question: action.question,
            askee: action.askee,
          }
          : q),
      );
    case 'DELETE_QUESTION':
      return state.filter(q => q.id !== action.id);
    default:
      return state;
  }
};

export default history;
