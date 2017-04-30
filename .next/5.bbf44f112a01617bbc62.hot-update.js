webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzP2QxYzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVM7O0FBQ0Y7O0lBQUs7Ozs7Ozs7O0FBRVosSUFBTSxlQUVOOztrQkFBZSxxR0FDWixRQUFRLEtBQU0sVUFBQyxhQUF1QjtNQUFBLGVBQ3JDOztNQUFNLGdDQUF3QjtZQUU1QjtjQUFVLE9BQU8sVUFBQyxPQUFPLEtBQVI7YUFBZ0IsS0FBSyxJQUFJLElBQUksSUFBSTtBQUE5QyxPQUFzRCxDQUFDLEtBRTdEO0FBSEUsR0FEYztvREFJTCxTQUNaO0FBUFksa0RBUVosUUFBUSxRQUFTLFVBQUMsY0FBRDtNQUFVO2VBQW9CLE9BQU87V0FBUSxNQUFNLFNBQVMsT0FBTyxLQUFLO0FBQWhEO0FBUjdCLHFCQVVaLGMiLCJmaWxlIjoiNS5iYmY0NGYxMTJhMDE2MTdiYmM2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbQWN0aW9ucy5BRERdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IE9iamVjdC5hc3NpZ24ocGF5bG9hZCwge1xuICAgICAgZmlsdGVyOiAnbm9uZScsXG4gICAgICBpZDogc3RhdGUucmVkdWNlKChtYXhJZCwgYXNrKSA9PiBNYXRoLm1heChhc2suaWQsIG1heElkKSwgLTEpICsgMVxuICAgIH0pO1xuICAgIHJldHVybiBbLi4uc3RhdGUsIHJlcXVlc3RdO1xuICB9LFxuICBbQWN0aW9ucy5ERUxFVEVdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBzdGF0ZVtwYXlsb2FkXS5pZCAhPT0gYXNrcy5pZClcblxufSwgaW5pdGlhbFN0YXRlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=