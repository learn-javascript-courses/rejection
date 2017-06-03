import React, { Component } from 'react';
import Router from 'next/router';
import autoBind from 'react-autobind';
import Link from 'next/link';
import { Container, Message, Dimmer, Loader, Image, Segment, Label, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from './loginReducer';
import Auth from '../lib/facebook';
import Nav from '../navbar/navbar';

class Login extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Nav />
          <Message>
            You are Logged In...
          </Message>
        </div>
      );
    }
    return !this.props.isFetching
      ? <Container textAlign={'center'}>
        <Message>
          {'We Accept Logins from the following Services, Please click One to Login'}
        </Message>
        <button className="ui facebook button" onClick={this.props.actions.startLogin}>
          <i className="facebook icon" />
            Facebook
          </button>
      </Container>
      : <Container textAlign={'center'}>
        <Grid.Row />
        <Segment>
          <Dimmer active page>
            <Loader size="small">
              <Label pointing>Signing In</Label>
            </Loader>
          </Dimmer>
        </Segment>
      </Container>;
  }
}

const mapStateToProps = state => loginAction.loginSelector(state);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...loginAction
    },
    dispatch
  )
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
