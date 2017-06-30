import { newQuestionReducer, questionsList, question } from './reducer';
import test from 'tape';
import cuid from 'cuid';
import {
	FETCH_POSTS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, RESET_POSTS,
	CREATE_QUESTION, CREATE_QUESTION_SUCCESS, CREATE_QUESTION_FAILURE, RESET_NEW_QUESTION, 
  INITIAL_STATE
} from './actions';
import * as Actions from './actions';

const defaultState = {
  questionsList: {
    questions: [],
    error: null,
    loading: true
  },
  newQuestion: {
    question: null,
    error: null,
    loading: false
  }
};

// Replicate the reduce
const getExpectedNewQuestion = (props = {}) => Object.assign({}, defaultState.newQuestion, props);
const getExpectedQuestionsList = (props = {}) => Object.assign({}, defaultState.questionsList, props);


 const questions = [
      {
        _id: 1,
        questionString: 'Your age is old?',
        answer: false,
        _createdBy: "tg@hotmail.com"
      },
       {
        _id: 2,
        questionString: 'Can I change your hair color?',
        answer: false,
        _createdBy: "tg@hotmail.com"
      },
       {
        _id: 3,
        questionString: 'Can I ride your bike?',
        answer: false,
        _createdBy: "tg@hotmail.com"
      }
];

export default () => {
   test('fetchQuestionsSuccess() action creator given the questions object', assert => {
    const msg = 'should return an action FETCH_QUESTIONS_SUCCESS and questions in payload';
    assert.plan(1)
    const payload = questions;
    const actual = Actions.fetchQuestionsSuccess(payload);
    const expected = {
      type: FETCH_QUESTIONS_SUCCESS,
      payload: questions
    }
    assert.same(actual, expected, msg);
    assert.end();
  })
  test('fetchQuestionsFailure() action creator', assert => {
    const msg = 'should return an action with type : FETCH_QUESTIONS_FAILURE and payload : error';
    assert.plan(1)
    const error = 'Some error occured!';
    const actual = Actions.fetchQuestionsFailure(error);
    const expected = {
      type: FETCH_QUESTIONS_FAILURE,
      payload: error
    }
    assert.same(actual, expected, msg);
    assert.end();
  })
  test('questionsListReducer() with no args', assert => {
    const msg = 'should return a valid initial state';
    const initialState = questionsList();

    const actual = questionsList(initialState);

    const expected = getExpectedQuestionsList();
    assert.same(actual, expected, msg);
    assert.end();
  })
   test('questionsListReducer()::FETCH_QUESTIONS_SUCCESS', assert => {
    const msg = 'should succesfully load any pre-existing objects in questions : []';
    const initialState = questionsList();
    const action = {
      type: FETCH_QUESTIONS_SUCCESS,
      payload: questions
    }

    const actual = questionsList(initialState, action);

    const expected = getExpectedQuestionsList({questions, error: null,loading: false});
    assert.same(actual, expected, msg);
    assert.end();
  })
  test('questionsListReducer()::FETCH_QUESTIONS_FAILURE', assert => {
    const msg = 'should return an object with container { payload: error }';
    const initialState = questionsList();
    let error = 'An error occured.'
    const action = {
      type: FETCH_QUESTIONS_FAILURE,
      payload: error
    }

    const actual = questionsList(initialState, action);

    const expected = getExpectedQuestionsList({questions:[], error: error,loading: false});
    assert.same(actual, expected, msg);
    assert.end();
  })
  test('newQuestions() reducer with no args', assert => {
    const msg = 'should return valid initial state';

    // Define prexisting conditions
    const actual = newQuestionReducer();
    // Define actual and expected values for the test
    const expected = getExpectedNewQuestion(defaultState.newQuestion);

    // Compare actual vs expected and conclude the test
    assert.same(actual, expected, msg);
    assert.end();
  });
  test('newQuestions()::CREATE_QUESTION_FAILURE', assert => {
    const msg = 'should return a payload containing an error';
    const initialState = newQuestionReducer();
    const error = 'errr';
    const action = {
      type: CREATE_QUESTION_FAILURE,
      payload: error
    }
    // Define prexisting conditions
    const actual = newQuestionReducer(initialState, action);

    // Define actual and expected values for the test
    const expected = getExpectedNewQuestion({error: error});
    // Compare actual vs expected and conclude the test
    assert.same(actual, expected, msg);
    assert.end();
  });
  test('question()::CREATE_QUESTION given a {newQuestion} object', assert => {
    const msg = 'should should update the newQuestion.question with { id, questionString, askee, answer, _createdBy, } = question';
    const initialState = newQuestionReducer({defaultState});
    const newQuestion = {
      data : {
      _id: 1,
      questionString: 'Can I pet your dog?',
      answer: false,
      askee: 'Stranger',
      _createdBy: "tiller@hotmail.com"
     } 
    }
    const action = {
      type: CREATE_QUESTION,
      payload: newQuestion
    }
    // Define prexisting conditions
    const actual = newQuestionReducer(initialState, action);

    // Define actual and expected values for the test
    const expected = getExpectedNewQuestion({question: newQuestion.data, loading: true});

    // Compare actual vs expected and conclude the test
    assert.same(actual, expected, msg);
    assert.end();
  });
};
