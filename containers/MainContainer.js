import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import autoBind from 'react-autobind';
import { Button, Grid, Segment, Container } from 'semantic-ui-react';
import * as Actions from '../actions';
import List from '../components/List';
import RejectionForm from '../components/rejectionForm';
import History from '../components/history';

class Main extends Component {
  constructor() {
    super();
    autoBind(this);
  }
  handleSubmit() {
    const { actions: { add }, form: { RejectionForm: { values: { asked, person } } } } = this.props;
    add(asked, person);
  }
  handleAnswer({ value, answer }) {
    const { rejected, accepted, deleteAsk, addToHistory } = this.props.actions;
    const result = Object.assign(value, { result: answer().type });

    if (answer().type === 'REJECTED') rejected();
    else accepted();

    addToHistory(result);
    deleteAsk(result.id);
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
                <div>Points {points}</div>
                <Button type={'submit'} onClick={clearScore}>
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

const mapStateToProps = ({ list, points, history, form }) => ({
  list,
  points,
  history,
  form
});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actions, dispatch) });

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
