import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import Heading from '../components/Heading';
import LoginButtons from '../components/LoginButtons';
import User from '../components/User';
import HistoryContainer from './HistoryContainer';
import MainFormFormik from '../components/MainForm';
import {
  deleteHistory, fetchHistory, setUserAction, logoutUser,
} from '../actions';
import './App.css';

import { API_URL } from '../config';

const socket = io(API_URL);
export const providers = ['twitter', 'google', 'github'];

// ==== Main App component ====
// export const App = (props) => {
export class App extends Component {
  componentDidMount() {
    const { setUser, get, stopLoading } = this.props;

    // load saved user session if found
    let user = null;
    try {
      user = JSON.parse(window.localStorage.getItem('user'));
    } catch (e) {}

    // make sure the server is ready
    fetch(`${API_URL}/wake-up`).then((res) => {
      if (res.ok) {
        if (user && user.token) {
          // check user & token / clear stale session
          fetch(`${API_URL}/api/user`, {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }).then((res2) => {
            if (res2.ok) {
              setUser(user);
              stopLoading();
              get(user.token); // get history now that we are logged in
            } else {
              setUser(null);
              stopLoading();
            }
          });
        } else {
          stopLoading();
        }
      }
    });
  }

  render() {
    const {
      user, history, loading, logout,
    } = this.props;

    return (
      <div role="main" className="container">
        <div
          style={{ display: loading ? 'block' : 'none' }}
          className="justify-content-center row mt-4"
        >
          <div className="text-center">
            <h3>Waiting for API...</h3>
            <img src="./spinner.gif" alt="" width="72" height="72" />
          </div>
        </div>
        <div style={{ display: loading ? 'none' : 'block' }}>
          <LoginButtons user={user} providers={providers} socket={socket} />
          <User user={user} logout={logout} />
          <div className={user.name ? '' : 'hidden'}>
            <Heading history={history} />
            <div className="row">
              <HistoryContainer {...this.props} />
              <div className="col-md-7 order-md-1">
                <h4 className="mb-3">How long can you make your rejection streak last?</h4>
                <MainFormFormik />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  updating: state.updating,
  user: state.user,
  loading: state.appLoading,
});

const mapDispatchToProps = dispatch => ({
  stopLoading: () => dispatch({ type: 'STOP_APP_LOADING' }),
  get: token => dispatch(fetchHistory(token)),
  setUser: user => dispatch(setUserAction(user)),
  remove: (token, id) => dispatch(deleteHistory(token, id)),
  update: q => dispatch({ type: 'START_UPDATING', q }),
  logout: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
