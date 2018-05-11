import React from 'react';
import { connect } from 'react-redux'
import Question from '../../atoms/Question/Question'

import './QuestionList.css'

const QuestionList = ({ questions }) => (
  <ul>
    {questions.map((question, index) =>
      <Question
        key={question.id}
        questionCounter={index + 1}
        {...question}
      />
    )}
  </ul>
)

const mapStateToProps = state => ({
  questions: state
})


export default connect(mapStateToProps)(QuestionList);
