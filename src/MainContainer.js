import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import autoBind from 'react-autobind';
import { Button, Grid, Segment, Container } from 'semantic-ui-react';
import * as historyActions from './history/history-reducer';
import * as listActions from './list/list-reducer';
import * as pointsActions from './points/points-reducer';
import List from './list/list';
import RejectionForm from './form';
import History from './history/history';
import Points from './points/points';
import * as pointsSagaActions from './points/points.saga';
import * as historySagaActions from './history/history.saga';
import * as listSagaActions from './list/list.saga';

class Main extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  componentWillMount() {
    // need uid for these
    // this.props.actions.fetchPoints();
    // this.props.actions.fetchAskList();
    // this.props.actions.fetchHistoryList();
  }
  handleSubmit() {
    const {
      actions: { add, createSaveAsk },
      form: { RejectionForm: { values: { asked, person } } }
    } = this.props;
    const newAsk = add({ asked, person });
    createSaveAsk(newAsk.payload);
  }
  handleRejected(event, props) {
    const { id, asked, person, result } = props.data;
    this.props.actions.rejected(id);
    this.props.actions.addToHistory(props.data); // add item to history
    this.props.actions.historyRejected(id);
    this.props.actions.deleteAsk(id); // remove item from list
    this.props.actions.createSaveAskToHistory({ id, asked, person, result });
    this.savePoints();
    this.props.actions.createDeleteAskFromFirebaseList(id);
  }
  handleAccepted(event, props) {
    const { id, asked, person, result } = props.data;
    this.props.actions.accepted(id);
    this.props.actions.addToHistory(props.data); // add item to history
    this.props.actions.historyAccepted(id);
    this.props.actions.deleteAsk(id); // remove item from list
    this.props.actions.createSaveAskToHistory({ id, asked, person, result });
    this.savePoints();
    this.props.actions.createDeleteAskFromFirebaseList(id);
  }
  savePoints() {
    console.log(this.props.points);
    this.props.actions.createSavePoints({
      points: this.props.points,
      id: 1 // user id will be here
    });
  }
  render() {
    const {
      list,
      points,
      history,
      actions: { addToHistory, clearHistory, deleteFromHistory, clearScore }
    } = this.props;
    return (
      <div>
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
            <History
              history={history}
              addToHistory={addToHistory}
              clearHistory={clearHistory}
              deleteFromHistory={deleteFromHistory}
            />
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
  points: state.points,
  history: historyActions.getHistory(state),
  form: state.form
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...listActions,
      ...pointsActions,
      ...historyActions,
      ...pointsSagaActions,
      ...historySagaActions,
      ...listSagaActions
    },
    dispatch
  )
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
