import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Button, Grid, Segment, Container } from 'semantic-ui-react';
import * as Actions from '../actions';
import List from '../components/List';
import RejectionForm from '../components/rejectionForm';
import History from '../components/history';


class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }
  handleSubmit() {
    const { RejectionForm } = this.props.form;
    this.props.actions.add(RejectionForm.values);
  }
  handleAnswer(event, { value, answer, index }) {
    event.preventDefault();
    const { rejected, accepted, deleteAsk, addToHistory } = this.props.actions;
    if (answer === Actions.rejected) rejected();
    else accepted();
    addToHistory({ time: moment().format('LLLL'), value, answer });
    deleteAsk(index);
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
            <List handleAnswer={this.handleAnswer} list={list} key={Date.now()} />
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
            <Container textAlign={'center'}>
              <Segment padded>
                <div>Total {points}</div>
                <Button
                  type={'submit'}
                  onClick={clearScore}
                >
                  {'Clear Score'}
                </Button>
              </Segment>
            </Container>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
  points: state.points,
  history: state.history,
  form: state.form
});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
