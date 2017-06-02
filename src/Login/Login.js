import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Container, Message, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from './loginReducer';
import Auth from '../lib/facebook';

class Login extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  componentDidMount() {}
  render() {
    return !this.props.isFetching
      ? <Container textAlign={'center'}>
        <Message>
          {'We Accept Logins from the following Services, Please click One to Login'}
        </Message>
        <button className="ui facebook button" onClick={this.props.actions.isFetchingLogin}>
          <i className="facebook icon" />
            Facebook
          </button>
      </Container>
      : <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </Segment>;
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
