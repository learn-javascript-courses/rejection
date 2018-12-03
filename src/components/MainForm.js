import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addHistory, updateHistory } from '../actions';

// Synchronous validation function
const validate = (value) => {
  let errorMessage;
  if (!/^.+$/i.test(value)) {
    errorMessage = 'You must supply a value!';
  }
  return errorMessage;
};

const MainForm = (props) => {
  const {
    values, errors, touched, handleChange, handleBlur, isSubmitting, updating,
  } = props;

  return (
    <Form>
      <div className="row">
        <div className="col-md-8 mb-3">
          <label className="label">Question</label>
          <Field
            validate={validate}
            className={`input form-control ${errors.question && touched.question && 'is-invalid'}`}
            type="text"
            name="question"
            placeholder="Can we go to Mars?"
          />
          {touched.question && errors.question && <div className="invalid">{errors.question}</div>}
        </div>
        <div className="col-md-4 mb-3">
          <label className="label">Person Asked</label>
          <Field
            validate={validate}
            className={`input form-control ${errors.askee && touched.askee && 'is-invalid'}`}
            type="text"
            name="askee"
            placeholder="Elon"
          />
          {touched.askee && errors.askee && <div className="invalid">{errors.askee}</div>}
        </div>
      </div>
      <div className="row my-3 ml-4">
        <div className="custom-control custom-radio mr-3">
          <input
            id="accepted"
            name="status"
            type="radio"
            value="accepted"
            className="custom-control-input radio"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.status === 'accepted'}
          />
          <label className="custom-control-label" htmlFor="accepted">
            Accepted
          </label>
        </div>
        <div className="custom-control custom-radio mr-3">
          <input
            id="rejected"
            name="status"
            type="radio"
            value="rejected"
            className="custom-control-input radio"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.status === 'rejected'}
          />
          <label className="custom-control-label" htmlFor="rejected">
            Rejected
          </label>
        </div>
        {touched.status && errors.status && <div className="invalid">{errors.status}</div>}
      </div>
      <input id="id" name="id" type="hidden" value={values.id} />
      <hr className="mb-4" />
      <div className="row">
        <div className="col-md-4 mb-3">
          <button
            name="save"
            className={`btn btn-lg btn-block mb- ${
              updating.isUpdating === true ? ' btn-warning' : 'btn-primary'
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {updating.isUpdating === true ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </Form>
  );
};

export const MainFormFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues({
    id, question, askee, status, updating,
  }) {
    return {
      question: question || updating.question || '',
      askee: askee || updating.askee || '',
      id: id || updating.id || '',
      status: status || updating.status,
      updating: updating.isUpdating || false,
    };
  },
  validationSchema: Yup.object().shape({
    question: Yup.string().required('Question is required!'),
    askee: Yup.string().required('Askee is required!'),
    status: Yup.string().required('Status is required!'),
  }),
  handleSubmit(values, { props, resetForm, setSubmitting }) {
    setTimeout(() => {
      if (values.updating) {
        props.dispatch(updateHistory(props.user.token, values));
        props.dispatch({ type: 'STOP_UPDATING' });
      } else {
        props.dispatch(addHistory(props.user.token, values));
      }
      resetForm();
      setSubmitting(false);
    }, 500); // simulate network and API delay
  },
})(MainForm);

const mapStateToProps = state => ({
  updating: state.updating,
  user: state.user,
});

export default connect(mapStateToProps)(MainFormFormik);
