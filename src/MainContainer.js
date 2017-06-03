import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'next/link';
import autoBind from 'react-autobind';
import Router from 'next/router';
import { Button, Grid, Segment, Container, Message } from 'semantic-ui-react';
import * as listActions from './list/list-reducer';
import List from './list/list';
import RejectionForm from './form';
import Points from './points/points';
import * as listSagaActions from './list/list.saga';
import History from './history/history';
import Nav from './navbar/navbar';
import { isAuthedCheck } from './Login/loginReducer';
import Login from './Login/Login';

class Main extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  componentDidUpdate() {
    if (this.props.uid) {
      this.props.actions.fetchData(this.props.uid);
    }
  }
  handleSubmit() {
    const {
      uid,
      actions: { addAsk, createSaveAsk },
      form: { RejectionForm: { values: { asked, person } } }
    } = this.props;
    addAsk({ asked, person, uid });
  }
  deleteAsk(event, { data }) {
    const { uid } = this.props;
    this.props.actions.deleteAsk(data.id, uid);
  }
  handleRejected(event, { data }) {
    // dispatch single action here
    this.props.actions.addAsk(data); // save ask to db and save ask in list
  }
  handleAccepted(event, { data }) {
    // dispatch single action here
    this.props.actions.addAsk(data);
  }
  render() {
    if (!this.props.isLoggedIn) {
      return <Login />;
    }
    const { list, points, history, actions: { deleteAsk, clearScore } } = this.props;

    if (!this.props.isLoggedIn) return Router.redirect('/login');
    return (
      <div>
        <Nav />
        <Container textAlign={'center'}>
          <h1>{'Rejection Game'}</h1>
        </Container>
        <Container textAlign={'center'}>
          <RejectionForm className={'main-container'} handleSubmit={this.handleSubmit} />
        </Container>
        <Grid columns={2}>
          <Grid.Column>
            <List
              handleAccepted={this.handleAccepted}
              handleRejected={this.handleRejected}
              list={list}
            />
          </Grid.Column>
          <Grid.Column>
            <History history={history} deleteAsk={this.deleteAsk} />
          </Grid.Column>
          <Grid.Row>
            <Points clearScore={clearScore} points={points} savePoints={this.savePoints} />
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: listActions.getList(state),
  history: listActions.getHistory(state),
  points: listActions.getPoints(state),
  form: state.form,
  isLoggedIn: state.login.isLoggedIn,
  uid: listActions.getUID(state)
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...listActions,
      ...listSagaActions
    },
    dispatch
  )
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
