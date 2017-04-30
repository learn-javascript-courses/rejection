
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Rejection App'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js"); } } })();

/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(866);

var Actions = _interopRequireWildcard(_actions);

var _semanticUiReact = __webpack_require__(929);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js';
function List(_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;

  return list.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, list.map(function (ask, index) {
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.person + ask.name + Date.now(), __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, 'You Asked : ', ask.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }), _react2.default.createElement(_semanticUiReact.Card.Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, 'For : ', ask.person)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'red',
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.rejected, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, 'Rejected'), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'green',
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, 'Accepted')));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ }),

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(929);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js';

exports.default = function (_ref) {
  var history = _ref.history,
      clearHistory = _ref.clearHistory,
      addToHistory = _ref.addToHistory,
      deleteFromHistory = _ref.deleteFromHistory;
  return history.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, { fluid: true, centered: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Segment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { compact: true, floated: 'right', basic: true, type: 'button', onClick: clearHistory, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Clear History'), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), history.map(function (item, index) {
    return _react2.default.createElement(_semanticUiReact.Card, {
      centered: true,
      key: item + Date.now() + item.person + item.time,
      color: item.result === 'REJECTED' ? 'red' : 'green',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, 'You Asked : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, ' ', item.time, ' '), _react2.default.createElement(_semanticUiReact.Card.Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
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
        lineNumber: 24
      }
    }, 'Delete From History'));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); } } })();

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var handleSubmit = props.handleSubmit,
      reset = props.reset;

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

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(620);

var _semanticUiReact = __webpack_require__(929);

var _formComponent = __webpack_require__(1217);

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); } } })();

/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(595);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(929);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js';

exports.default = function (_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'meta']);

  return _react2.default.createElement(_semanticUiReact.Form.Input, (0, _extends3.default)({
    label: input.name.toUpperCase(),
    type: 'text',
    fluid: true
  }, input, custom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js"); } } })();

/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(620);

var _form = __webpack_require__(1216);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxForm.reduxForm)({
  form: 'RejectionForm'
})(_form2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/index.js"); } } })();

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(583);

var _reactRedux = __webpack_require__(582);

var _moment = __webpack_require__(562);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(929);

var _actions = __webpack_require__(866);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(1214);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(1218);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(1215);

var _history2 = _interopRequireDefault(_history);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js';


var Main = function (_Component) {
  (0, _inherits3.default)(Main, _Component);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleAnswer = _this.handleAnswer.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Main, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      var RejectionForm = this.props.form.RejectionForm;

      this.props.actions.add(RejectionForm.values);
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(event, _ref) {
      var value = _ref.value,
          answer = _ref.answer,
          index = _ref.index;

      event.preventDefault();
      var _props$actions = this.props.actions,
          rejected = _props$actions.rejected,
          accepted = _props$actions.accepted,
          deleteAsk = _props$actions.deleteAsk,
          addToHistory = _props$actions.addToHistory;

      if (answer === Actions.rejected) rejected();else accepted();
      addToHistory({ time: (0, _moment2.default)().format('LLLL'), value: value, answer: answer });
      deleteAsk(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          list = _props.list,
          points = _props.points,
          history = _props.history,
          _props$actions2 = _props.actions,
          addToHistory = _props$actions2.addToHistory,
          clearHistory = _props$actions2.clearHistory,
          deleteFromHistory = _props$actions2.deleteFromHistory,
          clearScore = _props$actions2.clearScore;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Rejection Game')), _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now(), __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Total ', points, _react2.default.createElement(_semanticUiReact.Button, {
        type: 'submit',
        onClick: clearScore, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Clear Score')))))));
    }
  }]);

  return Main;
}(_react.Component);

var styles = {};
var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list,
    points: state.points,
    history: state.history,
    form: state.form
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(Actions, dispatch) };
};

var MainContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);
exports.default = MainContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js"); } } })();

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(631);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(619);

var _constants = __webpack_require__(618);

var Actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = [];

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.ADD_HISTORY, function (state, _ref) {
  var payload = _ref.payload;

  var historyItem = (0, _assign2.default)({}, {
    asked: payload.value.asked,
    person: payload.value.person,
    time: payload.time,
    result: payload.answer().type,
    id: state.reduce(function (maxId, curr) {
      return Math.max(maxId, curr.id);
    }, -1) + 1
  });
  return [historyItem].concat((0, _toConsumableArray3.default)(state));
}), (0, _defineProperty3.default)(_handleActions, Actions.CLEAR_HISTORY, function (state, _ref2) {
  var payload = _ref2.payload;
  return [];
}), (0, _defineProperty3.default)(_handleActions, Actions.DELETE_FROM_HISTORY, function (state, _ref3) {
  var payload = _ref3.payload;
  return state.filter(function (hist) {
    return hist.id !== payload;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/history.js"); } } })();

/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(583);

var _reduxForm = __webpack_require__(620);

var _points = __webpack_require__(1223);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(1222);

var _list2 = _interopRequireDefault(_list);

var _history = __webpack_require__(1220);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  list: _list2.default,
  points: _points2.default,
  history: _history2.default,
  form: _reduxForm.reducer
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/index.js"); } } })();

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(631);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(619);

var _constants = __webpack_require__(618);

var Actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = [];

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.ADD, function (state, _ref) {
  var payload = _ref.payload;

  var request = (0, _assign2.default)(payload, {
    filter: 'none',
    id: state.reduce(function (maxId, ask) {
      return Math.max(ask.id, maxId);
    }, -1) + 1
  });
  return [].concat((0, _toConsumableArray3.default)(state), [request]);
}), (0, _defineProperty3.default)(_handleActions, Actions.DELETE, function (state, _ref2) {
  var payload = _ref2.payload;
  return state.filter(function (asks) {
    return state[payload].id !== asks.id;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/list.js"); } } })();

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(631);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(619);

var _index = __webpack_require__(618);

var Actions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = 0;
exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.REJECTED, function (state, _ref) {
  var payload = _ref.payload;

  var total = state + 10;
  return total;
}), (0, _defineProperty3.default)(_handleActions, Actions.ACCEPTED, function (state, _ref2) {
  var payload = _ref2.payload;

  var total = state + 1;
  return total;
}), (0, _defineProperty3.default)(_handleActions, Actions.CLEAR_SCORE, function (state, _ref3) {
  var payload = _ref3.payload;
  return 0;
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/points.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/points.js"); } } })();

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(96);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(583);

var _reduxDevtoolsExtension = __webpack_require__(1240);

var _reducers = __webpack_require__(1221);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [];
var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware));

exports.default = function (initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/store/index.js"); } } })();

/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(974);


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD = exports.ADD = 'ADD';
var DELETE = exports.DELETE = 'DELETE';
var EDIT = exports.EDIT = 'EDIT';
var REJECTED = exports.REJECTED = 'REJECTED';
var ACCEPTED = exports.ACCEPTED = 'ACCEPTED';
var ADD_HISTORY = exports.ADD_HISTORY = 'ADD_HISTORY';
var CLEAR_HISTORY = exports.CLEAR_HISTORY = 'CLEAR_HISTORY';
var DELETE_FROM_HISTORY = exports.DELETE_FROM_HISTORY = 'DELETE_FROM_HISTORY';
var CLEAR_SCORE = exports.CLEAR_SCORE = 'CLEAR_SCORE';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/constants/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/constants/index.js"); } } })();

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _reduxActions = __webpack_require__(619);

var _constants = __webpack_require__(618);

var Actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var add = exports.add = (0, _reduxActions.createAction)(Actions.ADD);
var rejected = exports.rejected = (0, _reduxActions.createAction)(Actions.REJECTED);
var accepted = exports.accepted = (0, _reduxActions.createAction)(Actions.ACCEPTED);
var edit = exports.edit = (0, _reduxActions.createAction)(Actions.EDIT);
var deleteAsk = exports.deleteAsk = (0, _reduxActions.createAction)(Actions.DELETE, function (id) {
  return id;
});
var deleteFromHistory = exports.deleteFromHistory = (0, _reduxActions.createAction)(Actions.DELETE_FROM_HISTORY, function (id) {
  return id;
});
var clearHistory = exports.clearHistory = (0, _reduxActions.createAction)(Actions.CLEAR_HISTORY);
var addToHistory = exports.addToHistory = (0, _reduxActions.createAction)(Actions.ADD_HISTORY);
var clearScore = exports.clearScore = (0, _reduxActions.createAction)(Actions.CLEAR_SCORE);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/actions/index.js"); } } })();

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(1212);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(1224);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(1219);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(1213);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/pages/index.js?entry';


var Index = function Index() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_MainContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[1369]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/OGFhYTI0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/OGFhYTI0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/OGFhYTI0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz84YWFhMjRjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzhhYWEyNGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzhhYWEyNGMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzhhYWEyNGMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz84YWFhMjRjIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzhhYWEyNGMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz84YWFhMjRjIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz84YWFhMjRjIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzhhYWEyNGMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzPzhhYWEyNGMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz84YWFhMjRjIiwid2VicGFjazovLy8uL3BhZ2VzPzhhYWEyNGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNHOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0U7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUNBLDBEQUFNLE1BQUssWUFBVyxTQUFRO2dCQUE5QjtrQkFDQTtBQURBOzhDQUNNLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFHTDtBQUhLOzs7O0FBUkM7Ozs7QUFH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eUIsaURBQU8sTyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5SZWplY3Rpb24gQXBwPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIHJldHVybiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHJhaXNlZD17dHJ1ZX0gY2VudGVyZWQ9e3RydWV9IGtleT17YXNrLnBlcnNvbiArIGFzay5uYW1lICsgRGF0ZS5ub3coKX0+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHthc2suYXNrZWR9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPjwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPkZvciA6IHthc2sucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsncmVkJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHsgdmFsdWU6IGFzaywgYW5zd2VyOiBBY3Rpb25zLnJlamVjdGVkLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICA+UmVqZWN0ZWRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgY29sb3I9eydncmVlbid9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5hY2NlcHRlZCwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgPkFjY2VwdGVkPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgPC9Db250YWluZXI+XG4gICkgOiA8ZGl2IC8+XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VnbWVudCwgQ2FyZCwgQ29udGFpbmVyLCBCdXR0b24gIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICAgICAgICAgICAgICAgICAgaGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgIGFkZFRvSGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5XG59KSA9PiBoaXN0b3J5Lmxlbmd0aCA+IDAgPyAoXG4gIDxDb250YWluZXIgZmx1aWQgY2VudGVyZWQ+XG4gIDxTZWdtZW50PlxuICAgIDxCdXR0b24gY29tcGFjdCBmbG9hdGVkPXsncmlnaHQnfSBiYXNpYyB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2xlYXJIaXN0b3J5fT57J0NsZWFyIEhpc3RvcnknfTwvQnV0dG9uPlxuICAgIDxiciAvPlxuICAgICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAga2V5PXtpdGVtICsgRGF0ZS5ub3coKSArIGl0ZW0ucGVyc29uICsgaXRlbS50aW1lfVxuICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIDoge2l0ZW0uYXNrZWR9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkLk1ldGE+IHtpdGVtLnRpbWV9IDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+e2l0ZW0ucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+e2l0ZW0ucmVzdWx0fTwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICB0eXBlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tSGlzdG9yeShpdGVtLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeydEZWxldGUgRnJvbSBIaXN0b3J5J31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApKX1cbiAgPC9TZWdtZW50PlxuICA8L0NvbnRhaW5lcj5cbikgOiAoXG4gIDxkaXYgLz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vZm9ybUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J2Fza2VkJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydwZXJzb24nfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgfX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24uT3IgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHBvc2l0aXZlXG4gICAgICAgICAgdHlwZT17J3N1Ym1pdCd9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCdSZWplY3Rpb25Gb3JtJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaW5wdXQsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgLi4uY3VzdG9tIH0pID0+IChcbiAgICA8Rm9ybS5JbnB1dFxuICAgICAgbGFiZWw9e2lucHV0Lm5hbWUudG9VcHBlckNhc2UoKX1cbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGZsdWlkXG4gICAgICB7Li4uaW5wdXR9IHsuLi5jdXN0b219XG4gICAgLz5cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnUmVqZWN0aW9uRm9ybSdcbn0pKEZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFNlZ21lbnQsIERpdmlkZXIgLCBDb250YWluZXIsIFJvd30gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCc7XG5pbXBvcnQgUmVqZWN0aW9uRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0nO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9oaXN0b3J5JztcblxuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBbnN3ZXIgPSB0aGlzLmhhbmRsZUFuc3dlci5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBjb25zdCB7IFJlamVjdGlvbkZvcm0gfSA9IHRoaXMucHJvcHMuZm9ybTtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuYWRkKFJlamVjdGlvbkZvcm0udmFsdWVzKTtcbiAgfVxuICBoYW5kbGVBbnN3ZXIoZXZlbnQsIHsgdmFsdWUsIGFuc3dlciwgaW5kZXggfSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyByZWplY3RlZCwgYWNjZXB0ZWQsIGRlbGV0ZUFzaywgYWRkVG9IaXN0b3J5IH0gPSB0aGlzLnByb3BzLmFjdGlvbnM7XG4gICAgaWYgKGFuc3dlciA9PT0gQWN0aW9ucy5yZWplY3RlZCkgcmVqZWN0ZWQoKTtcbiAgICBlbHNlIGFjY2VwdGVkKCk7XG4gICAgYWRkVG9IaXN0b3J5KHsgdGltZTogbW9tZW50KCkuZm9ybWF0KCdMTExMJyksIHZhbHVlLCBhbnN3ZXIgfSk7XG4gICAgZGVsZXRlQXNrKGluZGV4KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdCxcbiAgICAgIHBvaW50cyxcbiAgICAgIGhpc3RvcnksXG4gICAgIGFjdGlvbnM6IHsgYWRkVG9IaXN0b3J5LCBjbGVhckhpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5LCBjbGVhclNjb3JlIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgPGgxPnsnUmVqZWN0aW9uIEdhbWUnfTwvaDE+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxSZWplY3Rpb25Gb3JtIGNsYXNzTmFtZT17J21haW4tY29udGFpbmVyJ30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93KCl9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDxIaXN0b3J5XG4gICAgICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgICAgICBhZGRUb0hpc3Rvcnk9e2FkZFRvSGlzdG9yeX1cbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk9e2NsZWFySGlzdG9yeX1cbiAgICAgICAgICAgICAgICBkZWxldGVGcm9tSGlzdG9yeT17ZGVsZXRlRnJvbUhpc3Rvcnl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPGRpdj5Ub3RhbCB7cG9pbnRzfVxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xlYXJTY29yZX0+XG4gICAgICAgICAgICAgICAgICAgIHsnQ2xlYXIgU2NvcmUnfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuY29uc3Qgc3R5bGVzID0ge1xuXG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGxpc3Q6IHN0YXRlLmxpc3QsXG4gIHBvaW50czogc3RhdGUucG9pbnRzLFxuICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxuICBmb3JtOiBzdGF0ZS5mb3JtXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHsgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KTtcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERfSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIGFza2VkOiBwYXlsb2FkLnZhbHVlLmFza2VkLFxuICAgICAgcGVyc29uOiBwYXlsb2FkLnZhbHVlLnBlcnNvbixcbiAgICAgIHRpbWU6IHBheWxvYWQudGltZSxcbiAgICAgIHJlc3VsdDogcGF5bG9hZC5hbnN3ZXIoKS50eXBlLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGN1cnIpID0+IE1hdGgubWF4KG1heElkLCBjdXJyLmlkKSwgLTEpICsgMVxuICAgIH0pO1xuICAgIHJldHVybiBbaGlzdG9yeUl0ZW0sIC4uLnN0YXRlXTtcbiAgfSxcbiAgW0FjdGlvbnMuQ0xFQVJfSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IFtdLFxuICBbQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKChoaXN0KSA9PiBoaXN0LmlkICE9PSBwYXlsb2FkKVxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2hpc3RvcnkuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vcG9pbnRzJztcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGhpc3RvcnksXG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE9iamVjdC5hc3NpZ24ocGF5bG9hZCwge1xuICAgICAgZmlsdGVyOiAnbm9uZScsXG4gICAgICBpZDogc3RhdGUucmVkdWNlKChtYXhJZCwgYXNrKSA9PiBNYXRoLm1heChhc2suaWQsIG1heElkKSwgLTEpICsgMVxuICAgIH0pO1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHJlcXVlc3RdO1xuICB9LFxuICBbQWN0aW9ucy5ERUxFVEVdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBzdGF0ZVtwYXlsb2FkXS5pZCAhPT0gYXNrcy5pZClcblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuXG4gIFtBY3Rpb25zLlJFSkVDVEVEXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxMDtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkFDQ0VQVEVEXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxO1xuICAgIHJldHVybiB0b3RhbDtcbiAgfSxcbiAgW0FjdGlvbnMuQ0xFQVJfU0NPUkVdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiAwLFxuXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9wb2ludHMuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW107XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7XG4gICAgICAvLyBTcGVjaWZ5IGV4dGVuc2lvbuKAmXMgb3B0aW9ucyBsaWtlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycywgc2VyaWFsaXplLi4uXG4gICAgfSkgOiBjb21wb3NlO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgLy8gb3RoZXIgc3RvcmUgZW5oYW5jZXJzIGlmIGFueVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgQUREID0gJ0FERCc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XG5leHBvcnQgY29uc3QgRURJVCA9ICdFRElUJztcbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuZXhwb3J0IGNvbnN0IEFERF9ISVNUT1JZID0gJ0FERF9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBDTEVBUl9ISVNUT1JZID0gJ0NMRUFSX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0hJU1RPUlkgPSAnREVMRVRFX0ZST01fSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU0NPUkUgPSAnQ0xFQVJfU0NPUkUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BREQpO1xuZXhwb3J0IGNvbnN0IHJlamVjdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuUkVKRUNURUQpO1xuZXhwb3J0IGNvbnN0IGFjY2VwdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUNDRVBURUQpO1xuZXhwb3J0IGNvbnN0IGVkaXQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5FRElUKTtcbmV4cG9ydCBjb25zdCBkZWxldGVBc2sgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEUsIGlkID0+IGlkKTtcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tSGlzdG9yeSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkRFTEVURV9GUk9NX0hJU1RPUlksIGlkID0+IGlkKTtcbmV4cG9ydCBjb25zdCBjbGVhckhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5DTEVBUl9ISVNUT1JZKTtcbmV4cG9ydCBjb25zdCBhZGRUb0hpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BRERfSElTVE9SWSk7XG5leHBvcnQgY29uc3QgY2xlYXJTY29yZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkNMRUFSX1NDT1JFKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPE1haW4gLz5cbiAgPC9kaXY+XG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        