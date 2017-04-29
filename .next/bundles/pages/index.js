
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

var _nextReduxWrapper = __webpack_require__(765);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(775);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(771);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(766);

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

/***/ 766:
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

/***/ 767:
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

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(605);

var _formComponent = __webpack_require__(769);

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

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(844);

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

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(605);

var _form = __webpack_require__(768);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxForm.reduxForm)({
  form: 'RejectionForm'
})(_form2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/rejectionForm/index.js"); } } })();

/***/ }),

/***/ 771:
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

var _List = __webpack_require__(767);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(770);

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

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _points = __webpack_require__(774);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(773);

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

/***/ 773:
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

  var request = (0, _assign2.default)(payload, { filter: 'none' });
  return [].concat((0, _toConsumableArray3.default)(state), [request]);
}), (0, _defineProperty3.default)(_handleActions, Actions.DELETE, function (state, _ref2) {
  var payload = _ref2.payload;

  console.log('here', state);
  return state.filter(function (asks) {
    return asks !== payload;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); } } })();

/***/ }),

/***/ 774:
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

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(96);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(570);

var _reducers = __webpack_require__(772);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsExtension = __webpack_require__(791);

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

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(655);


/***/ })

},[843]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvaW5kZXguanM/MzAwODc3ZCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzMwMDg3N2QiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzAwODc3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/MzAwODc3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/MzAwODc3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz8zMDA4NzdkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzMwMDg3N2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzMwMDg3N2QiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzMwMDg3N2QiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/MzAwODc3ZCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzPzMwMDg3N2QiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9pbnRzLmpzPzMwMDg3N2QiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanM/MzAwODc3ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLG9CQUNiO0FBQU8sSUFBTSwwQkFDYjtBQUFPLElBQU0sc0JBQ2I7QUFBTyxJQUFNLDhCQUNiO0FBQU8sSUFBTSw4QkFBVyxXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOztBQUNGOztJQUVQOzs7O0FBQU8sSUFBTSxvQkFBTSxnQ0FBYSxRQUNoQztBQUFPLElBQU0sOEJBQVcsZ0NBQWEsUUFDckM7QUFBTyxJQUFNLDhCQUFXLGdDQUFhLFFBQ3JDO0FBQU8sSUFBTSxzQkFBTyxnQ0FBYSxRQUNqQztBQUFPLElBQU0sZ0VBQXlCLFFBQVEsUUFB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QUMsYUFBdUI7TUFBQSxlQUMzQzs7TUFBTSxRQUFRLFFBQ2Q7U0FDRDtBQUxZLGtEQU1aLFFBQVEsVUFBWSxVQUFDLGNBQXFCO01BQUEsZ0JBQ3pDOztNQUFNLFFBQVEsUUFDZDtTQUNEO0FBVFkscUJBV1osYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7O0FBQ2hDOzs7O0FBQ0U7Ozs7QUFFVCxJQUFNLGFBQWE7QUFDbkIsSUFBTSwyQkFDRywwRUFBVyxZQUNsQixPQUFPLDhDQUNFO0FBRUY7QUFESCxDQURGLENBRkY7O0FBTUYsSUFBTSxXQUFXLGlCQUNmLHdDQUtGOztrQkFBZTtTQUE0Qiw0Q0FBYSxjQUFjO0FBQXRFLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBREQgPSAnQUREJztcbmV4cG9ydCBjb25zdCBERUxFVEUgPSAnREVMRVRFJztcbmV4cG9ydCBjb25zdCBFRElUID0gJ0VESVQnO1xuZXhwb3J0IGNvbnN0IFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGFkZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFERCk7XG5leHBvcnQgY29uc3QgcmVqZWN0ZWQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5SRUpFQ1RFRCk7XG5leHBvcnQgY29uc3QgYWNjZXB0ZWQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BQ0NFUFRFRCk7XG5leHBvcnQgY29uc3QgZWRpdCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkVESVQpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFzayA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkRFTEVURSwgaWQgPT4gaWQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29udGFpbmVycy9NYWluQ29udGFpbmVyJztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgPEhlYWQgLz5cbiAgICAgICAgIDxNYWluIC8+XG4gICAgICAgPC9kaXY+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShJbmRleCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVqZWN0aW9uIEFwcDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4zLjAvbWF0ZXJpYWwuaW5kaWdvLXBpbmsubWluLmNzc1wiLz5cbiAgICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjMuMC9tYXRlcmlhbC5taW4uanNcIi8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QgKHsgbGlzdCwgaGFuZGxlQW5zd2VyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7bGlzdC5tYXAoKGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17YXNrICsgaW5kZXh9PlxuICAgICAgICAgICAge2Fzay5wZXJzb259IHwge2Fzay5hc2tlZH1cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgIHZhbHVlPVwiUmVqZWN0ZWRcIlxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7YW5zd2VyOiBBY3Rpb25zLnJlamVjdGVkLCBpbmRleH0pfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBY2NlcHRlZFwiIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHsgYW5zd2VyOiBBY3Rpb25zLmFjY2VwdGVkLCBpbmRleCB9KX0gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9mb3JtQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSAocHJvcHMpIHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcHJpc3RpbmUsIHN1Ym1pdHRpbmcgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJBc2tlZFwiPkFza2VkPC9sYWJlbD5cbiAgICAgIDxGaWVsZCBuYW1lPVwiYXNrZWRcIlxuICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJBc2tlZCBXaG9cIj5Bc2tlZCBXaG88L2xhYmVsPlxuICAgICAgPEZpZWxkIG5hbWU9XCJwZXJzb25cIlxuICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT17YHN1Ym1pdGB9IG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0vPlxuICAgIDwvZm9ybT5cbiAgKTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIC4uLmN1c3RvbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5pbnB1dH0gey4uLmN1c3RvbX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm1Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdSZWplY3Rpb25Gb3JtJ1xufSkoRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQW5zd2VyID0gdGhpcy5oYW5kbGVBbnN3ZXIuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGQodGhpcy5wcm9wcy5mb3JtLnZhbHVlcyk7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKGV2ZW50LCB7YW5zd2VyLCBpbmRleH0pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcmVqZWN0ZWQsIGFjY2VwdGVkLCBkZWxldGVBc2sgfSA9IHRoaXMucHJvcHMuYWN0aW9uc1xuICAgIGFuc3dlciA9PT0gQWN0aW9ucy5yZWplY3RlZCA/IHJlamVjdGVkKCkgOiBhY2NlcHRlZCgpO1xuICAgIGRlbGV0ZUFzayhpbmRleClcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxpc3QsIHJlamVjdGVkLCBwb2ludHMsIGFjY2VwdGVkLCBhY3Rpb25zLCBhZGQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZWplY3Rpb25Gb3JtIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDxMaXN0IGhhbmRsZUFuc3dlcj17dGhpcy5oYW5kbGVBbnN3ZXJ9IGxpc3Q9e2xpc3R9IGtleT17RGF0ZS5ub3d9Lz5cbiAgICAgICAgPGRpdj5Ub3RhbCB7cG9pbnRzfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxpc3Q6IHN0YXRlLmxpc3QsXG4gICAgcG9pbnRzOiBzdGF0ZS5wb2ludHMsXG4gICAgZm9ybTogc3RhdGUuZm9ybS5SZWplY3Rpb25Gb3JtXG4gIH1cbn1cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHthY3Rpb25zIDogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KVxuXG5jb25zdCBNYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHBvaW50cyBmcm9tICcuL3BvaW50cyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtmaWx0ZXI6ICdub25lJ30pO1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHJlcXVlc3RdXG4gIH0sXG4gIFtBY3Rpb25zLkRFTEVURV06IChzdGF0ZSwgeyBwYXlsb2FkfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJywgc3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBhc2tzICE9PSBwYXlsb2FkKVxuICB9XG5cblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy8nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAwO1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG5cbiAgW0FjdGlvbnMuUkVKRUNURURdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxMDtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sXG4gIFtBY3Rpb25zLkFDQ0VQVEVEXSA6IChzdGF0ZSwge3BheWxvYWR9KSA9PiB7XG4gICAgY29uc3QgdG90YWwgPSBzdGF0ZSArIDE7XG4gICAgcmV0dXJuIHRvdGFsXG4gIH1cblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3BvaW50cy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKHtcbiAgICAgIC8vIFNwZWNpZnkgZXh0ZW5zaW9u4oCZcyBvcHRpb25zIGxpa2UgbmFtZSwgYWN0aW9uc0JsYWNrbGlzdCwgYWN0aW9uc0NyZWF0b3JzLCBzZXJpYWxpemUuLi5cbiAgICB9KSA6IGNvbXBvc2U7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAvLyBvdGhlciBzdG9yZSBlbmhhbmNlcnMgaWYgYW55XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        