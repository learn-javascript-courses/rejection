import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import renderField from '../helpers/renderField';
import { createQuestionActionCreator } from './state/actions';
import { resetNewQuestion } from './state/actions';
import { connect } from 'react-redux';
//Client side validation
function validate(values) {
  const errors = {};

  if (!values.questionString || values.questionString.trim() === '') {
    errors.questionString = 'Enter a Title';
  }
  return errors;
}

class QuestionsForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newQuestion.question && !nextProps.newQuestion.error) {
      this.context.router.push('/');
    }
  }

  renderError(newQuestion) {
    if (newQuestion && newQuestion.error && newQuestion.error.message) {
        return (
          <div className="alert alert-danger">
            { newQuestion ? newQuestion.error.message : '' }
          </div>
          );
      } else {
        return <span></span>
      }
   }

  render() {
    const {handleSubmit, submitting, newQuestion} = this.props;
    return (
      <div>
        { this.renderError(newQuestion) }
        <form className="form" onSubmit={ handleSubmit(createQuestionActionCreator) }>
          <Field
                 name="questionString"
                 type="text"
                 component={ renderField }
                 label="What did you ask?" />
                   <Field
                 name="askee"
                 type="text"
                 component={ renderField }
                 label="Who is being asked?" />
          <Field
                 name="answer"
                 type="checkbox"
                 component={ renderField }
                 label="Click the box to answer yes. To answer no, leave it unchecked" />
            <div className="button-styles">
            <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ submitting }><a>
              Submit
              </a>
            </button>
            <button>
            <Link
                  to="/"
                  className="btn btn-error">I Decided Against Asking
            </Link>
            </button>
            </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewQuestion());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newQuestion: state.questionsAppState.newQuestion
  };
}

QuestionsForm = reduxForm({
  form: 'QuestionsForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(QuestionsForm)

export default connect(mapStateToProps,mapDispatchToProps)(QuestionsForm)
