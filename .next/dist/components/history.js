'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js';

exports.default = function (_ref) {
  var history = _ref.history,
      clearHistory = _ref.clearHistory,
      addToHistory = _ref.addToHistory,
      deleteFromHistory = _ref.deleteFromHistory;
  return history.length > 0 ? _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('input', { type: 'button', onClick: clearHistory, value: 'Clear History', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), history.map(function (item, index) {
    return _react2.default.createElement('li', { key: item + Date.now() + item.person + item.time, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, item.asked, ' | ', item.person, ' | ', item.time, ' | ', item.result, _react2.default.createElement('input', { type: 'button', onClick: function onClick() {
        return deleteFromHistory(item.id);
      }, value: 'Delete From History', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }));
  })) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
};