import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import List from '../components/List';
import RejectionForm from '../components/rejectionForm';

class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }
  handleSubmit(e) {
    this.props.actions.add(this.props.form.values);
  }
  handleAnswer(event, {answer, index}) {
    event.preventDefault();
    const { rejected, accepted, deleteAsk } = this.props.actions
    answer === Actions.rejected ? rejected() : accepted();
    deleteAsk(index)

  }
  render() {
    const { list, rejected, points, accepted, actions, add } = this.props;
    return (
      <div>
        <RejectionForm handleSubmit={this.handleSubmit} />
        <List handleAnswer={this.handleAnswer} list={list} key={Date.now}/>
        <div>Total {points}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    points: state.points,
    form: state.form.RejectionForm
  }
}
const mapDispatchToProps = (dispatch) => ({actions : bindActionCreators(Actions, dispatch) })

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
