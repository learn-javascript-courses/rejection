'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var handleSubmit = props.handleSubmit,
      reset = props.reset,
      pristine = props.pristine,
      submitting = props.submitting;

  return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_reduxForm.Field, {
    name: 'asked',
    type: 'text',
    component: _formComponent2.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_reduxForm.Field, {
    name: 'person',
    type: 'text',
    component: _formComponent2.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_semanticUiReact.Button.Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_semanticUiReact.Button, {
    onClick: function onClick(e) {
      e.preventDefault();
      return reset('RejectionForm');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Cancel'), _react2.default.createElement(_semanticUiReact.Button.Or, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(_semanticUiReact.Button, {
    positive: true,
    type: 'submit',
    disabled: pristine || submitting,
    onClick: function onClick(e) {
      e.preventDefault();
      handleSubmit();
      return reset('RejectionForm');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, 'Submit')));
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _semanticUiReact = require('semantic-ui-react');

var _formComponent = require('./formComponent');

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js';