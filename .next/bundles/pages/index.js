
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 576:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/constants/rejection.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/constants/rejection.js"); } } })();

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(663);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(670);

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(577);

var _MainContainer = __webpack_require__(666);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(665);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_MainContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _reduxActions = __webpack_require__(579);

var _rejection = __webpack_require__(576);

var Actions = _interopRequireWildcard(_rejection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var add = exports.add = (0, _reduxActions.createAction)(Actions.ADD, function (ask) {
  return ask;
});
var rejected = exports.rejected = (0, _reduxActions.createAction)(Actions.REJECTED);
var accepted = exports.accepted = (0, _reduxActions.createAction)(Actions.ACCEPTED);
var edit = exports.edit = (0, _reduxActions.createAction)(Actions.EDIT);
var deleteAsk = exports.deleteAsk = (0, _reduxActions.createAction)(Actions.DELETE, function (id) {
  return id;
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/actions/index.js"); } } })();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/components/Head.js';

exports.default = function () {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Rejection App'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('script', { defer: true, src: 'https://code.getmdl.io/1.3.0/material.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/components/Head.js"); } } })();

/***/ }),

/***/ 666:
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

var _reactRedux = __webpack_require__(577);

var _actions = __webpack_require__(664);

var Actions = _interopRequireWildcard(_actions);

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
      e.preventDefault();
      this.props.add({
        ask: '20 dollars please',
        asked: 'Mom'
      });
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(event, answer) {
      event.preventDefault();
      answer === Actions.rejected ? this.props.rejected() : this.props.accepted();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(Actions.rejected());
      var _props = this.props,
          list = _props.list,
          rejected = _props.rejected,
          points = _props.points,
          accepted = _props.accepted;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('input', { type: 'submit', onClick: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, list.map(function (ask, index) {
        return _react2.default.createElement('li', { key: index + ask.ask, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, ask.ask, ' | ', ask.asked, _react2.default.createElement('input', { type: 'submit', value: 'Rejected', onClick: function onClick(e) {
            return _this2.handleAnswer(e, Actions.rejected);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }), _react2.default.createElement('input', { type: 'submit', value: 'Accepted', onClick: function onClick(e) {
            return _this2.handleAnswer(e, Actions.accepted);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }));
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, points));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Actions, dispatch);
};

var MainContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);
exports.default = MainContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js"); } } })();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _points = __webpack_require__(669);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(668);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  list: _list2.default,
  points: _points2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/index.js"); } } })();

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(580);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reduxActions = __webpack_require__(579);

var _rejection = __webpack_require__(576);

var Actions = _interopRequireWildcard(_rejection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = [];

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.ADD, function (state, _ref) {
  var payload = _ref.payload;
  return [].concat((0, _toConsumableArray3.default)(state), [payload]);
}), (0, _defineProperty3.default)(_handleActions, Actions.deleteAsk, function (state, _ref2) {
  var payload = _ref2.payload;
  return state.filter(function (asks) {
    return asks.id !== payload;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); } } })();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(580);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(579);

var _rejection = __webpack_require__(576);

var Actions = _interopRequireWildcard(_rejection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = 0;
exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.REJECTED, function (state, _ref) {
  var payload = _ref.payload;

  console.log(state);
  var total = state + 10;
  return total;
}), (0, _defineProperty3.default)(_handleActions, Actions.ACCEPTED, function (state, _ref2) {
  var payload = _ref2.payload;

  var total = state + 1;
  return total;
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/points.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/points.js"); } } })();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(96);

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = __webpack_require__(570);

var _reducers = __webpack_require__(667);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsExtension = __webpack_require__(686);

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

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(609);


/***/ })

},[693]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvcmVqZWN0aW9uLmpzP2JjNmE3NTAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YmM2YTc1MCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzP2JjNmE3NTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzP2JjNmE3NTAiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzP2JjNmE3NTAiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/YmM2YTc1MCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzP2JjNmE3NTAiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9pbnRzLmpzP2JjNmE3NTAiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanM/YmM2YTc1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLG9CQUNiO0FBQU8sSUFBTSwwQkFDYjtBQUFPLElBQU0sc0JBQ2I7QUFBTyxJQUFNLDhCQUNiO0FBQU8sSUFBTSw4QkFBVyxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmpCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNFOztBQUNGOzs7O0FBQ0E7Ozs7Ozs7OztBQUdQLElBQU0sUUFBUSxlQUFDLE9BQ2I7eUJBQ0k7O2dCQUFBO2tCQUNDO0FBREQ7QUFBQSxxQkFDRTs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLHNCQUNHOztnQkFBRDtrQkFHUjtBQUhRO0FBQUE7QUFNVDs7a0JBQXlCLGlEQUFPLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ2Qjs7QUFDRjs7SUFFUDs7OztBQUFPLElBQU0sb0RBQW1CLFFBQVEsS0FBSztTQUFPO0FBQ3BELENBRG1CO0FBQ1osSUFBTSw4QkFBVyxnQ0FBYSxRQUNyQztBQUFPLElBQU0sOEJBQVcsZ0NBQWEsUUFDckM7QUFBTyxJQUFNLHNCQUFPLGdDQUFhLFFBQ2pD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TSwyQkFDRywwRUFBVyxZQUNsQixPQUFPLDhDQUNFO0FBRUY7QUFESCxDQURGLENBRkY7O0FBTUYsSUFBTSxXQUFXLGlCQUNmLHdDQUtGOztrQkFBZTtTQUE0Qiw0Q0FBYSxjQUFjO0FBQXRFLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBREQgPSAnQUREJztcbmV4cG9ydCBjb25zdCBERUxFVEUgPSAnREVMRVRFJztcbmV4cG9ydCBjb25zdCBFRElUID0gJ0VESVQnO1xuZXhwb3J0IGNvbnN0IFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvcmVqZWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgIDxIZWFkIC8+XG4gICAgICAgICA8TWFpbiAvPlxuICAgICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL3JlamVjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BREQsIGFzayA9PiBhc2spO1xuZXhwb3J0IGNvbnN0IHJlamVjdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuUkVKRUNURUQpO1xuZXhwb3J0IGNvbnN0IGFjY2VwdGVkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQUNDRVBURUQpO1xuZXhwb3J0IGNvbnN0IGVkaXQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5FRElUKTtcbmV4cG9ydCBjb25zdCBkZWxldGVBc2sgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5ERUxFVEUsIGlkID0+IGlkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8SGVhZD5cbiAgICA8dGl0bGU+UmVqZWN0aW9uIEFwcDwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY29kZS5nZXRtZGwuaW8vMS4zLjAvbWF0ZXJpYWwuaW5kaWdvLXBpbmsubWluLmNzc1wiIC8+XG4gICAgPHNjcmlwdCBkZWZlciBzcmM9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMy4wL21hdGVyaWFsLm1pbi5qc1wiIC8+XG4gIDwvSGVhZD5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5hZGQoe1xuICAgICAgYXNrOicyMCBkb2xsYXJzIHBsZWFzZScsXG4gICAgICBhc2tlZDogJ01vbSdcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVBbnN3ZXIoZXZlbnQsIGFuc3dlcikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYW5zd2VyID09PSBBY3Rpb25zLnJlamVjdGVkID8gdGhpcy5wcm9wcy5yZWplY3RlZCgpIDogdGhpcy5wcm9wcy5hY2NlcHRlZCgpO1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKEFjdGlvbnMucmVqZWN0ZWQoKSlcbiAgICBjb25zdCB7IGxpc3QsIHJlamVjdGVkLCBwb2ludHMsIGFjY2VwdGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8dWwgPlxuICAgICAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXggKyBhc2suYXNrfT5cbiAgICAgICAgICAgICAge2Fzay5hc2t9IHwge2Fzay5hc2tlZH1cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlamVjdGVkXCIgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZUFuc3dlcihlLCBBY3Rpb25zLnJlamVjdGVkKX0gLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFjY2VwdGVkXCIgb25DbGljaz17ZSA9PiB0aGlzLmhhbmRsZUFuc3dlcihlLCBBY3Rpb25zLmFjY2VwdGVkKX0gLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+e3BvaW50c308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHN0YXRlXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaClcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBwb2ludHMgZnJvbSAnLi9wb2ludHMnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdCxcbiAgcG9pbnRzXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvcmVqZWN0aW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gWy4uLnN0YXRlLCBwYXlsb2FkXSxcbiAgW0FjdGlvbnMuZGVsZXRlQXNrXTogKHN0YXRlLCB7IHBheWxvYWR9KSA9PiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBhc2tzLmlkICE9PSBwYXlsb2FkICksXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9saXN0LmpzIiwiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvcmVqZWN0aW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuXG4gIFtBY3Rpb25zLlJFSkVDVEVEXSA6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTA7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9LFxuICBbQWN0aW9ucy5BQ0NFUFRFRF0gOiAoc3RhdGUsIHtwYXlsb2FkfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxO1xuICAgIHJldHVybiB0b3RhbFxuICB9XG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9wb2ludHMuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW107XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7XG4gICAgICAvLyBTcGVjaWZ5IGV4dGVuc2lvbuKAmXMgb3B0aW9ucyBsaWtlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycywgc2VyaWFsaXplLi4uXG4gICAgfSkgOiBjb21wb3NlO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgLy8gb3RoZXIgc3RvcmUgZW5oYW5jZXJzIGlmIGFueVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        