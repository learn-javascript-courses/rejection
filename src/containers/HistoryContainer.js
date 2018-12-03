import React from 'react';
import History from '../components/History';

// ====
const HistoryContainer = (props) => {
  const {
    user, history, remove, update,
  } = props;
  return (
    <div className="col-md-5 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your history</span>
        <span className="badge badge-secondary badge-pill">{history.data.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {history.data.map(q => (
          <History
            key={q.id}
            {...q}
            handleRemove={() => remove(user.token, q.id)}
            handleUpdate={() => update(q)}
          />
        ))}
        {history.data.length === 0 ? (
          <li className="list-group-item list-group-item-action flex-column align-items-center">
            <p className="d-flex w-100 justify-content-between align-items-center h5">
              No questions found, go ask some!
            </p>
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default HistoryContainer;
