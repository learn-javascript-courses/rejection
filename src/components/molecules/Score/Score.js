import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getScore from '../../../reducers/get-score';

import './Score.css';

const Score = ({ questions }) => (
  <h1 className="score">Score: {getScore(questions)}</h1>
);

const mapStateToProps = state => ({
  questions: state,
});

Score.propTypes = {
  questions: PropTypes.shape({
    questionCounter: PropTypes.number.isRequired,
    person: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Score);
