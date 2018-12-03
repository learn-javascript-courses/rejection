import { API_URL } from '../config';

// ==== utils ===
// https://gist.github.com/jed/982883 :)
const uuid = a => (a // eslint-disable-next-line no-bitwise
  ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid));

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// load history via APi
export const FETCH_HISTORY_BEGIN = 'FETCH_HISTORY_BEGIN';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

export const fetchHistoryBegin = () => ({
  type: FETCH_HISTORY_BEGIN,
});

export const fetchHistorySuccess = history => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: { history },
});

export const fetchHistoryFailure = error => ({
  type: FETCH_HISTORY_FAILURE,
  payload: { error },
});

// Get history API Call
function getHistoryAPI(token) {
  return fetch(`${API_URL}/api/history`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchHistory(token) {
  return (dispatch) => {
    dispatch(fetchHistoryBegin());
    return getHistoryAPI(token)
      .then((json) => {
        dispatch(fetchHistorySuccess(json.history));
        return json.history;
      })
      .catch(error => dispatch(fetchHistoryFailure(error)));
  };
}

// Add history row
export const ADD_HISTORY_BEGIN = 'ADD_HISTORY_BEGIN';
export const ADD_HISTORY_SUCCESS = 'ADD_HISTORY_SUCCESS';
export const ADD_HISTORY_FAILURE = 'ADD_HISTORY_FAILURE';

export const addHistoryBegin = () => ({
  type: ADD_HISTORY_BEGIN,
});

export const addHistorySuccess = history => ({
  type: ADD_HISTORY_SUCCESS,
  payload: { history },
});

export const addHistoryFailure = error => ({
  type: ADD_HISTORY_FAILURE,
  payload: { error },
});

// Get history API Call
function addHistoryAPI(token, history) {
  return fetch(`${API_URL}/api/history`, {
    method: 'post',
    body: JSON.stringify({ ...history, id: uuid() }),
    headers: {
      authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(handleErrors)
    .then(res => res.json());
}

export function addHistory(token, history) {
  return (dispatch) => {
    dispatch(addHistoryBegin());
    return addHistoryAPI(token, history)
      .then((json) => {
        dispatch(addHistorySuccess(json.history));
        return json.history;
      })
      .catch(error => dispatch(addHistoryFailure(error)));
  };
}

// Update history
export const UPDATE_HISTORY_BEGIN = 'UPDATE_HISTORY_BEGIN';
export const UPDATE_HISTORY_SUCCESS = 'UPDATE_HISTORY_SUCCESS';
export const UPDATE_HISTORY_FAILURE = 'UPDATE_HISTORY_FAILURE';

export const updateHistoryBegin = () => ({
  type: UPDATE_HISTORY_BEGIN,
});

export const updateHistorySuccess = history => ({
  type: UPDATE_HISTORY_SUCCESS,
  payload: { history },
});

export const updateHistoryFailure = error => ({
  type: UPDATE_HISTORY_FAILURE,
  payload: { error },
});

// Update history API Call
function updateHistoryAPI(token, history) {
  return fetch(`${API_URL}/api/history`, {
    method: 'put',
    body: JSON.stringify({ ...history }),
    headers: {
      authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(handleErrors)
    .then(res => res.json());
}

export function updateHistory(token, history) {
  return (dispatch) => {
    dispatch(updateHistoryBegin());
    return updateHistoryAPI(token, history)
      .then((json) => {
        dispatch(updateHistorySuccess(json.history));
        return json.history;
      })
      .catch(error => dispatch(updateHistoryFailure(error)));
  };
}

// delete history
export const DELETE_HISTORY_BEGIN = 'DELETE_HISTORY_BEGIN';
export const DELETE_HISTORY_SUCCESS = 'DELETE_HISTORY_SUCCESS';
export const DELETE_HISTORY_FAILURE = 'DELETE_HISTORY_FAILURE';

export const deleteHistoryBegin = () => ({
  type: DELETE_HISTORY_BEGIN,
});

export const deleteHistorySuccess = id => ({
  type: DELETE_HISTORY_SUCCESS,
  payload: { id },
});

export const deleteHistoryFailure = error => ({
  type: DELETE_HISTORY_FAILURE,
  payload: { error },
});

// Delete history API Call
function deleteHistoryAPI(token, id) {
  return fetch(`${API_URL}/api/history?id=${id}`, {
    method: 'delete',
    headers: {
      authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(handleErrors)
    .then(res => res.json());
}

export function deleteHistory(token, id) {
  return (dispatch) => {
    dispatch(deleteHistoryBegin());
    return deleteHistoryAPI(token, id)
      .then(() => {
        dispatch(deleteHistorySuccess(id));
        return id;
      })
      .catch(error => dispatch(deleteHistoryFailure(error)));
  };
}
// User
export const setUserAction = values => ({
  type: 'SET_USER',
  user: values,
});

// Logout
export const logoutUserAction = () => ({
  type: 'USER_LOGOUT',
});

export function logoutUser() {
  return (dispatch) => {
    window.localStorage.setItem('user', {});
    dispatch(logoutUserAction());
  };
}
