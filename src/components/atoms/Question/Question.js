import React from 'react';
import PropTypes from 'prop-types';

const Question = ({
  questionCounter, person, score, question, response, timestamp,
}) => (
  <li>
    <h2> Question #{questionCounter} </h2>
    <h4> Person Asked: {person}<br />
    Question: {question}<br />
    Response: {response}<br />
    Score: {score}<br />
      <span style={{ fontSize: '8px' }}> Timestamp: {timestamp}</span>
    </h4>
  </li>
);

Question.propTypes = {
  questionCounter: PropTypes.number.isRequired,
  person: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Question;
