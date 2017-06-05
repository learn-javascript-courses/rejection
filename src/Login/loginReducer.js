// constants
const IS_FETCHING_LOGIN = 'IS_FETCHING_LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const FETCH_DATA = 'FETCH_DATA';
const SAVE_PROFILE = 'SAVE_PROFILE';
const START_LOGIN = 'START_LOGIN';
const START_SIGNOUT = 'START_SIGNOUT';
const SIGN_OUT = 'SIGN_OUT';
const SIGN_OUT_FAILED = 'SIGN_OUT_FAILED';

// action creators
export const saveProfile = data => ({
  type: SAVE_PROFILE,
  data
});
export const fetchData = uid => ({
  type: FETCH_DATA,
  uid
});
export const isFetchingLogin = () => ({
  type: IS_FETCHING_LOGIN
});
export const loginSuccess = uid => ({
  type: LOGIN_SUCCESS,
  uid
});
export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error
});
export const startLogin = () => ({
  type: START_LOGIN
});
export const startSignOut = () => ({
  type: START_SIGNOUT
});
export const signOut = () => ({
  type: SIGN_OUT
});
export const signOutFailed = error => ({
  type: SIGN_OUT_FAILED,
  error
});

// selector
export const loginSelector = ({ login: { isFetching = false, isLoggedIn = false } } = {}) => ({
  isFetching,
  isLoggedIn
});

// reducer
const initialState = {
  isFetching: false,
  isLoggedIn: false
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING_LOGIN:
      return {
        isFetching: true,
        isLoggedIn: false
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        isFetching: false,
        uid: action.uid
      };
    case LOGIN_FAILED:
      return {
        isLoggedIn: false,
        isFetching: false,
        error: action.error
      };
    case START_SIGNOUT:
      return {
        ...state,
        isFetching: true
      };
    case SIGN_OUT:
      return {
        ...state,
        isFetching: false,
        uid: '',
        isLoggedIn: false
      };
    case SIGN_OUT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        isLoggedIn: true
      };
    default:
      return state;
  }
}
