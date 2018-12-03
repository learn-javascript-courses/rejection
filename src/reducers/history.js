import {
  FETCH_HISTORY_BEGIN,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
  ADD_HISTORY_BEGIN,
  ADD_HISTORY_SUCCESS,
  ADD_HISTORY_FAILURE,
  UPDATE_HISTORY_BEGIN,
  UPDATE_HISTORY_SUCCESS,
  UPDATE_HISTORY_FAILURE,
  DELETE_HISTORY_BEGIN,
  DELETE_HISTORY_SUCCESS,
  DELETE_HISTORY_FAILURE,
} from '../actions';

export const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const history = (state = initialState, action) => {
  switch (action.type) {
    // reuse these since they share the same logic
    case FETCH_HISTORY_BEGIN:
    case ADD_HISTORY_BEGIN:
    case UPDATE_HISTORY_BEGIN:
    case DELETE_HISTORY_BEGIN:
      // state as "loading", reset any errors
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HISTORY_SUCCESS:
      // All done, loading "false", replace the items with api response
      return {
        ...state,
        loading: false,
        data: action.payload.history,
      };

    case FETCH_HISTORY_FAILURE:
      // request failed, loading to "false", display error
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };

    case ADD_HISTORY_SUCCESS:
      // add new history to current history
      return {
        loading: false,
        error: null,
        data: [action.payload.history, ...state.data],
      };

    case ADD_HISTORY_FAILURE:
    case UPDATE_HISTORY_FAILURE:
    case DELETE_HISTORY_FAILURE:
      // add/update/delete fail
      return {
        loading: false,
        error: action.payload.error,
        ...state,
      };

    case UPDATE_HISTORY_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.map(
          q => (q.id === action.payload.history.id
            ? {
              status: action.payload.history.status,
              id: action.payload.history.id,
              timestamp: action.payload.history.timestamp,
              question: action.payload.history.question,
              askee: action.payload.history.askee,
            }
            : q),
        ),
      };

    case DELETE_HISTORY_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.filter(q => q.id !== action.payload.id),
      };

    case 'USER_LOGOUT':
      return initialState;

    default:
      return state;
  }
};

export default history;
