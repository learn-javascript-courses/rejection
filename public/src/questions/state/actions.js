import axios from 'axios';
import cuid from 'cuid';
import { SubmissionError } from 'redux-form';

//Post list
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';

//Create new post
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE';
export const RESET_NEW_QUESTION = 'RESET_NEW_QUESTION';


//const ROOT_URL = location.href.indexOf("localhost") > 0 ? "https://sleepy-tor-25771.herokuapp.com/api":"/api";
const ROOT_URL = "https://sleepy-tor-25771.herokuapp.com/api";
//const ROOT_URL = 'http://localhost:5000/api';

export function fetchQuestions() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/questions`,
  });

  return {
    type: FETCH_QUESTIONS,
    payload: request
  };
}

export const fetchQuestionsSuccess = (questions) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions
})



export const fetchQuestionsFailure  = (error) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: error
})

export const createQuestion = ({ id = cuid(), questionString = 'default question', askee = 'Mr. Anonomyous', answer = false}, token) => {
  // console.log(props.answer)

  const request = axios({
    method: 'post',
    data: {
      id,
      questionString: questionString,
      answer,
      askee,
      answerWorth: answer === true ? 10 : 1,
      
    },
    url: `${ROOT_URL}/questions`,
    headers: {
      'Authorization': `${token}`,
    //  'Content-Type' : 'application/x-www-form-urlencoded'
    }
  });

  return {
    type: CREATE_QUESTION,
    payload: request
  };
}

export function createQuestionSuccess() {
  return {
    type: CREATE_QUESTION_SUCCESS
  };
}

export function createQuestionFailure(error) {
  return {
    type: CREATE_QUESTION_FAILURE,
    payload: error
  };
}

 export const fetchQuestionsActionCreator = dispatch => {
      return dispatch(fetchQuestions())
      .then((response) => {
          !response.error ? 
            dispatch(fetchQuestionsSuccess(response.payload.data)) 
          : 
            dispatch(fetchQuestionsFailure(response.payload.data));
      });
}

export const createQuestionActionCreator = (values, dispatch) => {
  let token = localStorage.getItem('token');
  return dispatch(createQuestion(values, token))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(createQuestionFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }
      console.log(result.payload);
      //let other components know that everything is fine by updating the redux` state
      dispatch(createQuestionSuccess());
    });
}


export function resetNewQuestion() {
  return {
    type: RESET_NEW_QUESTION
  }
}


