import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.add({
      ask:'20 dollars please',
      asked: 'Mom'
    });
  }
  handleAnswer(event, answer) {
    event.preventDefault();
    answer === Actions.rejected ? this.props.rejected() : this.props.accepted();

  }
  render() {
    console.log(Actions.rejected())
    const { list, rejected, points, accepted } = this.props;
    return (
      <div>
        <input type="text" />
        <input type="submit" onClick={this.handleSubmit} />
        <ul >
          {list.map((ask, index) => (
            <li key={index + ask.ask}>
              {ask.ask} | {ask.asked}
              <input type="submit" value="Rejected" onClick={e => this.handleAnswer(e, Actions.rejected)} />
              <input type="submit" value="Accepted" onClick={e => this.handleAnswer(e, Actions.accepted)} />
            </li>
          ))}
        </ul>
        <div>{points}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
