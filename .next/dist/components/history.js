'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js';

exports.default = function (_ref) {
  var history = _ref.history,
      clearHistory = _ref.clearHistory,
      addToHistory = _ref.addToHistory,
      deleteFromHistory = _ref.deleteFromHistory;
  return history.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, { fluid: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Segment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_semanticUiReact.Button, {
    compact: true,
    floated: 'right',
    basic: true, type: 'button',
    onClick: clearHistory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Clear History'), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), history.map(function (item, index) {
    return _react2.default.createElement(_semanticUiReact.Card, {
      centered: true,
      key: item + Date.now() + item.person + item.time,
      color: item.result === 'REJECTED' ? 'red' : 'green',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, 'You Asked For : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, 'Date: ', item.time, ' '), _react2.default.createElement(_semanticUiReact.Card.Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, 'You Asked : ', item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, item.result), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      type: 'button',
      color: item.result === 'REJECTED' ? 'red' : 'green',
      onClick: function onClick() {
        return deleteFromHistory(item.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, 'Delete From History'));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  });
};