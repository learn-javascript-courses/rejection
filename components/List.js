import React from 'react';
import * as Actions from '../actions';

export default function List ({ list, handleAnswer }) {
  return (
    <ul>
      {list.map((ask, index) => (
        <li key={ask + index}>
            {ask.person} | {ask.asked}
          <input type="submit"
                 value="Rejected"
                 onClick={e => handleAnswer(e, {answer: Actions.rejected, index})} />
          <input type="submit" value="Accepted" onClick={e => handleAnswer(e, { answer: Actions.accepted, index })} />
        </li>
      ))}
    </ul>
  )
}
