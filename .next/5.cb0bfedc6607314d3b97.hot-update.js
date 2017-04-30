webpackHotUpdate(5,{

/***/ 1219:
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

var _redux = __webpack_require__(583);

var _reactRedux = __webpack_require__(582);

var _moment = __webpack_require__(562);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(595);

var _actions = __webpack_require__(867);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(1214);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(1218);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(1215);

var _history2 = _interopRequireDefault(_history);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js';


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
    value: function handleSubmit() {
      var RejectionForm = this.props.form.RejectionForm;

      this.props.actions.add(RejectionForm.values);
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(event, _ref) {
      var value = _ref.value,
          answer = _ref.answer,
          index = _ref.index;

      event.preventDefault();
      var _props$actions = this.props.actions,
          rejected = _props$actions.rejected,
          accepted = _props$actions.accepted,
          deleteAsk = _props$actions.deleteAsk,
          addToHistory = _props$actions.addToHistory;

      if (answer === Actions.rejected) rejected();else accepted();
      addToHistory({ time: (0, _moment2.default)().format('LLLL'), value: value, answer: answer });
      deleteAsk(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          list = _props.list,
          points = _props.points,
          history = _props.history,
          _props$actions2 = _props.actions,
          addToHistory = _props$actions2.addToHistory,
          clearHistory = _props$actions2.clearHistory,
          deleteFromHistory = _props$actions2.deleteFromHistory,
          clearScore = _props$actions2.clearScore;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Rejection Game')), _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now(), __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Points ', points), _react2.default.createElement(_semanticUiReact.Button, {
        type: 'submit',
        onClick: clearScore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Clear Score'))))));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    list: state.list,
    points: state.points,
    history: state.history,
    form: state.form
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(Actions, dispatch) };
};

var MainContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);
exports.default = MainContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL01haW5Db250YWluZXIuanM/YzAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNGOzs7O0FBQ29DOztBQUNwQzs7SUFBSzs7QUFDTDs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0lBR0Q7Z0NBQ0o7O2tCQUFjO3dDQUFBOzs0SEFFWjs7VUFBSyxlQUFlLE1BQUssYUFBYSxLQUN0QztVQUFLLGVBQWUsTUFBSyxhQUFhLEtBQXRDO1dBQ0Q7Ozs7O21DQUNjO1VBQ0wsZ0JBQWtCLEtBQUssTUFBTSxLQUNyQzs7V0FBSyxNQUFNLFFBQVEsSUFBSSxjQUN4Qjs7OztpQ0FDWSxhQUFpQztVQUFBO1VBQUE7VUFBQSxhQUM1Qzs7WUFBTTsyQkFDa0QsS0FBSyxNQUFNO1VBQTNEO1VBQVU7VUFBVTtVQUFXLDhCQUN2Qzs7VUFBSSxXQUFXLFFBQVEsVUFBVSxnQkFFakM7bUJBQWEsRUFBRSxNQUFNLHdCQUFTLE9BQU8sU0FBUyxPQUFqQyxPQUF3QyxRQUNyRDtnQkFDRDs7Ozs2QkFDUTttQkFNSCxLQUFLO1VBSlA7VUFDQTtVQUNBO21DQUNEO1VBQVc7VUFBYztVQUFjO1VBQW1CLDZCQUUzRDs7NkJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRyw0Q0FBVSxXQUFXO29CQUF0QjtzQkFDRTtBQURGO3lCQUNFOztvQkFBQTtzQkFBSztBQUFMO0FBQUEsU0FFRixvQ0FBQyw0Q0FBVSxXQUFXO29CQUF0QjtzQkFDRTtBQURGO3lCQUNHLHlDQUFjLFdBQVcsa0JBQWtCLGNBQWMsS0FBSztvQkFBL0Q7c0JBRUY7QUFGRTsyQkFFRCx1Q0FBSyxTQUFTO29CQUFmO3NCQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBTTs7b0JBQU47c0JBQ0U7QUFERjtBQUFBLHlCQUNHLGdDQUFLLGNBQWMsS0FBSyxjQUFjLE1BQU0sTUFBTSxLQUFLLEtBQUs7b0JBQTdEO3NCQUVGO0FBRkU7MkJBRUQsY0FBRCxzQkFBTTs7b0JBQU47c0JBQ0U7QUFERjtBQUFBLHlCQUNHO2lCQUVDO3NCQUNBO3NCQUNBOzJCQUFtQjs7b0JBSnJCO3NCQU9GO0FBUEU7QUFDRSwyQkFNSCxjQUFELHNCQUFNOztvQkFBTjtzQkFDRTtBQURGO0FBQUEseUJBQ0csNENBQVUsV0FBVztvQkFBdEI7c0JBQ0U7QUFERjt5QkFDRywwQ0FBUSxRQUFUO29CQUFBO3NCQUNFO0FBREY7eUJBQ0U7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFhLFdBQ2IseUJBQUM7Y0FFQztpQkFBUzs7b0JBRlg7c0JBSUc7QUFKSDtBQUNFLFNBWWY7Ozs7O0FBOURnQjs7QUFpRW5CLElBQU0sa0JBQWtCLHlCQUFDLE9BQUQ7O1VBQ2hCLE1BQ047WUFBUSxNQUNSO2FBQVMsTUFDVDtVQUFNLE1BQU07QUFIWjtBQURGO0FBTUEsSUFBTSxxQkFBcUIsNEJBQUMsVUFBRDtTQUFlLEVBQUUsU0FBUywrQkFBbUIsU0FBUztBQUFqRjs7QUFFQSxJQUFNLGdCQUFnQix5QkFBUSxpQkFBaUIsb0JBQy9DO2tCQUFlLGMiLCJmaWxlIjoiNS5jYjBiZmVkYzY2MDczMTRkM2I5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFNlZ21lbnQsIENvbnRhaW5lciwgRGl2aWRlciAgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBSZWplY3Rpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybSc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2hpc3RvcnknO1xuXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IHsgUmVqZWN0aW9uRm9ybSB9ID0gdGhpcy5wcm9wcy5mb3JtO1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGQoUmVqZWN0aW9uRm9ybS52YWx1ZXMpO1xuICB9XG4gIGhhbmRsZUFuc3dlcihldmVudCwgeyB2YWx1ZSwgYW5zd2VyLCBpbmRleCB9KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrLCBhZGRUb0hpc3RvcnkgfSA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICBpZiAoYW5zd2VyID09PSBBY3Rpb25zLnJlamVjdGVkKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcbiAgICBhZGRUb0hpc3RvcnkoeyB0aW1lOiBtb21lbnQoKS5mb3JtYXQoJ0xMTEwnKSwgdmFsdWUsIGFuc3dlciB9KTtcbiAgICBkZWxldGVBc2soaW5kZXgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsaXN0LFxuICAgICAgcG9pbnRzLFxuICAgICAgaGlzdG9yeSxcbiAgICAgYWN0aW9uczogeyBhZGRUb0hpc3RvcnksIGNsZWFySGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnksIGNsZWFyU2NvcmUgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxoMT57J1JlamVjdGlvbiBHYW1lJ308L2gxPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93KCl9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgICAgICBhZGRUb0hpc3Rvcnk9e2FkZFRvSGlzdG9yeX1cbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5PXtjbGVhckhpc3Rvcnl9XG4gICAgICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5PXtkZWxldGVGcm9tSGlzdG9yeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPGRpdj5Qb2ludHMge3BvaW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsZWFyU2NvcmV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeydDbGVhciBTY29yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGxpc3Q6IHN0YXRlLmxpc3QsXG4gIHBvaW50czogc3RhdGUucG9pbnRzLFxuICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxuICBmb3JtOiBzdGF0ZS5mb3JtXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHsgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KTtcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=