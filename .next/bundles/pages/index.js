
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

var _actions = __webpack_require__(867);

var Actions = _interopRequireWildcard(_actions);

var _semanticUiReact = __webpack_require__(595);

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
    disabled: pristine && errors === undefined || submitting && errors === undefined,
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
        onClick: clearScore, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Clear Score'))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/N2Y3N2YxZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/N2Y3N2YxZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/N2Y3N2YxZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz83Zjc3ZjFlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzdmNzdmMWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzdmNzdmMWUiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzdmNzdmMWUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz83Zjc3ZjFlIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzdmNzdmMWUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz83Zjc3ZjFlIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz83Zjc3ZjFlIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzdmNzdmMWUiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzPzdmNzdmMWUiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz83Zjc3ZjFlIiwid2VicGFjazovLy8uL3BhZ2VzPzdmNzdmMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNHOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0U7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUNBLDBEQUFNLE1BQUssWUFBVyxTQUFRO2dCQUE5QjtrQkFDQTtBQURBOzhDQUNNLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFHTDtBQUhLOzs7O0FBUkM7Ozs7QUFH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QUFNLHNDQUFlLGdDQUFhLFFBQ3pDO0FBQU8sSUFBTSxrQ0FBYSxnQ0FBYSxRQUFRLGE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeEM7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBR1AsSUFBTSxRQUFRO3lCQUNaOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0c7O2dCQUFEO2tCQUNBO0FBREE7QUFBQSxzQkFDQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBO0FBSUo7O2tCQUF5QixpREFBTyxPIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlJlamVjdGlvbiBBcHA8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjIvc2VtYW50aWMubWluLmNzc1wiPjwvbGluaz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgU2VnbWVudCwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgbGlzdCwgaGFuZGxlQW5zd2VyIH0pIHtcbiAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAge2xpc3QubWFwKChhc2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENhcmQgcmFpc2VkPXt0cnVlfSBjZW50ZXJlZD17dHJ1ZX0ga2V5PXthc2sucGVyc29uICsgYXNrLm5hbWUgKyBEYXRlLm5vdygpfT5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIDoge2Fzay5hc2tlZH08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGE+PC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+Rm9yIDoge2Fzay5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMucmVqZWN0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICAgID5SZWplY3RlZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgICBjb2xvcj17J2dyZWVuJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHsgdmFsdWU6IGFzaywgYW5zd2VyOiBBY3Rpb25zLmFjY2VwdGVkLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICA+QWNjZXB0ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKSA6IDxkaXYgLz5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWdtZW50LCBDYXJkLCBDb250YWluZXIsIEJ1dHRvbiAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gICAgICAgICAgICAgICAgICBoaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgYWRkVG9IaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnlcbn0pID0+IGhpc3RvcnkubGVuZ3RoID4gMCA/IChcbiAgPENvbnRhaW5lciBmbHVpZD5cbiAgPFNlZ21lbnQ+XG4gICAgPEJ1dHRvbiBjb21wYWN0IGZsb2F0ZWQ9eydyaWdodCd9IGJhc2ljIHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXtjbGVhckhpc3Rvcnl9PnsnQ2xlYXIgSGlzdG9yeSd9PC9CdXR0b24+XG4gICAgPGJyIC8+XG4gICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICBrZXk9e2l0ZW0gKyBEYXRlLm5vdygpICsgaXRlbS5wZXJzb24gKyBpdGVtLnRpbWV9XG4gICAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbicgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Zb3UgQXNrZWQgOiB7aXRlbS5hc2tlZH08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPENhcmQuTWV0YT4ge2l0ZW0udGltZX0gPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj57aXRlbS5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT57aXRlbS5yZXN1bHR9PC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZyb21IaXN0b3J5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0RlbGV0ZSBGcm9tIEhpc3RvcnknfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICA8L1NlZ21lbnQ+XG4gIDwvQ29udGFpbmVyPlxuKSA6IChcbiAgPGRpdiAvPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGlzdG9yeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9mb3JtQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlc2V0LCBwcmlzdGluZSwgc3VibWl0dGluZywgZXJyb3JzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXsnYXNrZWQnfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J3BlcnNvbid9XG4gICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24uR3JvdXA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXNldCgnUmVqZWN0aW9uRm9ybScpO1xuICAgICAgICB9fT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbi5PciAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcG9zaXRpdmVcbiAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICBkaXNhYmxlZD17cHJpc3RpbmUgJiYgZXJyb3JzID09PSB1bmRlZmluZWQgfHwgc3VibWl0dGluZyAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIC4uLmN1c3RvbSB9KSA9PiB7XG4gIGNvbnN0IGhhc0Vycm9yID0gdG91Y2hlZCAmJiBlcnJvciAhPT0gdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgIGxhYmVsPXtpbnB1dC5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgIHsuLi5jdXN0b219XG4gICAgICAgICAgZXJyb3I9e2hhc0Vycm9yfVxuICAgICAgICAvPlxuICApO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm1Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh7IGFza2VkLCBwZXJzb24gfSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgaWYgKGFza2VkID09PSB1bmRlZmluZWQpIGVycm9ycy5hc2tlZCA9ICdBc2tlZCBGaWVsZCBSZXF1aXJlZCc7XG4gIGlmIChwZXJzb24gPT09IHVuZGVmaW5lZCkgZXJyb3JzLnBlcnNvbiA9ICdQZXJzb24gRmllbGQgUmVxdWlyZWQnO1xuICByZXR1cm4gZXJyb3JzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnUmVqZWN0aW9uRm9ybScsXG4gIHZhbGlkYXRlXG59KShGb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBTZWdtZW50LCBEaXZpZGVyICwgQ29udGFpbmVyLCBSb3d9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQW5zd2VyID0gdGhpcy5oYW5kbGVBbnN3ZXIuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgeyBSZWplY3Rpb25Gb3JtIH0gPSB0aGlzLnByb3BzLmZvcm07XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFkZChSZWplY3Rpb25Gb3JtLnZhbHVlcyk7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKGV2ZW50LCB7IHZhbHVlLCBhbnN3ZXIsIGluZGV4IH0pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcmVqZWN0ZWQsIGFjY2VwdGVkLCBkZWxldGVBc2ssIGFkZFRvSGlzdG9yeSB9ID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgIGlmIChhbnN3ZXIgPT09IEFjdGlvbnMucmVqZWN0ZWQpIHJlamVjdGVkKCk7XG4gICAgZWxzZSBhY2NlcHRlZCgpO1xuICAgIGFkZFRvSGlzdG9yeSh7IHRpbWU6IG1vbWVudCgpLmZvcm1hdCgnTExMTCcpLCB2YWx1ZSwgYW5zd2VyIH0pO1xuICAgIGRlbGV0ZUFzayhpbmRleCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3QsXG4gICAgICBwb2ludHMsXG4gICAgICBoaXN0b3J5LFxuICAgICBhY3Rpb25zOiB7IGFkZFRvSGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBkZWxldGVGcm9tSGlzdG9yeSwgY2xlYXJTY29yZSB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgIDxoMT57J1JlamVjdGlvbiBHYW1lJ308L2gxPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgPExpc3QgaGFuZGxlQW5zd2VyPXt0aGlzLmhhbmRsZUFuc3dlcn0gbGlzdD17bGlzdH0ga2V5PXtEYXRlLm5vdygpfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgICAgICAgIGhpc3Rvcnk9e2hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgYWRkVG9IaXN0b3J5PXthZGRUb0hpc3Rvcnl9XG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5PXtjbGVhckhpc3Rvcnl9XG4gICAgICAgICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnk9e2RlbGV0ZUZyb21IaXN0b3J5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgIDxkaXY+VG90YWwge3BvaW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17J3N1Ym1pdCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyU2NvcmV9PlxuICAgICAgICAgICAgICAgICAgICB7J0NsZWFyIFNjb3JlJ31cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IHN0eWxlcyA9IHtcblxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBsaXN0OiBzdGF0ZS5saXN0LFxuICBwb2ludHM6IHN0YXRlLnBvaW50cyxcbiAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcbiAgZm9ybTogc3RhdGUuZm9ybVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7IGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaCkgfSk7XG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgY29uc3QgaGlzdG9yeUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBhc2tlZDogcGF5bG9hZC52YWx1ZS5hc2tlZCxcbiAgICAgIHBlcnNvbjogcGF5bG9hZC52YWx1ZS5wZXJzb24sXG4gICAgICB0aW1lOiBwYXlsb2FkLnRpbWUsXG4gICAgICByZXN1bHQ6IHBheWxvYWQuYW5zd2VyKCkudHlwZSxcbiAgICAgIGlkOiBzdGF0ZS5yZWR1Y2UoKG1heElkLCBjdXJyKSA9PiBNYXRoLm1heChtYXhJZCwgY3Vyci5pZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gW2hpc3RvcnlJdGVtLCAuLi5zdGF0ZV07XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBbXSxcbiAgW0FjdGlvbnMuREVMRVRFX0ZST01fSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHN0YXRlLmZpbHRlcigoaGlzdCkgPT4gaGlzdC5pZCAhPT0gcGF5bG9hZClcbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9oaXN0b3J5LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHBvaW50cyBmcm9tICcuL3BvaW50cyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi9oaXN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdCxcbiAgcG9pbnRzLFxuICBoaXN0b3J5LFxuICBmb3JtOiBmb3JtUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcbiAgICAgIGZpbHRlcjogJ25vbmUnLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGFzaykgPT4gTWF0aC5tYXgoYXNrLmlkLCBtYXhJZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLnN0YXRlLCByZXF1ZXN0XTtcbiAgfSxcbiAgW0FjdGlvbnMuREVMRVRFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKGFza3MgPT4gc3RhdGVbcGF5bG9hZF0uaWQgIT09IGFza3MuaWQpXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblxuICBbQWN0aW9ucy5SRUpFQ1RFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTA7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9LFxuICBbQWN0aW9ucy5BQ0NFUFRFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX1NDT1JFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gMCxcblxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcG9pbnRzLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbWlkZGxld2FyZSA9IFtdO1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgLy8gU3BlY2lmeSBleHRlbnNpb27igJlzIG9wdGlvbnMgbGlrZSBuYW1lLCBhY3Rpb25zQmxhY2tsaXN0LCBhY3Rpb25zQ3JlYXRvcnMsIHNlcmlhbGl6ZS4uLlxuICAgIH0pIDogY29tcG9zZTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gIC8vIG90aGVyIHN0b3JlIGVuaGFuY2VycyBpZiBhbnlcbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IEFERCA9ICdBREQnO1xuZXhwb3J0IGNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xuZXhwb3J0IGNvbnN0IEVESVQgPSAnRURJVCc7XG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEID0gJ0FDQ0VQVEVEJztcbmV4cG9ydCBjb25zdCBBRERfSElTVE9SWSA9ICdBRERfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfSElTVE9SWSA9ICdDTEVBUl9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9ISVNUT1JZID0gJ0RFTEVURV9GUk9NX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NDT1JFID0gJ0NMRUFSX1NDT1JFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREKTtcbmV4cG9ydCBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLlJFSkVDVEVEKTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFDQ0VQVEVEKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuRURJVCk7XG5leHBvcnQgY29uc3QgZGVsZXRlQXNrID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuREVMRVRFLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgY2xlYXJIaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQ0xFQVJfSElTVE9SWSk7XG5leHBvcnQgY29uc3QgYWRkVG9IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREX0hJU1RPUlkpO1xuZXhwb3J0IGNvbnN0IGNsZWFyU2NvcmUgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5DTEVBUl9TQ09SRSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb250YWluZXJzL01haW5Db250YWluZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxNYWluIC8+XG4gIDwvZGl2PlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        