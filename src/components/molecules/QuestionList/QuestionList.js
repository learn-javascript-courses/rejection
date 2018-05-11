import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from '../../atoms/Question/Question';

import './QuestionList.css';

const QuestionList = ({ questions }) => (
  <ul>
    {questions.map((question, index) =>
      (<Question
        key={question.id}
        questionCounter={index + 1}
        {...question}
      />))}
  </ul>
);

const mapStateToProps = state => ({
  questions: state,
});

QuestionList.propTypes = {
  questions: PropTypes.shape({
    questionCounter: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(QuestionList);
