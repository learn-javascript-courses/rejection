
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 594:
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

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(662);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(667);

var _store2 = _interopRequireDefault(_store);

var _Head = __webpack_require__(663);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/pages/index.js?entry';


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
  }), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Hello World'));
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

/***/ 663:
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

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _points = __webpack_require__(666);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(665);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  list: _list2.default,
  points: _points2.default
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/index.js"); } } })();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(577);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(95);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _reduxActions = __webpack_require__(603);

var _rejection = __webpack_require__(594);

var Actions = _interopRequireWildcard(_rejection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var initialState = [];

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, Actions.ADD, function (state, _ref) {
  var payload = _ref.payload;
  return [].concat((0, _toConsumableArray3.default)(state), (0, _toConsumableArray3.default)(payload));
}), (0, _defineProperty3.default)(_handleActions, Actions.deleteAsk, function (state, _ref2) {
  var payload = _ref2.payload;
  return state.filter(function (asks) {
    return asks.id !== payload;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/reducers/list.js"); } } })();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(577);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _reduxActions = __webpack_require__(603);

var _rejection = __webpack_require__(594);

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

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(570);

var _reducers = __webpack_require__(664);

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxDevtoolsExtension = __webpack_require__(684);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/store/index.js"); } } })();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(608);


/***/ })

},[691]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvcmVqZWN0aW9uLmpzPzJiYzE2Y2MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MmJjMTZjYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/MmJjMTZjYyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz8yYmMxNmNjIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2xpc3QuanM/MmJjMTZjYyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb2ludHMuanM/MmJjMTZjYyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcz8yYmMxNmNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sb0JBQ2I7QUFBTyxJQUFNLDBCQUNiO0FBQU8sSUFBTSxzQkFDYjtBQUFPLElBQU0sOEJBQ2I7QUFBTyxJQUFNLDhCQUFXLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKakI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7OztBQUdQLElBQU0sUUFBUTt5QkFDWjs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLHFCQUNHOztnQkFBRDtrQkFDQTtBQURBO0FBQUEsc0JBQ0E7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQTtBQU9KOztrQkFBeUIsaURBQU8sTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCekI7Ozs7QUFHUDs7Ozs7Ozs7a0JBQWU7eUJBQ1o7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxxQkFDRTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQ0EsMERBQU0sTUFBSyxZQUFXLFNBQVE7Z0JBQTlCO2tCQUNBO0FBREE7OENBQ00sS0FBSSxjQUFhLE1BQUs7Z0JBQTVCO2tCQUNBO0FBREE7OENBQ00sS0FBSSxjQUFhLE1BQUs7Z0JBQTVCO2tCQUNBO0FBREE7OENBQ00sS0FBSSxjQUFhLE1BQUs7Z0JBQTVCO2tCQUNBO0FBREE7Z0RBQ1EsT0FBUixNQUFjLEtBQUk7Z0JBQWxCO2tCQUFBO0FBQUE7O0FBUEosRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hTOztBQUNGOzs7O0FBR1A7Ozs7Ozs7QUFFRTtBQUY2QjtBQUM3QixDQURhLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pOOztBQUNGOztJQUFLOzs7Ozs7OztBQUVaLElBQU0sZUFFTjs7a0JBQWUscUdBQ1osUUFBUSxLQUFPLFVBQUMsYUFBRDtNQUFVO29EQUFrQix5Q0FBVTtBQUR6QyxrREFHWixRQUFRLFdBQWEsVUFBQyxjQUFEO01BQVU7ZUFBbUIsT0FBTztXQUFRLEtBQUssT0FBTztBQUFqQztBQUhoQyxxQkFLWixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZNOztBQUNGOztJQUFLOzs7Ozs7OztBQUVaLElBQU0sZUFDTjtrQkFBZSxxR0FFWixRQUFRLFVBQVksVUFBQyxhQUFEO01BQVU7U0FBYyxTQUFTO0FBRnpDLGtEQUdaLFFBQVEsVUFBWSxVQUFDLGNBQUQ7TUFBUztTQUFhLFNBQVM7QUFIdkMscUJBS1osYzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RvQzs7QUFDaEM7Ozs7QUFLUDs7OztrQkFBZSx3QkFDYjtNQUFNLFFBQW9CLDRDQUFhLGNBQWMsT0FBTyxnQ0FBZ0MsT0FDN0Y7QUFGRCxFIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREID0gJ0FERCc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XG5leHBvcnQgY29uc3QgRURJVCA9ICdFRElUJztcbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL3JlamVjdGlvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPGRpdj5cbiAgICAgIEhlbGxvIFdvcmxkXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPEhlYWQ+XG4gICAgPHRpdGxlPlJlamVjdGlvbiBBcHA8L3RpdGxlPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIC8+XG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NvZGUuZ2V0bWRsLmlvLzEuMy4wL21hdGVyaWFsLmluZGlnby1waW5rLm1pbi5jc3NcIiAvPlxuICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiaHR0cHM6Ly9jb2RlLmdldG1kbC5pby8xLjMuMC9tYXRlcmlhbC5taW4uanNcIiAvPlxuICA8L0hlYWQ+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHBvaW50cyBmcm9tICcuL3BvaW50cyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9yZWplY3Rpb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG4gIFtBY3Rpb25zLkFERF0gOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBbLi4uc3RhdGUsIC4uLnBheWxvYWRdLFxuXG4gIFtBY3Rpb25zLmRlbGV0ZUFza10gOiAoc3RhdGUsIHsgcGF5bG9hZH0pID0+IHN0YXRlLmZpbHRlcihhc2tzID0+IGFza3MuaWQgIT09IHBheWxvYWQgKSxcblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9yZWplY3Rpb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAwO1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyh7XG5cbiAgW0FjdGlvbnMuUmVqZWN0ZWRdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gcG9pbnRzICsgMTAsXG4gIFtBY3Rpb25zLkFjY2VwdGVkXSA6IChzdGF0ZSwge3BheWxvYWR9KSA9PiBwb2ludHMgKyAxLFxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcG9pbnRzLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSApXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        