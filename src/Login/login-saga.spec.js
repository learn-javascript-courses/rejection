import cuid from 'cuid';
import test from 'tape';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as login from './login.saga';
import { facebookSignIn, facebookSignOut } from '../lib/facebook';
import * as actions from './loginReducer';

test('Should test the list sagas', nest => {
  nest.test('Should test the facebookLogin saga', t => {
    const action = actions.isFetchingLogin();
    const expected = put(actions.isFetchingLogin());
    const gen = login.callFacebookLogin(action);
    const actual = gen.next().value;

    t.same(actual, expected, 'should be deeply equal');
    t.same(gen.next().value, call(facebookSignIn));
    t.end();
  });
});
