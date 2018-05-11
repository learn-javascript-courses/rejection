import React from 'react';
import { connect } from 'react-redux';
import { addQuestion } from '../../../reducers/questions';
import './Form.css';


let Form = ({ dispatch }) => {
  let askee;
  let question;
  let reject;
  let accept;
  const REJECTED = 10;
  const ACCEPTED = 1;
  const UNANSWERED = 0;

  return (
    <form
      className='form-container'
      id = "form"
      onSubmit={e => {
        e.preventDefault()
        if(!askee.value.trim()) {
          return
        }
        const obj = {
          person: askee.value,
          question: question.value,
          score: reject.checked ? REJECTED : accept.checked ? ACCEPTED : UNANSWERED,
          response: reject.checked ? reject.value : accept.checked ? accept.value : 'UNANSWERED'
        }
        dispatch(addQuestion(obj))
        askee.value = ''
        question.value = ''
      }}
    >
      <div
        className='formQuestions'>
        <label>Person Asked: </label>
        <input
          type="text"
          name="Askee"
          ref={node => {
            askee = node
          }}/>
          <label>Question: </label>
          <input
            type="text"
            name="Question"
            ref={node => {
              question = node
            }}/>
            <label>Reject</label>
            <input
              type='radio'
              name='Response'
              value='Rejected'
              ref={node => {
                reject = node
              }}/>
              <label>Accept</label>
              <input
                type='radio'
                name='Response'
                value='Accepted'
                ref={node => {
                  accept = node
                }}/>
      </div>
      <div className='formButton'>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}


Form = connect()(Form)
export default Form;
