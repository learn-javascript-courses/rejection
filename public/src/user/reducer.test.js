import test from 'tape';
import userReducer from './reducer';
const defaultState = {
  user: null, 
  isAuthenticated:'no', 
  error:null, 
  loading: false
}

import {
  ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
	SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
	SIGNIN_USER, SIGNIN_USER_SUCCESS,  SIGNIN_USER_FAILURE,
	LOGOUT_USER
} from './actions';
const initialState = userReducer();

const mockQuestions = [{
  id: 1,
  questionString: 'Do you want to play tennis?',
  answer: true,
  _createdBy: 'tg@hotmail.com',
},
{
  id: 2,
  questionString: 'Do you want to play baseball?',
  answer: false,
  _createdBy: 'tg@hotmail.com',
  askee: 'Bossman',
}]

const getExpectedState = (props = {}) => Object.assign({}, defaultState, props);

export default () => {
  test('User reducer with default args', assert => {
    const msg = `should return the default state & be unauthenticated.`
    const actual = userReducer();
    const expected = getExpectedState();
    assert.same(actual, expected, msg);
    assert.end();
  });
  test('userReducer with action ME_FROM_TOKEN', assert => {
    const msg = `should set the loading state to true.`
    
    const action = {
      type: ME_FROM_TOKEN
    }

    const actual = userReducer(initialState, action);
    const expected = getExpectedState({loading: true});
    assert.same(actual, expected, msg);
    assert.end();
  });
  test('User reducer with ME_FROM_TOKEN_SUCCESS', assert => {
    const msg = `should changed user's authenticated state, set the users profile data, and set loading to false.`
    
    const action = {
      type: ME_FROM_TOKEN_SUCCESS,
      payload: { 
        email: 'user@user.com', 
        firstName: 'John', 
        lastName: 'Doe', 
        questions: mockQuestions.map(q => q.id)
      }
    }

    const actual = userReducer(initialState, action);
    const expected = getExpectedState({user: action.payload, isAuthenticated: 'yes'});
    assert.same(actual, expected, msg);
    assert.end();
  });
  test('User reducer with ME_FROM_TOKEN_FAILURE', assert => {
    const msg = `should update userState object with the error message.`
    const error =  {message:'Request failed with …code 401'}
    const action = {
      type: ME_FROM_TOKEN_FAILURE,
      payload: error
    };

    const actual = userReducer(initialState, action);
    const expected = getExpectedState({error: error});
    assert.same(actual, expected, msg);
    assert.end();
  });
}

