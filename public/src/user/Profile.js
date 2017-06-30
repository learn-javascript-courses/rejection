import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import UserInfo from './UserInfo';
import IterateQuestions from '../questions/components/IterateQuestions';
import * as Selectors from '../questions/state/selectors';

class Profile extends Component {
 componentWillReceiveProps(nextProps) {
    if (nextProps.userState.isAuthenticated === 'yes') {
      this.context.router.push('/');
    }
  }
  render() {
    // console.log('User', this.props.userState);
    const {  questions } = this.props.questionsList;
    const userEmail = this.props.userState.email;

    const userQuestions = questions.filter(q => q._createdBy === userEmail);

    const userScore = userQuestions.reduce((sum, val) => sum + val.answerWorth , 0);
    return (
      <div>
        <h3><Link to='/'>Back To Questions Page</Link></h3>
        <UserInfo {...this.props.userState} />
        <h3>Existing Question Log</h3>
        <p>Current Score: {userScore} </p>
         <IterateQuestions questions={userQuestions} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userState: state.userState.user,
    questionsList: Selectors.getAllQuestions(state)
  }
}

export default connect(mapStateToProps)(Profile);

