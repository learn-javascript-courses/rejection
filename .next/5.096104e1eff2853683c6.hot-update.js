webpackHotUpdate(5,{

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = __webpack_require__(623);

var _constants = __webpack_require__(622);

var Actions = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var initialState = [];

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, Actions.ADD, function (state, _ref) {
  var payload = _ref.payload;

  var request = Object.assign(payload, {
    filter: 'none',
    id: state.reduce(function (maxId, ask) {
      return Math.max(ask.id, maxId);
    }, -1) + 1
  });
  return [].concat(_toConsumableArray(state), [request]);
}), _defineProperty(_handleActions, Actions.DELETE, function (state, _ref2) {
  var payload = _ref2.payload;
  return state.filter(function (asks) {
    return state[payload].id !== asks.id;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/list.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9saXN0LmpzP2QxYzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFNLGVBQWU7O2tCQUVOLHVGQUVWLFFBQVEsS0FBTSxVQUFDLGFBQXVCO01BQUEsZUFDckM7O01BQU0saUJBQWlCLE9BQU87WUFFNUI7Y0FBVSxPQUFPLFVBQUMsT0FBTyxLQUFSO2FBQWdCLEtBQUssSUFBSSxJQUFJLElBQUk7QUFBOUMsT0FBc0QsQ0FBQyxLQUU3RDtBQUhFLEdBRGM7c0NBSUwsU0FDWjtBQVJVLG9DQVNWLFFBQVEsUUFBUyxVQUFDLGNBQUQ7TUFBVTtlQUFvQixPQUFPO1dBQVEsTUFBTSxTQUFTLE9BQU8sS0FBSztBQUFoRDtBQVQvQixxQkFXYixjIiwiZmlsZSI6IjUuMDk2MTA0ZTFlZmYyODUzNjgzYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKFxuICB7XG4gICAgW0FjdGlvbnMuQUREXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IE9iamVjdC5hc3NpZ24ocGF5bG9hZCwge1xuICAgICAgICBmaWx0ZXI6ICdub25lJyxcbiAgICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIGFzaykgPT4gTWF0aC5tYXgoYXNrLmlkLCBtYXhJZCksIC0xKSArIDFcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcmVxdWVzdF07XG4gICAgfSxcbiAgICBbQWN0aW9ucy5ERUxFVEVdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBzdGF0ZVtwYXlsb2FkXS5pZCAhPT0gYXNrcy5pZClcbiAgfSxcbiAgaW5pdGlhbFN0YXRlXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=