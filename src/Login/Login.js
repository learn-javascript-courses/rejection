import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from './loginReducer';
import Auth from '../lib/facebook';
import LoadingScreen from './Loading-screen';
import LoginScreen from './login-screen';

class Login extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  render() {
    return !this.props.isFetching
      ? <LoginScreen startLogin={this.props.actions.startLogin} />
      : <LoadingScreen />;
  }
}

const mapStateToProps = state => loginAction.loginSelector(state);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginAction, dispatch)
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
