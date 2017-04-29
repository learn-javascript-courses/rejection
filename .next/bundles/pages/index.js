
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 601:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/constants/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/constants/index.js"); } } })();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _reduxActions = __webpack_require__(603);

var _constants = __webpack_require__(601);

var Actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var add = exports.add = (0, _reduxActions.createAction)(Actions.ADD);
var rejected = exports.rejected = (0, _reduxActions.createAction)(Actions.REJECTED);
var accepted = exports.accepted = (0, _reduxActions.createAction)(Actions.ACCEPTED);
var edit = exports.edit = (0, _reduxActions.createAction)(Actions.EDIT);
var deleteAsk = exports.deleteAsk = (0, _reduxActions.createAction)(Actions.DELETE, function (id) {
  return id;
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/actions/index.js"); } } })();

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

var _store = __webpack_require__(776);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(772);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(767);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_MainContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/pages/index.js"); } } })();
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
  }), _react2.default.createElement('link', { rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('script', { defer: true, src: 'https://code.getmdl.io/1.3.0/material.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
};

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/components/Head.js';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/Head.js"); } } })();

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

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/components/List.js';
function List(_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;

  return _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, list.map(function (ask, index) {
    return _react2.default.createElement('li', { key: ask + index, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, ask.person, ' | ', ask.asked, _react2.default.createElement('input', { type: 'submit',
      value: 'Rejected',
      onClick: function onClick(e) {
        return handleAnswer(e, { answer: Actions.rejected, index: index });
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }), _react2.default.createElement('input', { type: 'submit', value: 'Accepted', onClick: function onClick(e) {
        return handleAnswer(e, { answer: Actions.accepted, index: index });
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }));
  }));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/List.js"); } } })();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(605);

var _formComponent = __webpack_require__(770);

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/form.js';
function Form(props) {
  console.log(props);
  var handleSubmit = props.handleSubmit,
      pristine = props.pristine,
      submitting = props.submitting;

  return _react2.default.createElement('form', { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('label', { htmlFor: 'Asked', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Asked'), _react2.default.createElement(_reduxForm.Field, { name: 'asked',
    type: 'text',
    component: _formComponent2.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('label', { htmlFor: 'Asked Who', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Asked Who'), _react2.default.createElement(_reduxForm.Field, { name: 'person',
    type: 'text',
    component: _formComponent2.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('input', { type: 'button', value: 'submit', onClick: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/form.js"); } } })();

/***/ }),

/***/ 770:
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

var _jsxFileName = "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/formComponent.js";

exports.default = function (_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = (0, _objectWithoutProperties3.default)(_ref, ["input", "meta"]);

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("input", (0, _extends3.default)({ type: "text" }, input, custom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/formComponent.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/formComponent.js"); } } })();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(605);

var _form = __webpack_require__(769);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxForm.reduxForm)({
  form: 'RejectionForm'
})(_form2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/index.js"); } } })();

/***/ }),

/***/ 772:
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

var _reactRedux = __webpack_require__(569);

var _actions = __webpack_require__(635);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(768);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(771);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js';


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
    value: function handleSubmit(e) {
      this.props.actions.add(this.props.form.values);
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(event, _ref) {
      var answer = _ref.answer,
          index = _ref.index;

      event.preventDefault();
      var _props$actions = this.props.actions,
          rejected = _props$actions.rejected,
          accepted = _props$actions.accepted,
          deleteAsk = _props$actions.deleteAsk;

      answer === Actions.rejected ? rejected() : accepted();
      deleteAsk(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          list = _props.list,
          rejected = _props.rejected,
          points = _props.points,
          accepted = _props.accepted,
          actions = _props.actions,
          add = _props.add;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_rejectionForm2.default, { handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'Total ', points));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list,
    points: state.points,
    form: state.form.RejectionForm
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(Actions, dispatch) };
};

var MainContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);
exports.default = MainContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js"); } } })();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _points = __webpack_require__(775);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(774);

var _list2 = _interopRequireDefault(_list);

var _reduxForm = __webpack_require__(605);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  list: _list2.default,
  points: _points2.default,
  form: _reduxForm.reducer
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/index.js"); } } })();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(608);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

var _reduxActions = __webpack_require__(603);

var _constants = __webpack_require__(601);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); } } })();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(608);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(603);

var _constants = __webpack_require__(601);

var Actions = _interopRequireWildcard(_constants);

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
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/points.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/points.js"); } } })();

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(96);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(570);

var _reducers = __webpack_require__(773);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsExtension = __webpack_require__(792);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [];
var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware));

exports.default = function (initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/store/index.js"); } } })();

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(655);


/***/ })

},[844]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanM/YjNkNzVmNCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzP2IzZDc1ZjQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YjNkNzVmNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/MzdlYzFhZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/MzdlYzFhZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz8zN2VjMWFlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzM3ZWMxYWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzM3ZWMxYWUiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzM3ZWMxYWUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/MzdlYzFhZSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzPzM3ZWMxYWUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9pbnRzLmpzPzM3ZWMxYWUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanM/MzdlYzFhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLG9CQUNiO0FBQU8sSUFBTSwwQkFDYjtBQUFPLElBQU0sc0JBQ2I7QUFBTyxJQUFNLDhCQUNiO0FBQU8sSUFBTSw4QkFBVyxXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOztBQUNGOztJQUVQOzs7O0FBQU8sSUFBTSxvQkFBTSxnQ0FBYSxRQUNoQztBQUFPLElBQU0sOEJBQVcsZ0NBQWEsUUFDckM7QUFBTyxJQUFNLDhCQUFXLGdDQUFhLFFBQ3JDO0FBQU8sSUFBTSxzQkFBTyxnQ0FBYSxRQUNqQztBQUFPLElBQU0sZ0VBQXlCLFFBQVEsUUFB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Ozs7Ozs7QUNsQk07O0FBQ0Y7O0lBQUs7Ozs7Ozs7O0FBRVosSUFBTSxlQUNOO2tCQUFlLHFHQUVaLFFBQVEsVUFBWSxVQUFDLGFBQXVCO01BQUEsZUFDM0M7O01BQU0sUUFBUSxRQUNkO1NBQ0Q7QUFMWSxrREFNWixRQUFRLFVBQVksVUFBQyxjQUFxQjtNQUFBLGdCQUN6Qzs7TUFBTSxRQUFRLFFBQ2Q7U0FDRDtBQVRZLHFCQVdaLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9DOztBQUNoQzs7OztBQUNFOzs7O0FBRVQsSUFBTSxhQUFhO0FBQ25CLElBQU0sMkJBQ0csMEVBQVcsWUFDbEIsT0FBTyw4Q0FDRTtBQUVGO0FBREgsQ0FERixDQUZGOztBQU1GLElBQU0sV0FBVyxpQkFDZix3Q0FLRjs7a0JBQWU7U0FBNEIsNENBQWEsY0FBYztBQUF0RSxFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREID0gJ0FERCc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XG5leHBvcnQgY29uc3QgRURJVCA9ICdFRElUJztcbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BREQpO1xuZXhwb3J0IGNvbnN0IHJlamVjdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuUkVKRUNURUQpO1xuZXhwb3J0IGNvbnN0IGFjY2VwdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUNDRVBURUQpO1xuZXhwb3J0IGNvbnN0IGVkaXQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5FRElUKTtcbmV4cG9ydCBjb25zdCBkZWxldGVBc2sgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEUsIGlkID0+IGlkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgIDxIZWFkIC8+XG4gICAgICAgICA8TWFpbiAvPlxuICAgICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlJlamVjdGlvbiBBcHA8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMy4wL21hdGVyaWFsLmluZGlnby1waW5rLm1pbi5jc3NcIi8+XG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4zLjAvbWF0ZXJpYWwubWluLmpzXCIvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0ICh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2xpc3QubWFwKChhc2ssIGluZGV4KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2FzayArIGluZGV4fT5cbiAgICAgICAgICAgIHthc2sucGVyc29ufSB8IHthc2suYXNrZWR9XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICB2YWx1ZT1cIlJlamVjdGVkXCJcbiAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwge2Fuc3dlcjogQWN0aW9ucy5yZWplY3RlZCwgaW5kZXh9KX0gLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWNjZXB0ZWRcIiBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IGFuc3dlcjogQWN0aW9ucy5hY2NlcHRlZCwgaW5kZXggfSl9IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vZm9ybUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0gKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCBzdWJtaXR0aW5nIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiQXNrZWRcIj5Bc2tlZDwvbGFiZWw+XG4gICAgICA8RmllbGQgbmFtZT1cImFza2VkXCJcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiQXNrZWQgV2hvXCI+QXNrZWQgV2hvPC9sYWJlbD5cbiAgICAgIDxGaWVsZCBuYW1lPVwicGVyc29uXCJcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9e2BzdWJtaXRgfSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9Lz5cbiAgICA8L2Zvcm0+XG4gICk7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBpbnB1dCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCAuLi5jdXN0b20gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uaW5wdXR9IHsuLi5jdXN0b219IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnUmVqZWN0aW9uRm9ybSdcbn0pKEZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBSZWplY3Rpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuYWRkKHRoaXMucHJvcHMuZm9ybS52YWx1ZXMpO1xuICB9XG4gIGhhbmRsZUFuc3dlcihldmVudCwge2Fuc3dlciwgaW5kZXh9KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrIH0gPSB0aGlzLnByb3BzLmFjdGlvbnNcbiAgICBhbnN3ZXIgPT09IEFjdGlvbnMucmVqZWN0ZWQgPyByZWplY3RlZCgpIDogYWNjZXB0ZWQoKTtcbiAgICBkZWxldGVBc2soaW5kZXgpXG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaXN0LCByZWplY3RlZCwgcG9pbnRzLCBhY2NlcHRlZCwgYWN0aW9ucywgYWRkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UmVqZWN0aW9uRm9ybSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93fS8+XG4gICAgICAgIDxkaXY+VG90YWwge3BvaW50c308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBzdGF0ZS5saXN0LFxuICAgIHBvaW50czogc3RhdGUucG9pbnRzLFxuICAgIGZvcm06IHN0YXRlLmZvcm0uUmVqZWN0aW9uRm9ybVxuICB9XG59XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7YWN0aW9ucyA6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaCkgfSlcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBwb2ludHMgZnJvbSAnLi9wb2ludHMnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdCxcbiAgcG9pbnRzLFxuICBmb3JtOiBmb3JtUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREXSA6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gT2JqZWN0LmFzc2lnbihwYXlsb2FkLCB7XG4gICAgICBmaWx0ZXI6ICdub25lJyxcbiAgICAgIGlkOiBzdGF0ZS5yZWR1Y2UoKG1heElkLCBhc2spID0+IE1hdGgubWF4KGFzay5pZCwgbWF4SWQpLCAtMSkgKyAxXG4gICAgfSk7XG4gICAgcmV0dXJuIFsuLi5zdGF0ZSwgcmVxdWVzdF1cbiAgfSxcbiAgW0FjdGlvbnMuREVMRVRFXTogKHN0YXRlLCB7IHBheWxvYWR9KSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlcihhc2tzID0+IHN0YXRlW3BheWxvYWRdLmlkICE9PSBhc2tzLmlkKVxuICB9XG5cblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy8nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAwO1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG5cbiAgW0FjdGlvbnMuUkVKRUNURURdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxMDtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkFDQ0VQVEVEXSA6IChzdGF0ZSwge3BheWxvYWR9KSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSBzdGF0ZSArIDE7XG4gICAgcmV0dXJuIHRvdGFsXG4gIH1cblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3BvaW50cy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKHtcbiAgICAgIC8vIFNwZWNpZnkgZXh0ZW5zaW9u4oCZcyBvcHRpb25zIGxpa2UgbmFtZSwgYWN0aW9uc0JsYWNrbGlzdCwgYWN0aW9uc0NyZWF0b3JzLCBzZXJpYWxpemUuLi5cbiAgICB9KSA6IGNvbXBvc2U7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAvLyBvdGhlciBzdG9yZSBlbmhhbmNlcnMgaWYgYW55XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        