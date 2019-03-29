import React from 'react';

const Question = ({ id, question, askee, status, timestamp, handleToggleQuestionStatusClick, handleDeleteQuestionClick } = {}) => (
  <li className="question">
    <dl>
      <dt>Question: </dt><dd className="question">{question}</dd>
      <dt>Askee: </dt><dd className="askee">{askee}</dd>
      <dt>Status: </dt><dd className="status" onClick={ event => handleToggleQuestionStatusClick(id, status, event) }>{status}</dd>
      <dt>Answered: </dt><dd className="timestamp">{timestamp ? (new Date(timestamp)).toLocaleString() : ''}</dd>
    </dl>
    <button type="button" onClick={ event => handleDeleteQuestionClick(id, event)}>Delete</button>
  </li>
);

export default Question;
