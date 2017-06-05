import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { Button, Grid, Segment, Container, Message } from 'semantic-ui-react';
import * as listActions from './list/list-reducer';
import * as listSagaActions from './list/list.saga';
import * as loginActions from './Login/loginReducer';
import List from './list/list';
import RejectionForm from './form';
import Points from './points/points';
import History from './history/history';
import Profile from './profile/profile';
import Login from './Login/Login';

class Main extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  componentDidMount() {
    this.props.actions.fetchData(this.props.uid);
  }
  handleSubmit() {
    const {
      uid,
      actions: { addAsk },
      form: { RejectionForm: { values: { asked, person } } }
    } = this.props;
    addAsk({ asked, person, uid });
  }
  deleteAsk(event, { data }) {
    const { uid } = this.props;
    this.props.actions.deleteAsk(data.id, uid);
  }
  handleRejected(event, { data }) {
    this.props.actions.addAsk(data);
  }
  handleAccepted(event, { data }) {
    this.props.actions.addAsk(data);
  }
  render() {
    const { list, points, history, actions: { deleteAsk } } = this.props;
    if (!this.props.isLoggedIn) {
      return <Login />;
    }
    return (
      <div>
        <Container>
          <Button
            inverted
            color={'red'}
            floated={'right'}
            onClick={this.props.actions.startSignOut}
          >
            Sign Out
          </Button>
          <Profile floated={'left'} />
        </Container>
        <Container textAlign={'center'}>
          <h1>{'Rejection Game'}</h1>
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
          <Points points={points} />
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
      ...listSagaActions,
      ...loginActions
    },
    dispatch
  )
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
