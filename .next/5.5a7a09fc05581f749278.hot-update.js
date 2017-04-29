webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzP2QxYzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVM7O0FBQ0Y7O0lBQUs7Ozs7Ozs7O0FBRVosSUFBTSxlQUVOOztrQkFBZSxxR0FDWixRQUFRLEtBQU8sVUFBQyxhQUF1QjtNQUFBLGVBQ3RDOztNQUFNLGdDQUF3QjtZQUU1QjtjQUFVLE9BQU8sVUFBQyxPQUFPLEtBQVI7YUFBZ0IsS0FBSyxJQUFJLElBQUksSUFBSTtBQUE5QyxPQUFzRCxDQUFDLEtBRTdEO0FBSEUsR0FEYztvREFJTCxTQUNaO0FBUFksa0RBUVosUUFBUSxRQUFTLFVBQUMsY0FBc0I7TUFBQSxnQkFDdkM7O2VBQWEsT0FBTztXQUFRLE1BQU0sU0FBUyxPQUFPLEtBQUs7QUFDeEQsR0FEUTtBQVRJLHFCQWFaLGMiLCJmaWxlIjoiNS41YTdhMDlmYzA1NTgxZjc0OTI3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERdIDogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcbiAgICAgIGZpbHRlcjogJ25vbmUnLFxuICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGFzaykgPT4gTWF0aC5tYXgoYXNrLmlkLCBtYXhJZCksIC0xKSArIDFcbiAgICB9KTtcbiAgICByZXR1cm4gWy4uLnN0YXRlLCByZXF1ZXN0XVxuICB9LFxuICBbQWN0aW9ucy5ERUxFVEVdOiAoc3RhdGUsIHsgcGF5bG9hZH0pID0+IHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGFza3MgPT4gc3RhdGVbcGF5bG9hZF0uaWQgIT09IGFza3MuaWQpXG4gIH1cblxuXG59LCBpbml0aWFsU3RhdGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=