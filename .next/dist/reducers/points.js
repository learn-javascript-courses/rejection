'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = require('redux-actions');

var _rejection = require('../constants/rejection');

var Actions = _interopRequireWildcard(_rejection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = 0;
exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.Rejected, function (state, _ref) {
  var payload = _ref.payload;
  return points + 10;
}), (0, _defineProperty3.default)(_handleActions, Actions.Accepted, function (state, _ref2) {
  var payload = _ref2.payload;
  return points + 1;
}), _handleActions), initialState);