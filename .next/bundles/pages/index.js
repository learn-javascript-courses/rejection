
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1218:
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js"); } } })();

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

var _actions = __webpack_require__(871);

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
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.person + ask.asked + Date.now(), __source: {
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
    }, 'You Asked : ', ask.asked.toUpperCase()), _react2.default.createElement(_semanticUiReact.Card.Meta, {
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
      fluid: true,
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
      fluid: true,
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Accepted')));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); } } })();

/***/ }),

/***/ 1221:
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(664);

var _semanticUiReact = __webpack_require__(599);

var _formComponent = __webpack_require__(1222);

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); } } })();

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(600);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

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

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(664);

var _form = __webpack_require__(1221);

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

/***/ 1224:
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(587);

var _reactRedux = __webpack_require__(586);

var _moment = __webpack_require__(566);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(599);

var _actions = __webpack_require__(871);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(1219);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(1223);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(1220);

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
      }, 'Points ', points), _react2.default.createElement(_semanticUiReact.Button, {
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

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(635);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(91);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(624);

var _constants = __webpack_require__(623);

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

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(587);

var _reduxForm = __webpack_require__(664);

var _points = __webpack_require__(1228);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(1227);

var _list2 = _interopRequireDefault(_list);

var _history = __webpack_require__(1225);

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

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(635);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(91);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(624);

var _constants = __webpack_require__(623);

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

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(635);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(624);

var _index = __webpack_require__(623);

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

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(95);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(587);

var _reduxDevtoolsExtension = __webpack_require__(1245);

var _reducers = __webpack_require__(1226);

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

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(978);


/***/ }),

/***/ 623:
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

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _reduxActions = __webpack_require__(624);

