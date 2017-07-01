import React, { Component } from 'react';
import { centerText } from '../helpers/styleGuide';
import IterateQuestions from './components/IterateQuestions'
// import FilterLink from './filter-components/FilterLink'
import * as Actions from './state/actions'
import { connect } from 'react-redux'
import * as Selectors from './state/selectors';
// import _ from 'lodash/fp';

class QuestionsList extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

    render() {
    const {  loading, error, questions } = this.props.questionsList;
    const totalScores = questions.reduce((sum, val) => sum + val.answerWorth , 0);
    /** 
     * Commenting out Handling leaderboard
     * 
        const leaderboard = questions.reduce((acc, current) => {
          console.log(acc);
          const user =  { email: current._createdBy, score: ++ current.answerWorth }
          return acc + user;
        }, {});

        // console.log('Total Score', totalScores)
        // console.log('Full Leaderboard', leaderboard)

        // _.reduce((sum, num) => sum + num, 0, [10, 2])// 3
    */

    if(loading) {
      return <div><h1>Posts</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div>
      <div className="flex-row">
        <div className="legend">
          <h3 style={{...centerText}}>Rejection App Game Legend</h3>
          <p style={{color: 'green'}}>Green Cards = Accepted | 10 point</p>
          <p style={{color: '#ec7982'}}>Red Cards = Rejected | 1 point</p>
          <hr width="80%"/>
          <h4 style={{...centerText}}>Total Score of Combined Users: {totalScores}</h4>
        </div>
        <div>
        <h1 style={{...centerText}}>Welcome to the Rejection App.</h1>
        <p>The goal is to track questions you ask in everyday life. You gotta lose to win!</p>
        </div>
      </div>
        <h3 style={{...centerText}}>All Questions</h3>
          <IterateQuestions questions={questions} />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return { 
    questionsList: Selectors.getAllQuestions(state),
    user: state.userState.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuestions: () => {
      dispatch(Actions.fetchQuestions()).then((response) => {
            !response.error ? dispatch(Actions.fetchQuestionsSuccess(response.payload.data)) : dispatch(Actions.fetchQuestionsFailure(response.payload.data));
          });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
