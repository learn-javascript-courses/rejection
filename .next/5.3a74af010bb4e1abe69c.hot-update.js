webpackHotUpdate(5,{

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

var _actions = __webpack_require__(871);

var Actions = _interopRequireWildcard(_actions);

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
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.person + ask.asked + Date.now(), __source: {
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
    }, 'You Asked : ', ask.asked.toUpperCase()), _react2.default.createElement(_semanticUiReact.Card.Meta, {
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
      fluid: true,
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
      fluid: true,
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, 'Accepted')));
  }))) : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/ZGRjNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDeUI7O0FBQ3pCOztJQUVQOzs7Ozs7O0FBQWUsU0FBUyxXQUE2QjtNQUFBO01BQUEsb0JBQ25EOztjQUFZLFNBQVMsb0JBQ2xCOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0csMENBQVEsUUFBVDtnQkFBQTtrQkFDRztBQURIO1VBQ1EsSUFBSSxVQUFDLEtBQUssT0FBTjsyQkFDUCx1Q0FBSyxRQUFOLE1BQWEsVUFBYixNQUFzQixLQUFLLElBQUksU0FBUyxJQUFJLFFBQVEsS0FBSztrQkFBekQ7b0JBQ0U7QUFERjtLQUFBLGtCQUNHLGNBQUQsc0JBQU07O2tCQUFOO29CQUNFO0FBREY7QUFBQSx1QkFDRyxjQUFELHNCQUFNOztrQkFBTjtvQkFBQTtBQUFBO0FBQUEsT0FBMEIsb0JBQUksTUFDOUIsOENBQUMsc0JBQUs7O2tCQUFOO29CQUNBO0FBREE7QUFBQSx3QkFDQyxjQUFELHNCQUFNOztrQkFBTjtvQkFBQTtBQUFBO0FBQUEsT0FBeUIsY0FFM0IsMEJBQUMsY0FBRCxzQkFBTSxXQUFRLE9BQWQ7a0JBQUE7b0JBQ0U7QUFERjt1QkFDRzthQUVDO2FBQ0E7YUFDQTtlQUFTO2VBQUssYUFBYSxHQUFHLEVBQUUsT0FBTyxLQUFLLFFBQVEsUUFBUSxVQUFVLE9BQXhDO0FBSmhDOztrQkFBQTtvQkFBQTtBQUFBO0FBQ0UsT0FNRiw2QkFBQzthQUVDO2FBQ0E7YUFDQTtlQUFTO2VBQUssYUFBYSxHQUFHLEVBQUUsT0FBTyxLQUFLLFFBQVEsUUFBUSxVQUFVLE9BQXhDO0FBSmhDOztrQkFBQTtvQkFBQTtBQUFBO0FBQ0UsT0FERjtBQWZMLE1BSEE7O2dCQTZCSDtrQkFDTDtBQURLO0FBQUEiLCJmaWxlIjoiNS4zYTc0YWYwMTBiYjRlMWFiZTY5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgU2VnbWVudCwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIHJldHVybiBsaXN0Lmxlbmd0aCA+IDAgPyAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAge2xpc3QubWFwKChhc2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENhcmQgcmFpc2VkIGNlbnRlcmVkIGtleT17YXNrLnBlcnNvbiArIGFzay5hc2tlZCArIERhdGUubm93KCl9PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHthc2suYXNrZWQudG9VcHBlckNhc2UoKX08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhIC8+XG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPkZvciA6IHthc2sucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMucmVqZWN0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+UmVqZWN0ZWRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNvbG9yPXsnZ3JlZW4nfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMuYWNjZXB0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+QWNjZXB0ZWQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gICkgOiA8ZGl2IC8+O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MaXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==