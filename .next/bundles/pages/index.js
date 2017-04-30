
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

var _semanticUiReact = __webpack_require__(595);

var _actions = __webpack_require__(867);

var Actions = _interopRequireWildcard(_actions);

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

var _semanticUiReact = __webpack_require__(595);

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
    }, 'You Asked : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, ' ', item.time, ' '), _react2.default.createElement(_semanticUiReact.Card.Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }, item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
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
      reset = props.reset,
      pristine = props.pristine,
      submitting = props.submitting,
      errors = props.errors;

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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Cancel'), _react2.default.createElement(_semanticUiReact.Button.Or, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement(_semanticUiReact.Button, {
    positive: true,
    type: 'submit',
    disabled: pristine && errors === undefined || submitting && errors === undefined,
    onClick: function onClick(e) {
      e.preventDefault();
      handleSubmit();
      return reset('RejectionForm');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit')));
};

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(660);

var _semanticUiReact = __webpack_require__(595);

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

var _objectWithoutProperties2 = __webpack_require__(596);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(595);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js';

exports.default = function (_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ['input', 'meta']);

  var hasError = touched && error !== undefined;
  return _react2.default.createElement(_semanticUiReact.Form.Input, (0, _extends3.default)({
    label: input.name.toUpperCase(),
    type: 'text',
    fluid: true
  }, input, custom, {
    error: hasError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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

var _reduxForm = __webpack_require__(660);

var _form = __webpack_require__(1216);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(_ref) {
  var asked = _ref.asked,
      person = _ref.person;

  var errors = {};
  if (asked === undefined) errors.asked = 'Asked Field Required';
  if (person === undefined) errors.person = 'Person Field Required';
  return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'RejectionForm',
  validate: validate
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

var _semanticUiReact = __webpack_require__(595);

var _actions = __webpack_require__(867);

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
      }, 'Total ', points), _react2.default.createElement(_semanticUiReact.Button, {
        type: 'submit',
        onClick: clearScore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Clear Score'))))));
    }
  }]);

  return Main;
}(_react.Component);

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

var _reduxActions = __webpack_require__(620);

var _constants = __webpack_require__(619);

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

var _reduxForm = __webpack_require__(660);

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

var _reduxActions = __webpack_require__(620);

var _constants = __webpack_require__(619);

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

var _reduxActions = __webpack_require__(620);

var _index = __webpack_require__(619);

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

/***/ 619:
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

/***/ 867:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _reduxActions = __webpack_require__(620);

