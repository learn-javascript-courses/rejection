import React from 'react'
import SingleQuestion from './SingleQuestion';
const questionListStyles = {
  listStyleType: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center'
};

const IterateQuestions = ({questions}) => {
  return (
    <ul style={{...questionListStyles}}>
      {questions.map((q, i) => 
        <SingleQuestion key={i} {...q} />
        )}
    </ul>
  )
}

export default IterateQuestions