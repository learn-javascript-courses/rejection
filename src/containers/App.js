import React from 'react';
import { connect } from 'react-redux';
import MainFormFormik from '../components/MainForm';
import History from '../components/History';
import { deleteFromHistory } from '../actions';
import './App.css';

// ====
export const Heading = (props) => {
  const { history } = props;
  return (
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src="./delete-sign.png" alt="" width="72" height="72" />
      <h2>Rejection</h2>
      <p className="lead">You gotta lose to win.</p>
      <p className="h3 monospace mt-5">
        <i className="arrow right mr-3" />
        Score:
        {history.reduce((t, q) => (q.status === 'rejected' ? t + 10 : t + 1), 0)}
        <i className="arrow left ml-3" />
      </p>
    </div>
  );
};

// ====
export const HistoryContainer = (props) => {
  const { history, remove, update } = props;
  return (
    <div className="col-md-5 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your history</span>
        <span className="badge badge-secondary badge-pill">{history.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {history.map(q => (
          <History
            key={q.id}
            {...q}
            handleRemove={() => remove(q.id)}
            handleUpdate={() => update(q)}
          />
        ))}
        {history.length === 0 ? (
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

// ==== Main App component ====
export const App = (props) => {
  const { history } = props;

  return (
    <div role="main" className="container">
      <Heading history={history} />
      <div className="row">
        <HistoryContainer {...props} />
        <div className="col-md-7 order-md-1">
          <h4 className="mb-3">How long can you make your rejection streak last?</h4>
          <MainFormFormik />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  history: state.history,
  updating: state.updating,
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(deleteFromHistory(id)),
  update: q => dispatch({ type: 'START_UPDATING', q }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);