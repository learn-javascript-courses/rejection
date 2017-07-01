import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import renderField from '../helpers/renderField';
import { validate } from '../helpers/form';
import { validateAndSignInUser, resetUser } from './actions';
import { connect } from 'react-redux'

//import '../form.css'

class SignInFormComponent extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticated === 'yes' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/');
    }

    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    if (nextProps.user.isAuthenticated === 'no' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message);
    }
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div className="container">
      <h2 className="centered-text">Rejection App Sign In</h2>
        <form className="form" onSubmit={ handleSubmit(validateAndSignInUser) }>
          <Field
                 name="email"
                 type="text"
                 component={ renderField }
                 label="Email Address" />
          <Field
                 name="password"
                 type="password"
                 component={ renderField }
                 label="Password" />
          <div>
            <div className="button-styles">
            <button>
            <a
                    type="submit"
                    className="btn btn-primary"
                    disabled={ submitting }>
              Submit
            </a>
            </button>
            <button>
            <Link
                  to="/"
                  className="btn btn-error">Back to Home
            </Link>
            </button>
            <button>
            <Link
                  to="/register"
                  className="btn btn-error">New User Signup
            </Link>
            </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

SignInFormComponent = reduxForm({
  form: 'SignInFormComponent', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(SignInFormComponent)


const mapStateToProps = (state, ownProps) => {
  return { 
    user: state.userState
  };
}
SignInFormComponent = connect(
  mapStateToProps, { resetUser }
)(SignInFormComponent)

export default SignInFormComponent;