var _constants = __webpack_require__(619);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/ZmYxM2JkMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/ZmYxM2JkMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/ZmYxM2JkMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz9mZjEzYmQxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzP2ZmMTNiZDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzP2ZmMTNiZDEiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzP2ZmMTNiZDEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz9mZjEzYmQxIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzP2ZmMTNiZDEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz9mZjEzYmQxIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz9mZjEzYmQxIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzP2ZmMTNiZDEiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzP2ZmMTNiZDEiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz9mZjEzYmQxIiwid2VicGFjazovLy8uL3BhZ2VzP2ZmMTNiZDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNHOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0U7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUNBLDBEQUFNLE1BQUssWUFBVyxTQUFRO2dCQUE5QjtrQkFDQTtBQURBOzhDQUNNLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFHTDtBQUhLOzs7O0FBUkM7Ozs7QUFH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a0NBQWEsZ0NBQWEsUUFBUSxhOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHhDOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztBQUdQLElBQU0sUUFBUTt5QkFDWjs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLHFCQUNHOztnQkFBRDtrQkFDQTtBQURBO0FBQUEsc0JBQ0M7O2dCQUFEO2tCQUFBO0FBQUE7QUFBQTtBQUlKOztrQkFBeUIsaURBQU8sTyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5SZWplY3Rpb24gQXBwPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBsaXN0LCBoYW5kbGVBbnN3ZXIgfSkge1xuICByZXR1cm4gbGlzdC5sZW5ndGggPiAwID8gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHJhaXNlZCBjZW50ZXJlZCBrZXk9e2Fzay5wZXJzb24gKyBhc2submFtZSArIERhdGUubm93KCl9PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHthc2suYXNrZWR9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YSAvPlxuICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5Gb3IgOiB7YXNrLnBlcnNvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNvbG9yPXsncmVkJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5yZWplY3RlZCwgaW5kZXggfSl9XG4gICAgICAgICAgICAgID5SZWplY3RlZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY29sb3I9eydncmVlbid9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMuYWNjZXB0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+QWNjZXB0ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gICkgOiA8ZGl2IC8+O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlZ21lbnQsIENhcmQsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICAgICAgICAgICAgICAgICAgaGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgIGFkZFRvSGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5XG59KSA9PiBoaXN0b3J5Lmxlbmd0aCA+IDAgPyAoXG4gIDxDb250YWluZXIgZmx1aWQ+XG4gICAgPFNlZ21lbnQ+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbXBhY3RcbiAgICAgICAgZmxvYXRlZD17J3JpZ2h0J31cbiAgICAgICAgYmFzaWMgdHlwZT17J2J1dHRvbid9XG4gICAgICAgIG9uQ2xpY2s9e2NsZWFySGlzdG9yeX1cbiAgICAgID5cbiAgICAgICAgeydDbGVhciBIaXN0b3J5J31cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICBrZXk9e2l0ZW0gKyBEYXRlLm5vdygpICsgaXRlbS5wZXJzb24gKyBpdGVtLnRpbWV9XG4gICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nfVxuICAgICAgICA+XG4gICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHtpdGVtLmFza2VkfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuTWV0YT4ge2l0ZW0udGltZX0gPC9DYXJkLk1ldGE+XG4gICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+e2l0ZW0ucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPntpdGVtLnJlc3VsdH08L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgdHlwZT17J2J1dHRvbid9XG4gICAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tSGlzdG9yeShpdGVtLmlkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7J0RlbGV0ZSBGcm9tIEhpc3RvcnknfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgKSl9XG4gICAgPC9TZWdtZW50PlxuICA8L0NvbnRhaW5lcj5cbikgOiAoXG4gIDxkaXYgLz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vZm9ybUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcmVzZXQsIHByaXN0aW5lLCBzdWJtaXR0aW5nLCBlcnJvcnMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydhc2tlZCd9XG4gICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXsncGVyc29uJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCdSZWplY3Rpb25Gb3JtJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPkNhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbi5PciAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcG9zaXRpdmVcbiAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICBkaXNhYmxlZD17cHJpc3RpbmUgJiYgZXJyb3JzID09PSB1bmRlZmluZWQgfHwgc3VibWl0dGluZyAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIC4uLmN1c3RvbSB9KSA9PiB7XG4gIGNvbnN0IGhhc0Vycm9yID0gdG91Y2hlZCAmJiBlcnJvciAhPT0gdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgIDxGb3JtLklucHV0XG4gICAgICBsYWJlbD17aW5wdXQubmFtZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgZmx1aWRcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIHsuLi5jdXN0b219XG4gICAgICBlcnJvcj17aGFzRXJyb3J9XG4gICAgLz5cbiAgKTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuY29uc3QgdmFsaWRhdGUgPSAoeyBhc2tlZCwgcGVyc29uIH0pID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge307XG4gIGlmIChhc2tlZCA9PT0gdW5kZWZpbmVkKSBlcnJvcnMuYXNrZWQgPSAnQXNrZWQgRmllbGQgUmVxdWlyZWQnO1xuICBpZiAocGVyc29uID09PSB1bmRlZmluZWQpIGVycm9ycy5wZXJzb24gPSAnUGVyc29uIEZpZWxkIFJlcXVpcmVkJztcbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdSZWplY3Rpb25Gb3JtJyxcbiAgdmFsaWRhdGVcbn0pKEZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQW5zd2VyID0gdGhpcy5oYW5kbGVBbnN3ZXIuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgeyBSZWplY3Rpb25Gb3JtIH0gPSB0aGlzLnByb3BzLmZvcm07XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFkZChSZWplY3Rpb25Gb3JtLnZhbHVlcyk7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKGV2ZW50LCB7IHZhbHVlLCBhbnN3ZXIsIGluZGV4IH0pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcmVqZWN0ZWQsIGFjY2VwdGVkLCBkZWxldGVBc2ssIGFkZFRvSGlzdG9yeSB9ID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgIGlmIChhbnN3ZXIgPT09IEFjdGlvbnMucmVqZWN0ZWQpIHJlamVjdGVkKCk7XG4gICAgZWxzZSBhY2NlcHRlZCgpO1xuICAgIGFkZFRvSGlzdG9yeSh7IHRpbWU6IG1vbWVudCgpLmZvcm1hdCgnTExMTCcpLCB2YWx1ZSwgYW5zd2VyIH0pO1xuICAgIGRlbGV0ZUFzayhpbmRleCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3QsXG4gICAgICBwb2ludHMsXG4gICAgICBoaXN0b3J5LFxuICAgICBhY3Rpb25zOiB7IGFkZFRvSGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBkZWxldGVGcm9tSGlzdG9yeSwgY2xlYXJTY29yZSB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPGgxPnsnUmVqZWN0aW9uIEdhbWUnfTwvaDE+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxSZWplY3Rpb25Gb3JtIGNsYXNzTmFtZT17J21haW4tY29udGFpbmVyJ30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxMaXN0IGhhbmRsZUFuc3dlcj17dGhpcy5oYW5kbGVBbnN3ZXJ9IGxpc3Q9e2xpc3R9IGtleT17RGF0ZS5ub3coKX0gLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxIaXN0b3J5XG4gICAgICAgICAgICAgIGhpc3Rvcnk9e2hpc3Rvcnl9XG4gICAgICAgICAgICAgIGFkZFRvSGlzdG9yeT17YWRkVG9IaXN0b3J5fVxuICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk9e2NsZWFySGlzdG9yeX1cbiAgICAgICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnk9e2RlbGV0ZUZyb21IaXN0b3J5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICA8ZGl2PlRvdGFsIHtwb2ludHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT17J3N1Ym1pdCd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGVhclNjb3JlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnQ2xlYXIgU2NvcmUnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBsaXN0OiBzdGF0ZS5saXN0LFxuICBwb2ludHM6IHN0YXRlLnBvaW50cyxcbiAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcbiAgZm9ybTogc3RhdGUuZm9ybVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7IGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaCkgfSk7XG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgY29uc3QgaGlzdG9yeUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBhc2tlZDogcGF5bG9hZC52YWx1ZS5hc2tlZCxcbiAgICAgIHBlcnNvbjogcGF5bG9hZC52YWx1ZS5wZXJzb24sXG4gICAgICB0aW1lOiBwYXlsb2FkLnRpbWUsXG4gICAgICByZXN1bHQ6IHBheWxvYWQuYW5zd2VyKCkudHlwZSxcbiAgICAgIGlkOiBzdGF0ZS5yZWR1Y2UoKG1heElkLCBjdXJyKSA9PiBNYXRoLm1heChtYXhJZCwgY3Vyci5pZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gW2hpc3RvcnlJdGVtLCAuLi5zdGF0ZV07XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBbXSxcbiAgW0FjdGlvbnMuREVMRVRFX0ZST01fSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHN0YXRlLmZpbHRlcigoaGlzdCkgPT4gaGlzdC5pZCAhPT0gcGF5bG9hZClcbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9oaXN0b3J5LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHBvaW50cyBmcm9tICcuL3BvaW50cyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi9oaXN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdCxcbiAgcG9pbnRzLFxuICBoaXN0b3J5LFxuICBmb3JtOiBmb3JtUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcbiAgICAgIGZpbHRlcjogJ25vbmUnLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGFzaykgPT4gTWF0aC5tYXgoYXNrLmlkLCBtYXhJZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLnN0YXRlLCByZXF1ZXN0XTtcbiAgfSxcbiAgW0FjdGlvbnMuREVMRVRFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKGFza3MgPT4gc3RhdGVbcGF5bG9hZF0uaWQgIT09IGFza3MuaWQpXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblxuICBbQWN0aW9ucy5SRUpFQ1RFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTA7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9LFxuICBbQWN0aW9ucy5BQ0NFUFRFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX1NDT1JFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gMCxcblxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcG9pbnRzLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbWlkZGxld2FyZSA9IFtdO1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgLy8gU3BlY2lmeSBleHRlbnNpb27igJlzIG9wdGlvbnMgbGlrZSBuYW1lLCBhY3Rpb25zQmxhY2tsaXN0LCBhY3Rpb25zQ3JlYXRvcnMsIHNlcmlhbGl6ZS4uLlxuICAgIH0pIDogY29tcG9zZTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gIC8vIG90aGVyIHN0b3JlIGVuaGFuY2VycyBpZiBhbnlcbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IEFERCA9ICdBREQnO1xuZXhwb3J0IGNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xuZXhwb3J0IGNvbnN0IEVESVQgPSAnRURJVCc7XG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEID0gJ0FDQ0VQVEVEJztcbmV4cG9ydCBjb25zdCBBRERfSElTVE9SWSA9ICdBRERfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfSElTVE9SWSA9ICdDTEVBUl9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9ISVNUT1JZID0gJ0RFTEVURV9GUk9NX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NDT1JFID0gJ0NMRUFSX1NDT1JFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREKTtcbmV4cG9ydCBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLlJFSkVDVEVEKTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFDQ0VQVEVEKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuRURJVCk7XG5leHBvcnQgY29uc3QgZGVsZXRlQXNrID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuREVMRVRFLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgY2xlYXJIaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQ0xFQVJfSElTVE9SWSk7XG5leHBvcnQgY29uc3QgYWRkVG9IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREX0hJU1RPUlkpO1xuZXhwb3J0IGNvbnN0IGNsZWFyU2NvcmUgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5DTEVBUl9TQ09SRSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb250YWluZXJzL01haW5Db250YWluZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxNYWluIC8+XG4gIDwvZGl2PlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        