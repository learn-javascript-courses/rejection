import React, { useState, useReducer, useEffect, Fragment } from 'react';

import AddQuestion from './add-question/add-question';
import PendingQuestion from './pending-question/pending-question';
import ResolvedQuestion from './resolved-question/resolved-question';
import Score from './score/score';
import {
  reducer,
  addQuestion,
  updateQuestion,
  getResolved,
  getPending,
  getScore,
} from './rejection-reducer';

const Rejection = () => {
  const initialState = { question: '', askee: '' };
  const [questions, dispatch] = useReducer(reducer, reducer());
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const clearForm = () => {
    setValues(initialState);
  };

  const createQuestion = () => {
    dispatch(addQuestion({ ...values }));
    clearForm();
  };

  const resolveQuestion = (id, status) => {
    dispatch(updateQuestion({ id, status }));
  };

  const saveToLocal = (questions) => {
    localStorage.setItem('storeKey', JSON.stringify(questions));
  };

  useEffect(() => saveToLocal(questions));

  return (
    <Fragment>
      <Score total={getScore(questions)} />
      <AddQuestion
        values={values}
        onChange={handleInputChange}
        onClick={createQuestion}
      />
      <PendingQuestion
        onClick={resolveQuestion}
        questions={getPending(questions)}
      />
      <ResolvedQuestion questions={getResolved(questions)} />
    </Fragment>
  );
};

export default Rejection;
