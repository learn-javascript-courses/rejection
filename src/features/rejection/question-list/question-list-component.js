import React from 'react';

import Question from '../question/question-component';

const QuestionList = ({ questions = [], handleToggleQuestionStatusClick, handleDeleteQuestionClick } = []) => (
  <ul className="question-list">
    {
      questions.map(
        question =>
          <Question
            {...question}
            key={question.id}
            handleToggleQuestionStatusClick={handleToggleQuestionStatusClick}
            handleDeleteQuestionClick={handleDeleteQuestionClick} />
      )
    }
  </ul>
);

export default QuestionList;
