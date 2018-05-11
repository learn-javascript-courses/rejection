import React from 'react';
import QuestonList from './components/molecules/QuestionList/QuestionList';
import Form from './components/molecules/Form/Form';
import Score from './components/molecules/Score/Score';

import './App.css';

const App = () => (
  <div className="App">
    <h1 className="App-title">Rejection App</h1>
    <Score />
    <Form />
    <QuestonList />
  </div>
);


export default App;
