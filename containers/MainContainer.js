import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Main extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.list)
    this.props.add({
      ask:'20 dollars please',
      asked: 'Mom'
    });
  }
  render() {
    return (
      <div>
        <input type="text" />
        <input type="submit" onClick={this.handleSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list : state.list
});
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
