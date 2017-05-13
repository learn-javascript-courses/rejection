'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _reduxActions = require('redux-actions');

var _constants = require('../constants');

var Constants = _interopRequireWildcard(_constants);

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

var add = exports.add = function add() {
  var asked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var person = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _cuid2.default)();
  return {
    type: Constants.ADD,
    payload: {
      asked: asked,
      person: person,
      time: time,
      result: result,
      id: id
    }
  };
};

var rejected = exports.rejected = function rejected() {
  return {
    type: Constants.REJECTED
  };
};
var accepted = exports.accepted = function accepted() {
  return {
    type: Constants.ACCEPTED
  };
};

var edit = exports.edit = function edit(payload) {
  return {
    type: Constants.EDIT,
    payload: payload
  };
};

var deleteAsk = exports.deleteAsk = function deleteAsk(payload) {
  return {
    type: Constants.DELETE,
    payload: payload
  };
};

var deleteFromHistory = exports.deleteFromHistory = function deleteFromHistory(payload) {
  return {
    type: Constants.DELETE_FROM_HISTORY,
    payload: payload
  };
};

var clearHistory = exports.clearHistory = function clearHistory() {
  return {
    type: Constants.CLEAR_HISTORY
  };
};

var addToHistory = exports.addToHistory = function addToHistory(payload) {
  return {
    type: Constants.ADD_HISTORY,
    payload: payload
  };
};

var clearScore = exports.clearScore = function clearScore() {
  return {
    type: Constants.CLEAR_SCORE
  };
};