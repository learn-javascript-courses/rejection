import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
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
    addToHistory({ time: Date.now(), value, answer });
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
      <div >
        <RejectionForm className={'main-container'} handleSubmit={this.handleSubmit} />
        <List handleAnswer={this.handleAnswer} list={list} key={Date.now()} />
        <History
          history={history}
          addToHistory={addToHistory}
          clearHistory={clearHistory}
          deleteFromHistory={deleteFromHistory}
        />
        <div>Total {points} <input type={'submit'} value={'Clear Score'} onClick={clearScore}/></div>
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
