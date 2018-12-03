import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_URL } from '../config';
import { setUserAction, fetchHistory } from '../actions';

export class OAuth extends Component {
  // local state for disabled
  state = {
    disabled: '',
    popup: '',
  };

  componentDidMount() {
    const { socket, provider } = this.props;

    socket.on(provider, (socketUser) => {
      this.state.popup.close();
      // debugger;
      console.log(`User login for: ${JSON.stringify(socketUser)}`);
      // save locally
      window.localStorage.setItem('user', JSON.stringify(socketUser));
      this.props.dispatch(setUserAction(socketUser));
      this.props.dispatch(fetchHistory(socketUser.token)); // get history now that we are logged in
    });
  }

  startAuth = () => {
    if (!this.state.disabled) {
      // this.popup = this.openPopup();
      this.setState({ popup: this.openPopup() });
      this.checkPopup();
      this.setState({ disabled: 'disabled' });
    }
  };

  openPopup() {
    const { provider, socket } = this.props;
    const width = 600;

    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/${provider}?socketId=${socket.id}`;

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`,
    );
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        this.setState({ disabled: '' });
      }
    }, 1000);
  }

  render() {
    const { provider } = this.props;
    const { disabled } = this.state;

    return (
      <div className="mb-2">
        <button
          type="button"
          onClick={this.startAuth}
          onKeyPress={this.startAuth}
          className={`btn btn-block btn-social btn-${provider} ${disabled}`}
        >
          <i className={`fa fa-${provider} ${disabled}`} />
          <b className="titlecase">{provider}</b>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(OAuth);
