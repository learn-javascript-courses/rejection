webpackHotUpdate(5,{

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(595);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js';

exports.default = function (_ref) {
  var history = _ref.history,
      clearHistory = _ref.clearHistory,
      addToHistory = _ref.addToHistory,
      deleteFromHistory = _ref.deleteFromHistory;
  return history.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, { fluid: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Segment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { compact: true, floated: 'right', basic: true, type: 'button', onClick: clearHistory, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Clear History'), _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), history.map(function (item, index) {
    return _react2.default.createElement(_semanticUiReact.Card, {
      centered: true,
      key: item + Date.now() + item.person + item.time,
      color: item.result === 'REJECTED' ? 'red' : 'green',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, 'You Asked : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, ' ', item.time, ' '), _react2.default.createElement(_semanticUiReact.Card.Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, item.result), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      type: 'button',
      color: item.result === 'REJECTED' ? 'red' : 'green',
      onClick: function onClick() {
        return deleteFromHistory(item.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Delete From History'));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  });
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/ZDcxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUdQOzs7Ozs7a0JBQWU7TUFDRztNQUNBO01BQ0E7TUFDQTtpQkFDSixTQUFTLG9CQUNwQiw0Q0FBVSxPQUFYO2dCQUFBO2tCQUNBO0FBREE7R0FBQSxrQkFDQzs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLHFCQUNHLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxTQUFTLE9BQWxDLE1BQXdDLE1BQU0sVUFBVSxTQUFTO2dCQUFqRTtrQkFBZ0Y7QUFBaEY7S0FDQTs7Z0JBQUE7a0JBQ0c7QUFESDtBQUFBLGNBQ1csSUFBSSxVQUFDLE1BQU0sT0FBUDsyQkFDUjtnQkFFQztXQUFLLE9BQU8sS0FBSyxRQUFRLEtBQUssU0FBUyxLQUN2QzthQUFPLEtBQUssV0FBVyxhQUFhLFFBQVE7O2tCQUg5QztvQkFLRTtBQUxGO0FBQ0UsS0FERixrQkFLRyxjQUFELHNCQUFNOztrQkFBTjtvQkFBQTtBQUFBO0FBQUEsT0FBMEIscUJBQzFCLHdCQUFDLGNBQUQsc0JBQU07O2tCQUFOO29CQUFBO0FBQUE7QUFBQSxPQUFhLFVBQUssTUFDbEIsc0JBQUMsY0FBRCxzQkFBTTs7a0JBQU47b0JBQW1CO0FBQW5CO0FBQUEsWUFDQSx5QkFBQyxjQUFELHNCQUFNLFdBQVEsT0FBZDtrQkFBQTtvQkFBcUI7QUFBckI7WUFDQSx5QkFBQzthQUVDO1lBQ0E7YUFBTyxLQUFLLFdBQVcsYUFBYSxRQUNwQztlQUFTO2VBQU0sa0JBQWtCLEtBQUs7QUFKeEM7O2tCQUFBO29CQU1HO0FBTkg7QUFDRSxPQURGO0FBVkwsTUFMRDs7Z0JBNEJKO2tCQUFBO0FBQUE7QUFBQTtBQWpDRixFIiwiZmlsZSI6IjUuYzgwNzY4ZDI0MDJiZDNkZmMyNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWdtZW50LCBDYXJkLCBDb250YWluZXIsIEJ1dHRvbiAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gICAgICAgICAgICAgICAgICBoaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgYWRkVG9IaXN0b3J5LFxuICAgICAgICAgICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnlcbn0pID0+IGhpc3RvcnkubGVuZ3RoID4gMCA/IChcbiAgPENvbnRhaW5lciBmbHVpZCA+XG4gIDxTZWdtZW50PlxuICAgIDxCdXR0b24gY29tcGFjdCBmbG9hdGVkPXsncmlnaHQnfSBiYXNpYyB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2xlYXJIaXN0b3J5fT57J0NsZWFyIEhpc3RvcnknfTwvQnV0dG9uPlxuICAgIDxiciAvPlxuICAgICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAga2V5PXtpdGVtICsgRGF0ZS5ub3coKSArIGl0ZW0ucGVyc29uICsgaXRlbS50aW1lfVxuICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIDoge2l0ZW0uYXNrZWR9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkLk1ldGE+IHtpdGVtLnRpbWV9IDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+e2l0ZW0ucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+e2l0ZW0ucmVzdWx0fTwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICB0eXBlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tSGlzdG9yeShpdGVtLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeydEZWxldGUgRnJvbSBIaXN0b3J5J31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApKX1cbiAgPC9TZWdtZW50PlxuICA8L0NvbnRhaW5lcj5cbikgOiAoXG4gIDxkaXYgLz5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9