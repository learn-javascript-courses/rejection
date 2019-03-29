import React, { useEffect, useReducer, useRef } from 'react';

import rejection, { createQuestion, answerQuestion, deleteQuestion, getScore } from '../src/features/rejection/rejection-reducer';
import Score from '../src/features/rejection/score/score-component';
import AddQuestion from '../src/features/rejection/add-question/add-question-component';
import QuestionList from '../src/features/rejection/question-list/question-list-component';

import { loadState, saveState } from '../src/localStorage';

function App() {
  const [questions, dispatch] = useReducer(rejection, rejection(loadState()));
  const questionRef = useRef();
  const askeeRef = useRef();

  useEffect(() => saveState(questions), [questions]);

  const handleAcceptedClick = event => {
    dispatch(
      createQuestion({
        'question': questionRef.current.value,
        askee: askeeRef.current.value,
        status: 'Accepted'
      })
    );
  };

  const handleRejectedClick = event => {
    dispatch(
      createQuestion({
        'question': questionRef.current.value,
        askee: askeeRef.current.value,
        status: 'Rejected'
      })
    );
  };

  const handleUnansweredClick = event => {
    dispatch(
      createQuestion({
        'question': questionRef.current.value,
        askee: askeeRef.current.value,
        status: 'Unanswered'
      })
    );
  };

  const handleToggleQuestionStatusClick = (id, status, event) => {
    dispatch(
     answerQuestion({
       id,
       status: (status === 'Accepted' ? 'Rejected' : status === 'Rejected' ? 'Unanswered' : 'Accepted' )
     })
    );
  };

  const handleDeleteQuestionClick = (id, event) => {
    dispatch(
     deleteQuestion({
       id
     })
    );
  };

  return (
    <div>
      <Score score={getScore(questions)} />
      <AddQuestion
        questionRef={questionRef}
        askeeRef={askeeRef}
        handleAcceptedClick={handleAcceptedClick}
        handleRejectedClick={handleRejectedClick}
        handleUnansweredClick={handleUnansweredClick} />
      <QuestionList
        questions={questions}
        handleToggleQuestionStatusClick={handleToggleQuestionStatusClick}
        handleDeleteQuestionClick={handleDeleteQuestionClick} />
      <style global jsx>{`
        .add-question {
          display: flex;
          flex-flow: column wrap;
          align-items: flex-center;
          max-width: 20em;
        }
        .add-question button {
          align-self: center;
          flex: 0 0 2em;
          margin: .5em 0;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
        dt {
          font-weight: bold;
        }
        button {
          max-width: 15em;
        }
        ul {
          list-style-type: none;
          display: flex;
          flex-flow: row wrap;
        }
        ul li {
          border-radius: 1em;
          box-shadow: 0 0 .5em .5em rgba(0, 0, 0, 0.5);
          margin: 1em 2em;
          padding: 1em;
        }
        li.question button {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default App;
