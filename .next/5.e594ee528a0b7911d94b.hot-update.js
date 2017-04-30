webpackHotUpdate(5,{

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(866);

var Actions = _interopRequireWildcard(_actions);

var _semanticUiReact = __webpack_require__(929);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js';
function List(_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;

  return list.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, list.map(function (ask, index) {
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.person + ask.name + Date.now(), __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement(_semanticUiReact.Card.Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, 'You Asked : ', ask.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }), _react2.default.createElement(_semanticUiReact.Card.Description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, 'For : ', ask.person)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'red',
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.rejected, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, 'Rejected'), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'green',
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, 'Accepted')));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/ZGRjNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDQTs7SUFBSzs7QUFHWjs7Ozs7OztBQUFlLFNBQVMsV0FBNkI7TUFBQTtNQUFBLG9CQUNuRDs7Y0FBWSxTQUFTLG9CQUNoQjs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLHFCQUNHLDBDQUFRLFFBQVQ7Z0JBQUE7a0JBQ0M7QUFERDtVQUNNLElBQUksVUFBQyxLQUFLLE9BQU47MkJBQ1AsdUNBQUssUUFBUSxNQUFNLFVBQVUsTUFBTSxLQUFLLElBQUksU0FBUyxJQUFJLE9BQU8sS0FBSztrQkFBdEU7b0JBQ0k7QUFESjtLQUFBLGtCQUNLLGNBQUQsc0JBQU07O2tCQUFOO29CQUNFO0FBREY7QUFBQSx1QkFDRyxjQUFELHNCQUFNOztrQkFBTjtvQkFBQTtBQUFBO0FBQUEsT0FBMEIsb0JBQzFCLHNDQUFDLHNCQUFLOztrQkFBTjtvQkFDQTtBQURBO0FBQUEsd0JBQ0MsY0FBRCxzQkFBTTs7a0JBQU47b0JBQUE7QUFBQTtBQUFBLE9BQXlCLGNBRTNCLDBCQUFDLGNBQUQsc0JBQU0sV0FBUSxPQUFkO2tCQUFBO29CQUNFO0FBREY7dUJBQ0c7YUFFQzthQUNBO2VBQVM7ZUFBSyxhQUFhLEdBQUcsRUFBRSxPQUFPLEtBQUssUUFBUSxRQUFRLFVBQVUsT0FBeEM7QUFIaEM7O2tCQUFBO29CQUFBO0FBQUE7QUFDRSxPQUtGLDZCQUFDO2FBRUM7YUFDQTtlQUFTO2VBQUssYUFBYSxHQUFHLEVBQUUsT0FBTyxLQUFLLFFBQVEsUUFBUSxVQUFVLE9BQXhDO0FBSGhDOztrQkFBQTtvQkFBQTtBQUFBO0FBQ0UsT0FERjtBQWRQLE1BSEE7O2dCQTJCSDtrQkFDTDtBQURLO0FBQUEiLCJmaWxlIjoiNS5lNTk0ZWU1MjhhMGI3OTExZDk0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIHJldHVybiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHJhaXNlZD17dHJ1ZX0gY2VudGVyZWQ9e3RydWV9IGtleT17YXNrLnBlcnNvbiArIGFzay5uYW1lICsgRGF0ZS5ub3coKX0+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHthc2suYXNrZWR9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPjwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPkZvciA6IHthc2sucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsncmVkJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHsgdmFsdWU6IGFzaywgYW5zd2VyOiBBY3Rpb25zLnJlamVjdGVkLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgICA+UmVqZWN0ZWRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgICAgY29sb3I9eydncmVlbid9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5hY2NlcHRlZCwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgPkFjY2VwdGVkPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgICAgPC9TZWdtZW50PlxuICAgICAgPC9Db250YWluZXI+XG4gICkgOiA8ZGl2IC8+XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpc3QuanMiXSwic291cmNlUm9vdCI6IiJ9