
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 588:
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

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _reduxActions = __webpack_require__(589);

var _constants = __webpack_require__(588);

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

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(766);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(778);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(773);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(767);

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

/***/ }),

/***/ 767:
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

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(635);

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js';
function List(_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;

  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, list.map(function (ask, index) {
    return _react2.default.createElement('li', { key: ask.person + ask.asked, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, ask.person, ' | ', ask.asked, _react2.default.createElement('input', {
      type: 'submit',
      value: 'Rejected',
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.rejected, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }), _react2.default.createElement('input', { type: 'submit', value: 'Accepted', onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }));
  }));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); } } })();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(606);

var _formComponent = __webpack_require__(771);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); } } })();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(656);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js";

exports.default = function (_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ["input", "meta"]);

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("input", (0, _extends3.default)({ type: "text" }, input, custom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  })));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js"); } } })();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(606);

var _form = __webpack_require__(770);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxForm.reduxForm)({
  form: 'RejectionForm'
})(_form2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/index.js"); } } })();

/***/ }),

/***/ 773:
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

var _redux = __webpack_require__(570);

var _reduxForm = __webpack_require__(606);

var _reactRedux = __webpack_require__(569);

var _actions = __webpack_require__(635);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(768);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(772);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(769);

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
      addToHistory({ time: Date.now(), value: value, answer: answer });
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
          lineNumber: 36
        }
      }, _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now(), __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Total ', points, ' ', _react2.default.createElement('input', { type: 'submit', value: 'Clear Score', onClick: clearScore, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })));
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

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(591);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(589);

var _constants = __webpack_require__(588);

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

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _reduxForm = __webpack_require__(606);

var _points = __webpack_require__(777);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(776);

var _list2 = _interopRequireDefault(_list);

var _history = __webpack_require__(774);

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

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(591);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(589);

var _constants = __webpack_require__(588);

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

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(591);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(589);

var _index = __webpack_require__(588);

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

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(96);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(570);

var _reduxDevtoolsExtension = __webpack_require__(794);

var _reducers = __webpack_require__(775);

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

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(655);


