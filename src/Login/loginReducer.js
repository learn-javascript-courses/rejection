// constants
const IS_FETCHING_LOGIN = 'IS_FETCHING_LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// action creators
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
  type: 'START_LOGIN'
});
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
    default:
      return state;
  }
}
