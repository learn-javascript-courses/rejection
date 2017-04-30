import React from 'react';


export default ({ history, clearHistory, addToHistory, deleteFromHistory }) => history.length > 0 ? (
  <ul>
    <input type={'button'} onClick={clearHistory} value={'Clear History'} />
    {history.map((item, index) => <li key={item + Date.now() + item.person + item.time}>
      {item.asked} | {item.person} | {item.time} | {item.result}
      <input type={'button'} onClick={() => deleteFromHistory(item.id)} value={'Delete From History'} />
      </li>)}
  </ul>
) : (
  <div></div>
);
