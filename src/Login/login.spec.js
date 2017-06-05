import test from 'tape';
import LoginReducer, * as login from './loginReducer';

test('Should test the Login Case', nest => {
  nest.test('Should test the loginSelector', t => {
    const state = {
      list: {},
      points: 0,
      login: {
        isFetching: false,
        isLoggedIn: false
      }
    };
    const expected = {
      isFetching: false,
      isLoggedIn: false
    };
    const actual = login.loginSelector(state);

    t.same(actual, expected, 'should slice off the correct piece of state');
    t.end();
  });
  nest.test('Should test the isFetchingLogin action creator', t => {
    const expected = {
      type: 'IS_FETCHING_LOGIN'
    };
    const actual = login.isFetchingLogin();
    t.same(actual, expected, 'should create the action creator');
    t.end();
  });
  nest.test('Should test the loginSuccess action creator', t => {
    const expected = {
      type: 'LOGIN_SUCCESS',
      uid: 1
    };
    const actual = login.loginSuccess(1);

    t.same(actual, expected, 'should create login success creator');
    t.end();
  });
  nest.test('Should test the loginFailed action creator', t => {
    const expected = {
      type: 'LOGIN_FAILED',
      error: 'Error'
    };
    const actual = login.loginFailed('Error');

    t.same(actual, expected, 'Should test the failed login creator');
    t.end();
  });
  nest.test('Should test the IS FETCHING LOGIN CASE', t => {
    const expected = {
      isFetching: true,
      isLoggedIn: false
    };
    const state = {
      isFetching: false,
      isLoggedIn: false
    };
    const action = login.isFetchingLogin();
    const actual = LoginReducer(state, action);
    t.same(actual, expected, 'should return back correct state');
    t.end();
  });
  nest.test('Should test the LOGIN succeeded case', t => {
    const state = {
      isFetching: false,
      isLoggedIn: false
    };
    const action = login.loginSuccess(1);
    const expected = {
      isFetching: false,
      isLoggedIn: true,
      uid: 1
    };
    const actual = LoginReducer(state, action);

    t.same(actual, expected, 'should update state on successful login');
    t.end();
  });
  nest.test('Should test the login on failed case', t => {
    const state = {
      isFetching: false,
      isLoggedIn: false
    };
    const action = login.loginFailed('error');
    const actual = LoginReducer(state, action);
    const expected = {
      isFetching: false,
      isLoggedIn: false,
      error: 'error'
    };

    t.same(actual, expected, 'should test the login failed case');
    t.end();
  });
});
