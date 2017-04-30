webpackHotUpdate(5,{

/***/ 772:
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

var _reactRedux = __webpack_require__(569);

var _actions = __webpack_require__(635);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(768);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(771);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(846);

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
      addToHistory({ time: Date.now(), value: value, answer: answer });
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
          lineNumber: 35
        }
      }, _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now(), __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Total ', points, ' ', _react2.default.createElement('input', { type: 'submit', value: 'Clear Score', onClick: clearScore, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL01haW5Db250YWluZXIuanM/YzAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNGOztJQUFLOztBQUNMOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7SUFFRDtnQ0FDSjs7a0JBQWM7d0NBQUE7OzRIQUVaOztVQUFLLGVBQWUsTUFBSyxhQUFhLEtBQ3RDO1VBQUssZUFBZSxNQUFLLGFBQWEsS0FBdEM7V0FDRDs7Ozs7bUNBQ2M7VUFDTCxnQkFBa0IsS0FBSyxNQUFNLEtBQ3JDOztXQUFLLE1BQU0sUUFBUSxJQUFJLGNBQ3hCOzs7O2lDQUNZLGFBQWlDO1VBQUE7VUFBQTtVQUFBLGFBQzVDOztZQUFNOzJCQUNrRCxLQUFLLE1BQU07VUFBM0Q7VUFBVTtVQUFVO1VBQVcsOEJBQ3ZDOztVQUFJLFdBQVcsUUFBUSxVQUFVLGdCQUVqQzttQkFBYSxFQUFFLE1BQU0sS0FBSyxPQUFPLE9BQXBCLE9BQTJCLFFBQ3hDO2dCQUNEOzs7OzZCQUNRO21CQU1ILEtBQUs7VUFKUDtVQUNBO1VBQ0E7bUNBQ0Q7VUFBVztVQUFjO1VBQWM7VUFBbUIsNkJBRTNEOzs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHLHlDQUFjLFdBQVcsa0JBQWtCLGNBQWMsS0FBSztvQkFBL0Q7c0JBQ0E7QUFEQTswQkFDQyxnQ0FBSyxjQUFjLEtBQUssY0FBYyxNQUFNLE1BQU0sS0FBSyxLQUFLO29CQUE3RDtzQkFDQTtBQURBOzBCQUNDO2lCQUVDO3NCQUNBO3NCQUNBOzJCQUFtQjs7b0JBSnJCO3NCQU1BO0FBTkE7QUFDRSwwQkFLRjs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVksVUFBWixRQUFvQiw4Q0FBTyxNQUFNLFVBQVUsT0FBTyxlQUFlLFNBQVM7b0JBQXREO3NCQUd6QjtBQUh5Qjs7Ozs7O0FBbkNUOztBQXlDbkIsSUFBTSxrQkFBa0IseUJBQUMsT0FBRDs7VUFDaEIsTUFDTjtZQUFRLE1BQ1I7YUFBUyxNQUNUO1VBQU0sTUFBTTtBQUhaO0FBREY7QUFNQSxJQUFNLHFCQUFxQiw0QkFBQyxVQUFEO1NBQWUsRUFBRSxTQUFTLCtCQUFtQixTQUFTO0FBQWpGOztBQUVBLElBQU0sZ0JBQWdCLHlCQUFRLGlCQUFpQixvQkFDL0M7a0JBQWUsYyIsImZpbGUiOiI1LmZjMmMwNmNkNGRmMDM2NWZkYzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IHsgUmVqZWN0aW9uRm9ybSB9ID0gdGhpcy5wcm9wcy5mb3JtO1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGQoUmVqZWN0aW9uRm9ybS52YWx1ZXMpO1xuICB9XG4gIGhhbmRsZUFuc3dlcihldmVudCwgeyB2YWx1ZSwgYW5zd2VyLCBpbmRleCB9KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrLCBhZGRUb0hpc3RvcnkgfSA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICBpZiAoYW5zd2VyID09PSBBY3Rpb25zLnJlamVjdGVkKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcbiAgICBhZGRUb0hpc3RvcnkoeyB0aW1lOiBEYXRlLm5vdygpLCB2YWx1ZSwgYW5zd2VyIH0pO1xuICAgIGRlbGV0ZUFzayhpbmRleCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3QsXG4gICAgICBwb2ludHMsXG4gICAgICBoaXN0b3J5LFxuICAgICBhY3Rpb25zOiB7IGFkZFRvSGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBkZWxldGVGcm9tSGlzdG9yeSwgY2xlYXJTY29yZSB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDxMaXN0IGhhbmRsZUFuc3dlcj17dGhpcy5oYW5kbGVBbnN3ZXJ9IGxpc3Q9e2xpc3R9IGtleT17RGF0ZS5ub3coKX0gLz5cbiAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgIGFkZFRvSGlzdG9yeT17YWRkVG9IaXN0b3J5fVxuICAgICAgICAgIGNsZWFySGlzdG9yeT17Y2xlYXJIaXN0b3J5fVxuICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5PXtkZWxldGVGcm9tSGlzdG9yeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5Ub3RhbCB7cG9pbnRzfSA8aW5wdXQgdHlwZT17J3N1Ym1pdCd9IHZhbHVlPXsnQ2xlYXIgU2NvcmUnfSBvbkNsaWNrPXtjbGVhclNjb3JlfS8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgbGlzdDogc3RhdGUubGlzdCxcbiAgcG9pbnRzOiBzdGF0ZS5wb2ludHMsXG4gIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnksXG4gIGZvcm06IHN0YXRlLmZvcm1cbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuXG5jb25zdCBNYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==