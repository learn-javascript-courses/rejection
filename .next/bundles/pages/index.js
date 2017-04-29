
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

var _reactRedux = __webpack_require__(598);

var _MainContainer = __webpack_require__(666);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(665);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_reactRedux.Provider, { store: (0, _store2.default)(), __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_MainContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })));
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

var _reduxActions = __webpack_require__(578);

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

var _reactRedux = __webpack_require__(598);

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
    return _this;
  }

  (0, _createClass3.default)(Main, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      console.log(this.props.list);
      this.props.add({
        ask: '20 dollars please',
        asked: 'Mom'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('input', { type: 'submit', onClick: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list
  };
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

var _defineProperty2 = __webpack_require__(579);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reduxActions = __webpack_require__(578);

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

var _defineProperty2 = __webpack_require__(579);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(578);

var _rejection = __webpack_require__(576);

var Actions = _interopRequireWildcard(_rejection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = 0;
exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.Rejected, function (state, _ref) {
  var payload = _ref.payload;
  return points + 10;
}), (0, _defineProperty3.default)(_handleActions, Actions.Accepted, function (state, _ref2) {
  var payload = _ref2.payload;
  return points + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvcmVqZWN0aW9uLmpzP2EwNzA4ZmQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YTA3MDhmZCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzP2EwNzA4ZmQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkLmpzP2EwNzA4ZmQiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzP2UxNjY3MWMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/ZTE2NjcxYyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzP2UxNjY3MWMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9pbnRzLmpzP2UxNjY3MWMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanM/ZTE2NjcxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLG9CQUNiO0FBQU8sSUFBTSwwQkFDYjtBQUFPLElBQU0sc0JBQ2I7QUFBTyxJQUFNLDhCQUNiO0FBQU8sSUFBTSw4QkFBVyxXOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmpCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNFOztBQUNGOzs7O0FBQ0E7Ozs7Ozs7OztBQUdQLElBQU0sUUFBUSxlQUFDLE9BQ2I7eUJBQ0csc0NBQVMsT0FBTztnQkFBakI7a0JBQ0U7QUFERjtHQUFBLGtCQUNFOztnQkFBQTtrQkFDQztBQUREO0FBQUEscUJBQ0U7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxzQkFDRzs7Z0JBQUQ7a0JBSVI7QUFKUTtBQUFBO0FBT1Q7O2tCQUF5QixpREFBTyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdkI7O0FBQ0Y7O0lBRVA7Ozs7QUFBTyxJQUFNLG9EQUFtQixRQUFRLEtBQUs7U0FBTztBQUNwRCxDQURtQjtBQUNaLElBQU0sOEJBQVcsZ0NBQWEsUUFDckM7QUFBTyxJQUFNLDhCQUFXLGdDQUFhLFFBQ3JDO0FBQU8sSUFBTSxzQkFBTyxnQ0FBYSxRQUNqQztBQUFPLElBQU0sZ0VBQXlCLFFBQVEsUUFBUTtTQUFNO0FBQW5DLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbEI7Ozs7QUFHUDs7Ozs7Ozs7a0JBQWU7eUJBQ1o7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxxQkFDRTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQ0EsMERBQU0sTUFBSyxZQUFXLFNBQVE7Z0JBQTlCO2tCQUNBO0FBREE7OENBQ00sS0FBSSxjQUFhLE1BQUs7Z0JBQTVCO2tCQUNBO0FBREE7OENBQ00sS0FBSSxjQUFhLE1BQUs7Z0JBQTVCO2tCQUNBO0FBREE7OENBQ00sS0FBSSxjQUFhLE1BQUs7Z0JBQTVCO2tCQUNBO0FBREE7Z0RBQ1EsT0FBUixNQUFjLEtBQUk7Z0JBQWxCO2tCQUFBO0FBQUE7O0FBUEosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGdCOzs7O0FBQ1A7O0FBQ0E7O0FBQ0Y7O0lBQUs7Ozs7Ozs7OztJQUVOO2dDQUNKOztrQkFBYzt3Q0FBQTs7NEhBRVo7O1VBQUssZUFBZSxNQUFLLGFBQWEsS0FBdEM7V0FDRDs7Ozs7aUNBQ1ksR0FDWDtRQUNBO2NBQVEsSUFBSSxLQUFLLE1BQ2pCO1dBQUssTUFBTTthQUVUO2VBRUg7QUFIRzs7Ozs2QkFLRjs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLGtEQUNTLE1BQUs7b0JBQVo7c0JBQ0E7QUFEQTttREFDTyxNQUFLLFVBQVMsU0FBUyxLQUFLO29CQUFuQztzQkFHTDtBQUhLOzs7Ozs7QUFqQlc7O0FBdUJuQixJQUFNLGtCQUFrQix5QkFBQyxPQUFEOztVQUNmLE1BQU07QUFBYjtBQURGO0FBR0EsSUFBTSxxQkFBcUIsNEJBQUMsVUFBRDtTQUFjLCtCQUFtQixTQUFTO0FBQXJFOztBQUVBLElBQU0sZ0JBQWdCLHlCQUFRLGlCQUFpQixvQkFDL0M7a0JBQWUsYzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDTjs7QUFDRjs7OztBQUdQOzs7Ozs7O0FBRUU7QUFGNkI7QUFDN0IsQ0FEYSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTjs7QUFDRjs7SUFBSzs7Ozs7Ozs7QUFFWixJQUFNLGVBRU47O2tCQUFlLHFHQUNaLFFBQVEsS0FBTyxVQUFDLGFBQUQ7TUFBVTtvREFBa0IsU0FBTztBQUR0QyxrREFFWixRQUFRLFdBQVksVUFBQyxjQUFEO01BQVU7ZUFBbUIsT0FBTztXQUFRLEtBQUssT0FBTztBQUFqQztBQUYvQixxQkFJWixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RNOztBQUNGOztJQUFLOzs7Ozs7OztBQUVaLElBQU0sZUFDTjtrQkFBZSxxR0FFWixRQUFRLFVBQVksVUFBQyxhQUFEO01BQVU7U0FBYyxTQUFTO0FBRnpDLGtEQUdaLFFBQVEsVUFBWSxVQUFDLGNBQUQ7TUFBUztTQUFhLFNBQVM7QUFIdkMscUJBS1osYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUb0M7O0FBQ2hDOzs7O0FBQ0U7Ozs7QUFFVCxJQUFNLGFBQWE7QUFDbkIsSUFBTSwyQkFDRywwRUFBVyxZQUNsQixPQUFPLDhDQUNFO0FBRUY7QUFESCxDQURGLENBRkY7O0FBTUYsSUFBTSxXQUFXLGlCQUNmLHdDQUtGOztrQkFBZTtTQUE0Qiw0Q0FBYSxjQUFjO0FBQXRFLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBREQgPSAnQUREJztcbmV4cG9ydCBjb25zdCBERUxFVEUgPSAnREVMRVRFJztcbmV4cG9ydCBjb25zdCBFRElUID0gJ0VESVQnO1xuZXhwb3J0IGNvbnN0IFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvcmVqZWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZSgpfT5cbiAgICAgIDxkaXY+XG4gICAgICAgPEhlYWQgLz5cbiAgICAgICAgIDxNYWluIC8+XG4gICAgICAgPC9kaXY+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9yZWplY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgYWRkID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuQURELCBhc2sgPT4gYXNrKTtcbmV4cG9ydCBjb25zdCByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLlJFSkVDVEVEKTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFDQ0VQVEVEKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuRURJVCk7XG5leHBvcnQgY29uc3QgZGVsZXRlQXNrID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuREVMRVRFLCBpZCA9PiBpZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEhlYWQ+XG4gICAgPHRpdGxlPlJlamVjdGlvbiBBcHA8L3RpdGxlPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMy4wL21hdGVyaWFsLmluZGlnby1waW5rLm1pbi5jc3NcIiAvPlxuICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjMuMC9tYXRlcmlhbC5taW4uanNcIiAvPlxuICA8L0hlYWQ+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5saXN0KVxuICAgIHRoaXMucHJvcHMuYWRkKHtcbiAgICAgIGFzazonMjAgZG9sbGFycyBwbGVhc2UnLFxuICAgICAgYXNrZWQ6ICdNb20nXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgbGlzdCA6IHN0YXRlLmxpc3Rcbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vcG9pbnRzJztcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxpc3QsXG4gIHBvaW50c1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL3JlamVjdGlvbic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcbiAgW0FjdGlvbnMuQUREXSA6IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IFsuLi5zdGF0ZSwgcGF5bG9hZF0sXG4gIFtBY3Rpb25zLmRlbGV0ZUFza106IChzdGF0ZSwgeyBwYXlsb2FkfSkgPT4gc3RhdGUuZmlsdGVyKGFza3MgPT4gYXNrcy5pZCAhPT0gcGF5bG9hZCApLFxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL3JlamVjdGlvbic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKHtcblxuICBbQWN0aW9ucy5SZWplY3RlZF0gOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBwb2ludHMgKyAxMCxcbiAgW0FjdGlvbnMuQWNjZXB0ZWRdIDogKHN0YXRlLCB7cGF5bG9hZH0pID0+IHBvaW50cyArIDEsXG5cbn0sIGluaXRpYWxTdGF0ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9wb2ludHMuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW107XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7XG4gICAgICAvLyBTcGVjaWZ5IGV4dGVuc2lvbuKAmXMgb3B0aW9ucyBsaWtlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycywgc2VyaWFsaXplLi4uXG4gICAgfSkgOiBjb21wb3NlO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgLy8gb3RoZXIgc3RvcmUgZW5oYW5jZXJzIGlmIGFueVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        