import { combineReducers } from 'redux'
import {
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  RESET_QUESTIONS,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  RESET_NEW_QUESTION,
} from './actions';

const defaultState = {
  questionsList: {
    questions: [],
    error: null,
    loading: true,
  },
  newQuestion: {
    question: null,
    error: null,
    loading: false
  },
};

export const newQuestionReducer = (state = defaultState.newQuestion, action = {}) => {
  let error;
  const { payload, type } = action;
  switch (type) {
    case CREATE_QUESTION:
      return { 
          ...state.newQuestion,
        question: {
          _id: payload.data._id,
          questionString: payload.data.questionString,
          askee: payload.data.askee,
          answer: payload.data.answer,
          _createdBy: payload.data._createdBy
        },
        error: null,
        loading: true
      }
    case CREATE_QUESTION_SUCCESS:
      return {
          ...state.newQuestion,
          question: null,
          error: null,
          loading: false
      }
    case CREATE_QUESTION_FAILURE:
      error = payload; //2nd one is network or server down errors
      return {
          ...state.newQuestion,
          question: null,
          error: error,
          loading: false
      }
    case RESET_NEW_QUESTION:
      return {
          ...state.newQuestion,
          question: null,
          error: null,
          loading: false
      }
    default: return state
  }
}

export const questionsList = (state = defaultState.questionsList, action = {}) => {
  let error;
  const { payload, type } = action;
  switch (type) {
    case FETCH_QUESTIONS: // start fetching posts and set loading = true
      return {
        ...state.questionsList,
          questions: [],
          error: null,
          loading: true
      };
    case FETCH_QUESTIONS_SUCCESS: // return list of posts and make loading = false
      return {
        ...state.questionsList,
          questions: payload,
          error: null,
          loading: false
      };
    case FETCH_QUESTIONS_FAILURE: // return error and make loading = false
      error = payload; //2nd one is network or server down errors
      return {
        ...state,
          questions: [],
          error: error,
          loading: false
      };
    case RESET_QUESTIONS: // reset postList to initial state
      return {
        ...state,
          questions: [],
          error: null,
          loading: false
      };
    default:
      return state;
  }
}
const questionsReducer = combineReducers({
  newQuestion: newQuestionReducer, 
  questionsList,
  
})
export default questionsReducer;