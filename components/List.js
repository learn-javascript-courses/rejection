import React from 'react';
import * as Actions from '../actions';

export default function List({ list, handleAnswer }) {
  return (
    <ul>
      {list.map((ask, index) => (
        <li key={ask.person + ask.asked}>
          {ask.person} | {ask.asked}
          <input
            type="submit"
            value="Rejected"
            onClick={e => handleAnswer(e, {value: ask, answer: Actions.rejected, index })}
          />
          <input type="submit" value="Accepted" onClick={e => handleAnswer(e, { value: ask, answer: Actions.accepted, index })} />
        </li>
      ))}
    </ul>
  );
}
