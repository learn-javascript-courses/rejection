import React from 'react';

const History = ({
  id, question, askee, status, handleUpdate, handleRemove,
}) => (
  <li className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between align-items-center">
      <h6 className="mb-1">
        <span
          title="Score"
          className={`badge badge-pill mr-2 ${
            status === 'accepted' ? ' badge-danger' : ' badge-success'
          }`}
        >
          {status === 'accepted' ? '1' : '10'}
        </span>
        {question}
      </h6>
      <div className="history-item-controls btn-group">
        <button onClick={handleUpdate} type="button" className="btn btn-secondary mr-3">
          Edit
        </button>
        <button onClick={handleRemove} type="button" className="btn btn-danger mr-3">
          Delete
        </button>
      </div>
    </div>
    <p className="mb-1">{askee}</p>
  </li>
);

export default History;
