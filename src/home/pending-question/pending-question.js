import React from 'react';
import PropTypes from 'prop-types';

const PendingQuestion = ({ questions, onClick }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <h2 className="d-flex table-title justify-content-center">
          Pending Questions
        </h2>
        <div className="table-responsive">
          <table className="pending-questions table my-3">
            <thead className="pending-questions-header sr-only">
              <tr className="pending-header-row">
                <td className="pending-header-data sr-only">ID</td>
                <td className="pending-header-data">Askee</td>
                <td className="pending-header-data">Question</td>
                <td className="pending-header-data sr-only">Status</td>
                <td className="pending-header-data">Accepted</td>
                <td className="pending-header-data">Rejected!!</td>
              </tr>
            </thead>
            <tbody className="pending-questions-body">
              {questions.map((question) => {
                return (
                  <tr key={question.id} id={question.id} className="body-row">
                    <td className="body-data question-id">{question.id}</td>
                    <td className="body-data askee-data-pt">
                      {question.askee}
                    </td>
                    <td className="body-data question-data-pt">
                      {question.question}
                    </td>
                    <td className="body-data question-status">
                      {question.status}
                    </td>
                    <td className="body-data">
                      <button
                        className="accepted"
                        onClick={() => onClick(question.id, 'Accepted')}
                      >
                        Accepted
                      </button>
                    </td>
                    <td className="body-data">
                      <button
                        className="rejected"
                        onClick={() => onClick(question.id, 'Rejected')}
                      >
                        Rejected
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

PendingQuestion.propTypes = {
  questions: PropTypes.array,
  onClick: PropTypes.func,
};

export default PendingQuestion;
