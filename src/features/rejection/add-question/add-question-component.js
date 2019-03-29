import React from 'react';

const AddQuestion = ({ questionRef, askeeRef, handleAcceptedClick, handleRejectedClick, handleUnansweredClick }) => (
  <div className="add-question">
    <label htmlFor="question-input">Question:</label><input className="question" id="question-input" ref={questionRef} />
    <label htmlFor="askee-input">Askee:</label><input className="askee" id="askee-input" ref={askeeRef} />
    <button type="button" className="accepted" onClick={handleAcceptedClick}>Accepted</button>
    <button type="button" className="rejected" onClick={handleRejectedClick}>Rejected</button>
    <button type="button" className="unanswered" onClick={handleUnansweredClick}>Unanswered</button>
  </div>
);

export default AddQuestion;

