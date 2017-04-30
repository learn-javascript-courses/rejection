
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

var _reduxForm = __webpack_require__(590);

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

var _reduxForm = __webpack_require__(590);

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

var _reduxForm = __webpack_require__(590);

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
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Rejection Game'), _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now(), __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Total ', points, ' ', _react2.default.createElement('input', { type: 'submit', value: 'Clear Score', onClick: clearScore, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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

var _defineProperty2 = __webpack_require__(592);

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

var _reduxForm = __webpack_require__(590);

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

var _defineProperty2 = __webpack_require__(592);

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

var _defineProperty2 = __webpack_require__(592);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanM/OWYyMDE4NSIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzlmMjAxODUiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/OWYyMDE4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/OWYyMDE4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/OWYyMDE4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/OWYyMDE4NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz85ZjIwMTg1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzlmMjAxODUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzlmMjAxODUiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzlmMjAxODUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz85ZjIwMTg1Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzlmMjAxODUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz85ZjIwMTg1Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz85ZjIwMTg1Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzlmMjAxODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxvQkFDYjtBQUFPLElBQU0sMEJBQ2I7QUFBTyxJQUFNLHNCQUNiO0FBQU8sSUFBTSw4QkFDYjtBQUFPLElBQU0sOEJBQ2I7QUFBTyxJQUFNLG9DQUNiO0FBQU8sSUFBTSx3Q0FDYjtBQUFPLElBQU0sb0RBQ2I7QUFBTyxJQUFNLG9DQUFjLGM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmxC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Q0FEYSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk47O0FBQ0Y7O0lBQUs7Ozs7Ozs7O0FBRVosSUFBTSxlQUVOOztrQkFBZSxxR0FDWixRQUFRLEtBQU0sVUFBQyxhQUF1QjtNQUFBLGVBQ3JDOztNQUFNLGdDQUF3QjtZQUU1QjtjQUFVLE9BQU8sVUFBQyxPQUFPLEtBQVI7YUFBZ0IsS0FBSyxJQUFJLElBQUksSUFBSTtBQUE5QyxPQUFzRCxDQUFDLEtBRTdEO0FBSEUsR0FEYztvREFJTCxTQUNaO0FBUFksa0RBUVosUUFBUSxRQUFTLFVBQUMsY0FBRDtNQUFVO2VBQW9CLE9BQU87V0FBUSxNQUFNLFNBQVMsT0FBTyxLQUFLO0FBQWhEO0FBUjdCLHFCQVVaLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZk07O0FBQ0Y7O0lBQUs7Ozs7Ozs7O0FBRVosSUFBTSxlQUNOO2tCQUFlLHFHQUVaLFFBQVEsVUFBVyxVQUFDLGFBQXVCO01BQUEsZUFDMUM7O01BQU0sUUFBUSxRQUNkO1NBQ0Q7QUFMWSxrREFNWixRQUFRLFVBQVcsVUFBQyxjQUF1QjtNQUFBLGdCQUMxQzs7TUFBTSxRQUFRLFFBQ2Q7U0FDRDtBQVRZLGtEQVVaLFFBQVEsYUFBZSxVQUFDLGNBQUQ7TUFBVTtTQUFjO0FBVm5DLHFCQWFaLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJvQzs7QUFDOUI7O0FBQ0Y7Ozs7OztBQUVQLElBQU0sYUFBYTtBQUNuQixJQUFNLDJCQUNHLDBFQUFXLFlBQ2xCLE9BQU8sOENBQ0U7QUFFRjtBQURILENBREYsQ0FGRjs7QUFNRixJQUFNLFdBQVcsaUJBQ2Ysd0NBS0Y7O2tCQUFlO1NBQTRCLDRDQUFhLGNBQWM7QUFBdEUsRSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERCA9ICdBREQnO1xuZXhwb3J0IGNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xuZXhwb3J0IGNvbnN0IEVESVQgPSAnRURJVCc7XG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEID0gJ0FDQ0VQVEVEJztcbmV4cG9ydCBjb25zdCBBRERfSElTVE9SWSA9ICdBRERfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfSElTVE9SWSA9ICdDTEVBUl9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9ISVNUT1JZID0gJ0RFTEVURV9GUk9NX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NDT1JFID0gJ0NMRUFSX1NDT1JFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREKTtcbmV4cG9ydCBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLlJFSkVDVEVEKTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFDQ0VQVEVEKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuRURJVCk7XG5leHBvcnQgY29uc3QgZGVsZXRlQXNrID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuREVMRVRFLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUhpc3RvcnkgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZLCBpZCA9PiBpZCk7XG5leHBvcnQgY29uc3QgY2xlYXJIaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQ0xFQVJfSElTVE9SWSk7XG5leHBvcnQgY29uc3QgYWRkVG9IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUREX0hJU1RPUlkpO1xuZXhwb3J0IGNvbnN0IGNsZWFyU2NvcmUgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5DTEVBUl9TQ09SRSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb250YWluZXJzL01haW5Db250YWluZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxNYWluIC8+XG4gIDwvZGl2PlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5SZWplY3Rpb24gQXBwPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBsaXN0LCBoYW5kbGVBbnN3ZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXthc2sucGVyc29uICsgYXNrLmFza2VkfT5cbiAgICAgICAgICB7YXNrLnBlcnNvbn0gfCB7YXNrLmFza2VkfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YWx1ZT1cIlJlamVjdGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHt2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMucmVqZWN0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFjY2VwdGVkXCIgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMuYWNjZXB0ZWQsIGluZGV4IH0pfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHsgaGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBhZGRUb0hpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5IH0pID0+IGhpc3RvcnkubGVuZ3RoID4gMCA/IChcbiAgPHVsPlxuICAgIDxpbnB1dCB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2xlYXJIaXN0b3J5fSB2YWx1ZT17J0NsZWFyIEhpc3RvcnknfSAvPlxuICAgIHtoaXN0b3J5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxsaSBrZXk9e2l0ZW0gKyBEYXRlLm5vdygpICsgaXRlbS5wZXJzb24gKyBpdGVtLnRpbWV9PlxuICAgICAge2l0ZW0uYXNrZWR9IHwge2l0ZW0ucGVyc29ufSB8IHtpdGVtLnRpbWV9IHwge2l0ZW0ucmVzdWx0fVxuICAgICAgPGlucHV0IHR5cGU9eydidXR0b24nfSBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tSGlzdG9yeShpdGVtLmlkKX0gdmFsdWU9eydEZWxldGUgRnJvbSBIaXN0b3J5J30gLz5cbiAgICAgIDwvbGk+KX1cbiAgPC91bD5cbikgOiAoXG4gIDxkaXY+PC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oaXN0b3J5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuL2Zvcm1Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdwcm9wcycsIHByb3BzKTtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlc2V0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXsnQXNrZWQnfT5Bc2tlZDwvbGFiZWw+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J2Fza2VkJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9eydBc2tlZCBXaG8nfT5Bc2tlZCBXaG88L2xhYmVsPlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydwZXJzb24nfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8aW5wdXQgdHlwZT17J2J1dHRvbid9IHZhbHVlPXsnc3VibWl0J30gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgcmV0dXJuIHJlc2V0KCdSZWplY3Rpb25Gb3JtJyk7XG4gICAgICB9fS8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIC4uLmN1c3RvbSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLmlucHV0fSB7Li4uY3VzdG9tfSAvPlxuICA8L2Rpdj5cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSAsIHJlc2V0fSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ1JlamVjdGlvbkZvcm0nXG59KShGb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZXNldCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IHsgUmVqZWN0aW9uRm9ybSB9ID0gdGhpcy5wcm9wcy5mb3JtO1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGQoUmVqZWN0aW9uRm9ybS52YWx1ZXMpO1xuICB9XG4gIGhhbmRsZUFuc3dlcihldmVudCwgeyB2YWx1ZSwgYW5zd2VyLCBpbmRleCB9KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrLCBhZGRUb0hpc3RvcnkgfSA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICBpZiAoYW5zd2VyID09PSBBY3Rpb25zLnJlamVjdGVkKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcbiAgICBhZGRUb0hpc3RvcnkoeyB0aW1lOiBEYXRlLm5vdygpLCB2YWx1ZSwgYW5zd2VyIH0pO1xuICAgIGRlbGV0ZUFzayhpbmRleCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3QsXG4gICAgICBwb2ludHMsXG4gICAgICBoaXN0b3J5LFxuICAgICBhY3Rpb25zOiB7IGFkZFRvSGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBkZWxldGVGcm9tSGlzdG9yeSwgY2xlYXJTY29yZSB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8aDE+e2BSZWplY3Rpb24gR2FtZWB9PC9oMT5cbiAgICAgICAgPFJlamVjdGlvbkZvcm0gY2xhc3NOYW1lPXsnbWFpbi1jb250YWluZXInfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93KCl9IC8+XG4gICAgICAgIDxIaXN0b3J5XG4gICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICBhZGRUb0hpc3Rvcnk9e2FkZFRvSGlzdG9yeX1cbiAgICAgICAgICBjbGVhckhpc3Rvcnk9e2NsZWFySGlzdG9yeX1cbiAgICAgICAgICBkZWxldGVGcm9tSGlzdG9yeT17ZGVsZXRlRnJvbUhpc3Rvcnl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+VG90YWwge3BvaW50c30gPGlucHV0IHR5cGU9eydzdWJtaXQnfSB2YWx1ZT17J0NsZWFyIFNjb3JlJ30gb25DbGljaz17Y2xlYXJTY29yZX0vPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGxpc3Q6IHN0YXRlLmxpc3QsXG4gIHBvaW50czogc3RhdGUucG9pbnRzLFxuICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxuICBmb3JtOiBzdGF0ZS5mb3JtXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHsgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KTtcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgY29uc3QgaGlzdG9yeUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBhc2tlZDogcGF5bG9hZC52YWx1ZS5hc2tlZCxcbiAgICAgIHBlcnNvbjogcGF5bG9hZC52YWx1ZS5wZXJzb24sXG4gICAgICB0aW1lOiBwYXlsb2FkLnRpbWUsXG4gICAgICByZXN1bHQ6IHBheWxvYWQuYW5zd2VyKCkudHlwZSxcbiAgICAgIGlkOiBzdGF0ZS5yZWR1Y2UoKG1heElkLCBjdXJyKSA9PiBNYXRoLm1heChtYXhJZCwgY3Vyci5pZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gW2hpc3RvcnlJdGVtLCAuLi5zdGF0ZV07XG4gIH0sXG4gIFtBY3Rpb25zLkNMRUFSX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBbXSxcbiAgW0FjdGlvbnMuREVMRVRFX0ZST01fSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHN0YXRlLmZpbHRlcigoaGlzdCkgPT4gaGlzdC5pZCAhPT0gcGF5bG9hZClcbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2hpc3RvcnkuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vcG9pbnRzJztcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGhpc3RvcnksXG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE9iamVjdC5hc3NpZ24ocGF5bG9hZCwge1xuICAgICAgZmlsdGVyOiAnbm9uZScsXG4gICAgICBpZDogc3RhdGUucmVkdWNlKChtYXhJZCwgYXNrKSA9PiBNYXRoLm1heChhc2suaWQsIG1heElkKSwgLTEpICsgMVxuICAgIH0pO1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHJlcXVlc3RdO1xuICB9LFxuICBbQWN0aW9ucy5ERUxFVEVdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBzdGF0ZVtwYXlsb2FkXS5pZCAhPT0gYXNrcy5pZClcblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuXG4gIFtBY3Rpb25zLlJFSkVDVEVEXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxMDtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkFDQ0VQVEVEXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxO1xuICAgIHJldHVybiB0b3RhbDtcbiAgfSxcbiAgW0FjdGlvbnMuQ0xFQVJfU0NPUkVdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gMCxcblxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcG9pbnRzLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbWlkZGxld2FyZSA9IFtdO1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgLy8gU3BlY2lmeSBleHRlbnNpb27igJlzIG9wdGlvbnMgbGlrZSBuYW1lLCBhY3Rpb25zQmxhY2tsaXN0LCBhY3Rpb25zQ3JlYXRvcnMsIHNlcmlhbGl6ZS4uLlxuICAgIH0pIDogY29tcG9zZTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gIC8vIG90aGVyIHN0b3JlIGVuaGFuY2VycyBpZiBhbnlcbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        