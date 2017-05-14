'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _actions = require('../actions');

var Actions = _interopRequireWildcard(_actions);

var _listItems = require('./list-items');

var _listItems2 = _interopRequireDefault(_listItems);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function List(_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;

  if (list.length <= 0) return _react2.default.createElement('div', null);
  return _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_semanticUiReact.Segment, { padded: true }, _react2.default.createElement(_listItems2.default, { list: list, handleAnswer: handleAnswer })));
}