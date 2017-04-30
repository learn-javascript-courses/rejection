'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _formComponent = require('./formComponent');

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js';
function Form(props) {
  console.log('props', props);
  var handleSubmit = props.handleSubmit,
      reset = props.reset;

  return _react2.default.createElement('form', { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('label', { htmlFor: 'Asked', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Asked'), _react2.default.createElement(_reduxForm.Field, {
    name: 'asked',
    type: 'text',
    component: _formComponent2.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('label', { htmlFor: 'Asked Who', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Asked Who'), _react2.default.createElement(_reduxForm.Field, {
    name: 'person',
    type: 'text',
    component: _formComponent2.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('input', { type: 'button', value: 'submit', onClick: function onClick() {
      handleSubmit();
      return reset('RejectionForm');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }));
}