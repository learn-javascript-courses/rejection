import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AddQuestion = ({ onClick, onChange, values }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col my-4">
          <h2 className="addQuestionTitle d-flex justify-content-center">
            Ask A Question
          </h2>
          <div className="form-inline d-flex justify-content-center mt-3">
            <label htmlFor="ask" className="sr-only" id="askLabel">
              Ask
            </label>
            <input
              type="text"
              name="question"
              onChange={onChange}
              value={values.question}
              className="form-control m-2"
              id="ask"
              placeholder="What will you ask for?"
            ></input>
            <label htmlFor="askee" className="sr-only" id="askeeLabel">
              Askee
            </label>
            <input
              type="text"
              name="askee"
              onChange={onChange}
              value={values.askee}
              className="form-control m-2"
              id="askee"
              placeholder="Whom will you ask?"
            ></input>
            <button
              type="button"
              id="addQuestion"
              className="m-2"
              onClick={onClick}
            >
              Add +{' '}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        #askLabel,
        #askeeLabel {
          display: none;
        }

        .form-control::placeholder {
          color: #393939;
          opacity: 1;
        }

        .formControl {
          box-shadow: inset 4px 4px 12px rgba(211, 211, 211, 0.15),
            inset -4px -4px 12px rgba(211, 211, 211, 0.25);
          -webkit-appearance: none;
          -moz-appearance: none;
          border: none;
          height: 40px;
        }
      `}</style>
    </Fragment>
  );
};

AddQuestion.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  values: PropTypes.object,
};

export default AddQuestion;