var _constants = __webpack_require__(623);

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

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(1217);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(1229);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(1224);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(1218);

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

      var qs = __webpack_require__(82)
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

},[1374]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/OGY2NjcxNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/OGY2NjcxNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/OGY2NjcxNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz84ZjY2NzE0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzhmNjY3MTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzhmNjY3MTQiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzhmNjY3MTQiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz84ZjY2NzE0Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzhmNjY3MTQiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz84ZjY2NzE0Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz84ZjY2NzE0Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzhmNjY3MTQiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzPzhmNjY3MTQiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz84ZjY2NzE0Iiwid2VicGFjazovLy8uL3BhZ2VzPzhmNjY3MTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNHOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0U7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUNBLDBEQUFNLE1BQUssWUFBVyxTQUFRO2dCQUE5QjtrQkFDQTtBQURBOzhDQUNNLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFHTDtBQUhLOzs7O0FBUkM7Ozs7QUFH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Z0NBQWEsUUFDekM7QUFBTyxJQUFNLGtDQUFhLGdDQUFhLFFBQVEsYTs7Ozs7Ozs7Ozs7Ozs7OztBQ1h4Qzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7QUFHUCxJQUFNLFFBQVE7eUJBQ1o7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRzs7Z0JBQUQ7a0JBQ0E7QUFEQTtBQUFBLHNCQUNDOztnQkFBRDtrQkFBQTtBQUFBO0FBQUE7QUFJSjs7a0JBQXlCLGlEQUFPLE8iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVqZWN0aW9uIEFwcDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzXCIgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBTZWdtZW50LCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgbGlzdCwgaGFuZGxlQW5zd2VyIH0pIHtcbiAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMCA/IChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICB7bGlzdC5tYXAoKGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2FyZCByYWlzZWQgY2VudGVyZWQga2V5PXthc2sucGVyc29uICsgYXNrLmFza2VkICsgRGF0ZS5ub3coKX0+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIDoge2Fzay5hc2tlZC50b1VwcGVyQ2FzZSgpfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkLk1ldGEgLz5cbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+Rm9yIDoge2Fzay5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICBjb2xvcj17J3JlZCd9XG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5yZWplY3RlZCwgaW5kZXggfSl9XG4gICAgICAgICAgICAgID5SZWplY3RlZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY29sb3I9eydncmVlbid9XG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5hY2NlcHRlZCwgaW5kZXggfSl9XG4gICAgICAgICAgICAgID5BY2NlcHRlZDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKSA6IDxkaXYgLz47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VnbWVudCwgQ2FyZCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gICAgICAgICAgICAgICAgICBoaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgYWRkVG9IaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnlcbn0pID0+IGhpc3RvcnkubGVuZ3RoID4gMCA/IChcbiAgPENvbnRhaW5lciBmbHVpZD5cbiAgICA8U2VnbWVudD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY29tcGFjdFxuICAgICAgICBmbG9hdGVkPXsncmlnaHQnfVxuICAgICAgICBiYXNpYyB0eXBlPXsnYnV0dG9uJ31cbiAgICAgICAgb25DbGljaz17Y2xlYXJIaXN0b3J5fVxuICAgICAgPlxuICAgICAgICB7J0NsZWFyIEhpc3RvcnknfVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIHtoaXN0b3J5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPENhcmRcbiAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgIGtleT17aXRlbSArIERhdGUubm93KCkgKyBpdGVtLnBlcnNvbiArIGl0ZW0udGltZX1cbiAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIEZvciA6IHtpdGVtLmFza2VkfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgPENhcmQuTWV0YT5EYXRlOiB7aXRlbS50aW1lfSA8L0NhcmQuTWV0YT5cbiAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5Zb3UgQXNrZWQgOiB7aXRlbS5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+e2l0ZW0ucmVzdWx0fTwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICB0eXBlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgIGNvbG9yPXtpdGVtLnJlc3VsdCA9PT0gJ1JFSkVDVEVEJyA/ICdyZWQnIDogJ2dyZWVuJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZyb21IaXN0b3J5KGl0ZW0uaWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnRGVsZXRlIEZyb20gSGlzdG9yeSd9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApKX1cbiAgICA8L1NlZ21lbnQ+XG4gIDwvQ29udGFpbmVyPlxuKSA6IChcbiAgPGRpdiAvPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGlzdG9yeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9mb3JtQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZXNldCwgcHJpc3RpbmUsIHN1Ym1pdHRpbmcsIGVycm9ycyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J2Fza2VkJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydwZXJzb24nfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+Q2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uLk9yIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBwb3NpdGl2ZVxuICAgICAgICAgIHR5cGU9eydzdWJtaXQnfVxuICAgICAgICAgIGRpc2FibGVkPXtwcmlzdGluZSAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZCB8fCBzdWJtaXR0aW5nICYmIGVycm9ycyA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXNldCgnUmVqZWN0aW9uRm9ybScpO1xuICAgICAgICAgIH19XG4gICAgICAgID5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHsgaW5wdXQsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgLi4uY3VzdG9tIH0pID0+IHtcbiAgY29uc3QgaGFzRXJyb3IgPSB0b3VjaGVkICYmIGVycm9yICE9PSB1bmRlZmluZWQ7XG4gIHJldHVybiAoXG4gICAgPEZvcm0uSW5wdXRcbiAgICAgIGxhYmVsPXtpbnB1dC5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBmbHVpZFxuICAgICAgey4uLmlucHV0fVxuICAgICAgey4uLmN1c3RvbX1cbiAgICAgIGVycm9yPXtoYXNFcnJvcn1cbiAgICAvPlxuICApO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm1Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh7IGFza2VkLCBwZXJzb24gfSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgaWYgKGFza2VkID09PSB1bmRlZmluZWQpIGVycm9ycy5hc2tlZCA9ICdBc2tlZCBGaWVsZCBSZXF1aXJlZCc7XG4gIGlmIChwZXJzb24gPT09IHVuZGVmaW5lZCkgZXJyb3JzLnBlcnNvbiA9ICdQZXJzb24gRmllbGQgUmVxdWlyZWQnO1xuICByZXR1cm4gZXJyb3JzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ1JlamVjdGlvbkZvcm0nLFxuICB2YWxpZGF0ZVxufSkoRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgU2VnbWVudCwgQ29udGFpbmVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBSZWplY3Rpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybSc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2hpc3RvcnknO1xuXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IHsgUmVqZWN0aW9uRm9ybSB9ID0gdGhpcy5wcm9wcy5mb3JtO1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGQoUmVqZWN0aW9uRm9ybS52YWx1ZXMpO1xuICB9XG4gIGhhbmRsZUFuc3dlcihldmVudCwgeyB2YWx1ZSwgYW5zd2VyLCBpbmRleCB9KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrLCBhZGRUb0hpc3RvcnkgfSA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICBpZiAoYW5zd2VyID09PSBBY3Rpb25zLnJlamVjdGVkKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcbiAgICBhZGRUb0hpc3RvcnkoeyB0aW1lOiBtb21lbnQoKS5mb3JtYXQoJ0xMTEwnKSwgdmFsdWUsIGFuc3dlciB9KTtcbiAgICBkZWxldGVBc2soaW5kZXgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsaXN0LFxuICAgICAgcG9pbnRzLFxuICAgICAgaGlzdG9yeSxcbiAgICAgYWN0aW9uczogeyBhZGRUb0hpc3RvcnksIGNsZWFySGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnksIGNsZWFyU2NvcmUgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxoMT57J1JlamVjdGlvbiBHYW1lJ308L2gxPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93KCl9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgICAgICBhZGRUb0hpc3Rvcnk9e2FkZFRvSGlzdG9yeX1cbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5PXtjbGVhckhpc3Rvcnl9XG4gICAgICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5PXtkZWxldGVGcm9tSGlzdG9yeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPGRpdj5Qb2ludHMge3BvaW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyU2NvcmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeydDbGVhciBTY29yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGxpc3Q6IHN0YXRlLmxpc3QsXG4gIHBvaW50czogc3RhdGUucG9pbnRzLFxuICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxuICBmb3JtOiBzdGF0ZS5mb3JtXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHsgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KTtcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERfSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCBoaXN0b3J5SXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgIGFza2VkOiBwYXlsb2FkLnZhbHVlLmFza2VkLFxuICAgICAgcGVyc29uOiBwYXlsb2FkLnZhbHVlLnBlcnNvbixcbiAgICAgIHRpbWU6IHBheWxvYWQudGltZSxcbiAgICAgIHJlc3VsdDogcGF5bG9hZC5hbnN3ZXIoKS50eXBlLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGN1cnIpID0+IE1hdGgubWF4KG1heElkLCBjdXJyLmlkKSwgLTEpICsgMVxuICAgIH0pO1xuICAgIHJldHVybiBbaGlzdG9yeUl0ZW0sIC4uLnN0YXRlXTtcbiAgfSxcbiAgW0FjdGlvbnMuQ0xFQVJfSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IFtdLFxuICBbQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKChoaXN0KSA9PiBoaXN0LmlkICE9PSBwYXlsb2FkKVxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2hpc3RvcnkuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vcG9pbnRzJztcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGhpc3RvcnksXG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcbiAgICAgIGZpbHRlcjogJ25vbmUnLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGFzaykgPT4gTWF0aC5tYXgoYXNrLmlkLCBtYXhJZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLnN0YXRlLCByZXF1ZXN0XTtcbiAgfSxcbiAgW0FjdGlvbnMuREVMRVRFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKGFza3MgPT4gc3RhdGVbcGF5bG9hZF0uaWQgIT09IGFza3MuaWQpXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblxuICBbQWN0aW9ucy5SRUpFQ1RFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTA7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9LFxuICBbQWN0aW9ucy5BQ0NFUFRFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX1NDT1JFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gMCxcblxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcG9pbnRzLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbWlkZGxld2FyZSA9IFtdO1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgLy8gU3BlY2lmeSBleHRlbnNpb27igJlzIG9wdGlvbnMgbGlrZSBuYW1lLCBhY3Rpb25zQmxhY2tsaXN0LCBhY3Rpb25zQ3JlYXRvcnMsIHNlcmlhbGl6ZS4uLlxuICAgIH0pIDogY29tcG9zZTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gIC8vIG90aGVyIHN0b3JlIGVuaGFuY2VycyBpZiBhbnlcbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IEFERCA9ICdBREQnO1xuZXhwb3J0IGNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xuZXhwb3J0IGNvbnN0IEVESVQgPSAnRURJVCc7XG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEID0gJ0FDQ0VQVEVEJztcbmV4cG9ydCBjb25zdCBBRERfSElTVE9SWSA9ICdBRERfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfSElTVE9SWSA9ICdDTEVBUl9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9ISVNUT1JZID0gJ0RFTEVURV9GUk9NX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NDT1JFID0gJ0NMRUFSX1NDT1JFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREKTtcbmV4cG9ydCBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLlJFSkVDVEVEKTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFDQ0VQVEVEKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuRURJVCk7XG5leHBvcnQgY29uc3QgZGVsZXRlQXNrID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuREVMRVRFLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgY2xlYXJIaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQ0xFQVJfSElTVE9SWSk7XG5leHBvcnQgY29uc3QgYWRkVG9IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREX0hJU1RPUlkpO1xuZXhwb3J0IGNvbnN0IGNsZWFyU2NvcmUgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5DTEVBUl9TQ09SRSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb250YWluZXJzL01haW5Db250YWluZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxNYWluIC8+XG4gIDwvZGl2PlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        