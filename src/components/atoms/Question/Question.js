import React from 'react';

const Question =({ questionCounter, person, score, question, response, timestamp}) => (
  <li>
    <h2> Question #{questionCounter} </h2>
    <h4> Person Asked: {person}<br/>
    Question: {question}<br/>
    Response: {response}<br/>
    Score: {score}<br/>
    <span style={{ fontSize: '8px'}}> Timestamp: {timestamp}</span>
    </h4>
  </li>
)

export default Question;
