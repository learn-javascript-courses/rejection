import React from 'react';
import { connect } from 'react-redux'
import { getScore } from '../../../reducers/get-score';

import './Score.css';

const Score = ({ questions }) => {
  return (
    <h1 className="score">Score: {getScore(questions)}</h1>
  )
}

const mapStateToProps = state => ({
  questions: state
})

export default connect(mapStateToProps)(Score);