/***/ })

},[846]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanM/NzRhZmVjMiIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzc0YWZlYzIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NzRhZmVjMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/NzRhZmVjMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/NzRhZmVjMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/NzRhZmVjMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz83NGFmZWMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzc0YWZlYzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzc0YWZlYzIiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzc0YWZlYzIiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz83NGFmZWMyIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzc0YWZlYzIiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz83NGFmZWMyIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz83NGFmZWMyIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzc0YWZlYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxvQkFDYjtBQUFPLElBQU0sMEJBQ2I7QUFBTyxJQUFNLHNCQUNiO0FBQU8sSUFBTSw4QkFDYjtBQUFPLElBQU0sOEJBQ2I7QUFBTyxJQUFNLG9DQUNiO0FBQU8sSUFBTSx3Q0FDYjtBQUFPLElBQU0sb0RBQ2I7QUFBTyxJQUFNLG9DQUFjLGM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmxC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QUNOTjs7QUFDRjs7SUFBSzs7Ozs7Ozs7QUFFWixJQUFNLGVBRU47O2tCQUFlLHFHQUNaLFFBQVEsS0FBTSxVQUFDLGFBQXVCO01BQUEsZUFDckM7O01BQU0sZ0NBQXdCO1lBRTVCO2NBQVUsT0FBTyxVQUFDLE9BQU8sS0FBUjthQUFnQixLQUFLLElBQUksSUFBSSxJQUFJO0FBQTlDLE9BQXNELENBQUMsS0FFN0Q7QUFIRSxHQURjO29EQUlMLFNBQ1o7QUFQWSxrREFRWixRQUFRLFFBQVMsVUFBQyxjQUFEO01BQVU7ZUFBb0IsT0FBTztXQUFRLE1BQU0sU0FBUyxPQUFPLEtBQUs7QUFBaEQ7QUFSN0IscUJBVVosYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTTs7QUFDRjs7SUFBSzs7Ozs7Ozs7QUFFWixJQUFNLGVBQ047a0JBQWUscUdBRVosUUFBUSxVQUFXLFVBQUMsYUFBdUI7TUFBQSxlQUMxQzs7TUFBTSxRQUFRLFFBQ2Q7U0FDRDtBQUxZLGtEQU1aLFFBQVEsVUFBVyxVQUFDLGNBQXVCO01BQUEsZ0JBQzFDOztNQUFNLFFBQVEsUUFDZDtTQUNEO0FBVFksa0RBVVosUUFBUSxhQUFlLFVBQUMsY0FBRDtNQUFVO1NBQWM7QUFWbkMscUJBYVosYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm9DOztBQUM5Qjs7QUFDRjs7Ozs7O0FBRVAsSUFBTSxhQUFhO0FBQ25CLElBQU0sMkJBQ0csMEVBQVcsWUFDbEIsT0FBTyw4Q0FDRTtBQUVGO0FBREgsQ0FERixDQUZGOztBQU1GLElBQU0sV0FBVyxpQkFDZix3Q0FLRjs7a0JBQWU7U0FBNEIsNENBQWEsY0FBYztBQUF0RSxFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREID0gJ0FERCc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XG5leHBvcnQgY29uc3QgRURJVCA9ICdFRElUJztcbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuZXhwb3J0IGNvbnN0IEFERF9ISVNUT1JZID0gJ0FERF9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBDTEVBUl9ISVNUT1JZID0gJ0NMRUFSX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0hJU1RPUlkgPSAnREVMRVRFX0ZST01fSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU0NPUkUgPSAnQ0xFQVJfU0NPUkUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BREQpO1xuZXhwb3J0IGNvbnN0IHJlamVjdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuUkVKRUNURUQpO1xuZXhwb3J0IGNvbnN0IGFjY2VwdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUNDRVBURUQpO1xuZXhwb3J0IGNvbnN0IGVkaXQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5FRElUKTtcbmV4cG9ydCBjb25zdCBkZWxldGVBc2sgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEUsIGlkID0+IGlkKTtcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tSGlzdG9yeSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkRFTEVURV9GUk9NX0hJU1RPUlksIGlkID0+IGlkKTtcbmV4cG9ydCBjb25zdCBjbGVhckhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5DTEVBUl9ISVNUT1JZKTtcbmV4cG9ydCBjb25zdCBhZGRUb0hpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BRERfSElTVE9SWSk7XG5leHBvcnQgY29uc3QgY2xlYXJTY29yZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkNMRUFSX1NDT1JFKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPE1haW4gLz5cbiAgPC9kaXY+XG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlJlamVjdGlvbiBBcHA8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xpc3QubWFwKChhc2ssIGluZGV4KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2Fzay5wZXJzb24gKyBhc2suYXNrZWR9PlxuICAgICAgICAgIHthc2sucGVyc29ufSB8IHthc2suYXNrZWR9XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHZhbHVlPVwiUmVqZWN0ZWRcIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwge3ZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5yZWplY3RlZCwgaW5kZXggfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWNjZXB0ZWRcIiBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5hY2NlcHRlZCwgaW5kZXggfSl9IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBoaXN0b3J5LCBjbGVhckhpc3RvcnksIGFkZFRvSGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnkgfSkgPT4gaGlzdG9yeS5sZW5ndGggPiAwID8gKFxuICA8dWw+XG4gICAgPGlucHV0IHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXtjbGVhckhpc3Rvcnl9IHZhbHVlPXsnQ2xlYXIgSGlzdG9yeSd9IC8+XG4gICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gPGxpIGtleT17aXRlbSArIERhdGUubm93KCkgKyBpdGVtLnBlcnNvbiArIGl0ZW0udGltZX0+XG4gICAgICB7aXRlbS5hc2tlZH0gfCB7aXRlbS5wZXJzb259IHwge2l0ZW0udGltZX0gfCB7aXRlbS5yZXN1bHR9XG4gICAgICA8aW5wdXQgdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZyb21IaXN0b3J5KGl0ZW0uaWQpfSB2YWx1ZT17J0RlbGV0ZSBGcm9tIEhpc3RvcnknfSAvPlxuICAgICAgPC9saT4pfVxuICA8L3VsPlxuKSA6IChcbiAgPGRpdj48L2Rpdj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vZm9ybUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0ocHJvcHMpIHtcbiAgY29uc29sZS5sb2coJ3Byb3BzJywgcHJvcHMpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcmVzZXQgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9eydBc2tlZCd9PkFza2VkPC9sYWJlbD5cbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXsnYXNrZWQnfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17J0Fza2VkIFdobyd9PkFza2VkIFdobzwvbGFiZWw+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J3BlcnNvbid9XG4gICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxpbnB1dCB0eXBlPXsnYnV0dG9uJ30gdmFsdWU9eydzdWJtaXQnfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgIH19Lz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHsgaW5wdXQsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgLi4uY3VzdG9tIH0pID0+IChcbiAgPGRpdj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uaW5wdXR9IHsuLi5jdXN0b219IC8+XG4gIDwvZGl2PlxuKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm1Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtICwgcmVzZXR9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnUmVqZWN0aW9uRm9ybSdcbn0pKEZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCc7XG5pbXBvcnQgUmVqZWN0aW9uRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0nO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9oaXN0b3J5JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQW5zd2VyID0gdGhpcy5oYW5kbGVBbnN3ZXIuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgeyBSZWplY3Rpb25Gb3JtIH0gPSB0aGlzLnByb3BzLmZvcm07XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFkZChSZWplY3Rpb25Gb3JtLnZhbHVlcyk7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKGV2ZW50LCB7IHZhbHVlLCBhbnN3ZXIsIGluZGV4IH0pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcmVqZWN0ZWQsIGFjY2VwdGVkLCBkZWxldGVBc2ssIGFkZFRvSGlzdG9yeSB9ID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgIGlmIChhbnN3ZXIgPT09IEFjdGlvbnMucmVqZWN0ZWQpIHJlamVjdGVkKCk7XG4gICAgZWxzZSBhY2NlcHRlZCgpO1xuICAgIGFkZFRvSGlzdG9yeSh7IHRpbWU6IERhdGUubm93KCksIHZhbHVlLCBhbnN3ZXIgfSk7XG4gICAgZGVsZXRlQXNrKGluZGV4KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdCxcbiAgICAgIHBvaW50cyxcbiAgICAgIGhpc3RvcnksXG4gICAgIGFjdGlvbnM6IHsgYWRkVG9IaXN0b3J5LCBjbGVhckhpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5LCBjbGVhclNjb3JlIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxSZWplY3Rpb25Gb3JtIGNsYXNzTmFtZT17J21haW4tY29udGFpbmVyJ30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPExpc3QgaGFuZGxlQW5zd2VyPXt0aGlzLmhhbmRsZUFuc3dlcn0gbGlzdD17bGlzdH0ga2V5PXtEYXRlLm5vdygpfSAvPlxuICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgIGhpc3Rvcnk9e2hpc3Rvcnl9XG4gICAgICAgICAgYWRkVG9IaXN0b3J5PXthZGRUb0hpc3Rvcnl9XG4gICAgICAgICAgY2xlYXJIaXN0b3J5PXtjbGVhckhpc3Rvcnl9XG4gICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnk9e2RlbGV0ZUZyb21IaXN0b3J5fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PlRvdGFsIHtwb2ludHN9IDxpbnB1dCB0eXBlPXsnc3VibWl0J30gdmFsdWU9eydDbGVhciBTY29yZSd9IG9uQ2xpY2s9e2NsZWFyU2NvcmV9Lz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBsaXN0OiBzdGF0ZS5saXN0LFxuICBwb2ludHM6IHN0YXRlLnBvaW50cyxcbiAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeSxcbiAgZm9ybTogc3RhdGUuZm9ybVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7IGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaCkgfSk7XG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFtBY3Rpb25zLkFERF9ISVNUT1JZXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IGhpc3RvcnlJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgYXNrZWQ6IHBheWxvYWQudmFsdWUuYXNrZWQsXG4gICAgICBwZXJzb246IHBheWxvYWQudmFsdWUucGVyc29uLFxuICAgICAgdGltZTogcGF5bG9hZC50aW1lLFxuICAgICAgcmVzdWx0OiBwYXlsb2FkLmFuc3dlcigpLnR5cGUsXG4gICAgICBpZDogc3RhdGUucmVkdWNlKChtYXhJZCwgY3VycikgPT4gTWF0aC5tYXgobWF4SWQsIGN1cnIuaWQpLCAtMSkgKyAxXG4gICAgfSk7XG4gICAgcmV0dXJuIFtoaXN0b3J5SXRlbSwgLi4uc3RhdGVdO1xuICB9LFxuICBbQWN0aW9ucy5DTEVBUl9ISVNUT1JZXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gW10sXG4gIFtBY3Rpb25zLkRFTEVURV9GUk9NX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBzdGF0ZS5maWx0ZXIoKGhpc3QpID0+IGhpc3QuaWQgIT09IHBheWxvYWQpXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9oaXN0b3J5LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHBvaW50cyBmcm9tICcuL3BvaW50cyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi9oaXN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdCxcbiAgcG9pbnRzLFxuICBoaXN0b3J5LFxuICBmb3JtOiBmb3JtUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcbiAgICAgIGZpbHRlcjogJ25vbmUnLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGFzaykgPT4gTWF0aC5tYXgoYXNrLmlkLCBtYXhJZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLnN0YXRlLCByZXF1ZXN0XTtcbiAgfSxcbiAgW0FjdGlvbnMuREVMRVRFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKGFza3MgPT4gc3RhdGVbcGF5bG9hZF0uaWQgIT09IGFza3MuaWQpXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblxuICBbQWN0aW9ucy5SRUpFQ1RFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTA7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9LFxuICBbQWN0aW9ucy5BQ0NFUFRFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX1NDT1JFXSA6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IDAsXG5cblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3BvaW50cy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKHtcbiAgICAgIC8vIFNwZWNpZnkgZXh0ZW5zaW9u4oCZcyBvcHRpb25zIGxpa2UgbmFtZSwgYWN0aW9uc0JsYWNrbGlzdCwgYWN0aW9uc0NyZWF0b3JzLCBzZXJpYWxpemUuLi5cbiAgICB9KSA6IGNvbXBvc2U7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAvLyBvdGhlciBzdG9yZSBlbmhhbmNlcnMgaWYgYW55XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        