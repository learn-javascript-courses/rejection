webpackHotUpdate(5,{

/***/ 773:
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

var _reduxForm = __webpack_require__(590);

var _reactRedux = __webpack_require__(569);

var _actions = __webpack_require__(635);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(768);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(772);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(769);

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
          lineNumber: 36
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Rejection Game'), _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now(), __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Total ', points, ' ', _react2.default.createElement('input', { type: 'submit', value: 'Clear Score', onClick: clearScore, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL01haW5Db250YWluZXIuanM/YzAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNBOztBQUNGOztJQUFLOztBQUNMOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7SUFFRDtnQ0FDSjs7a0JBQWM7d0NBQUE7OzRIQUVaOztVQUFLLGVBQWUsTUFBSyxhQUFhLEtBQ3RDO1VBQUssZUFBZSxNQUFLLGFBQWEsS0FBdEM7V0FDRDs7Ozs7bUNBQ2M7VUFDTCxnQkFBa0IsS0FBSyxNQUFNLEtBQ3JDOztXQUFLLE1BQU0sUUFBUSxJQUFJLGNBQ3hCOzs7O2lDQUNZLGFBQWlDO1VBQUE7VUFBQTtVQUFBLGFBQzVDOztZQUFNOzJCQUNrRCxLQUFLLE1BQU07VUFBM0Q7VUFBVTtVQUFVO1VBQVcsOEJBQ3ZDOztVQUFJLFdBQVcsUUFBUSxVQUFVLGdCQUVqQzttQkFBYSxFQUFFLE1BQU0sS0FBSyxPQUFPLE9BQXBCLE9BQTJCLFFBQ3hDO2dCQUNEOzs7OzZCQUNRO21CQU1ILEtBQUs7VUFKUDtVQUNBO1VBQ0E7bUNBQ0Q7VUFBVztVQUFjO1VBQWM7VUFBbUIsNkJBRTNEOzs2QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNFOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDQSxtQ0FBQyx5Q0FBYyxXQUFXLGtCQUFrQixjQUFjLEtBQUs7b0JBQS9EO3NCQUNBO0FBREE7MEJBQ0MsZ0NBQUssY0FBYyxLQUFLLGNBQWMsTUFBTSxNQUFNLEtBQUssS0FBSztvQkFBN0Q7c0JBQ0E7QUFEQTswQkFDQztpQkFFQztzQkFDQTtzQkFDQTsyQkFBbUI7O29CQUpyQjtzQkFNQTtBQU5BO0FBQ0UsMEJBS0Y7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLFVBQVosUUFBb0IsOENBQU8sTUFBTSxVQUFVLE9BQU8sZUFBZSxTQUFTO29CQUF0RDtzQkFHekI7QUFIeUI7Ozs7OztBQXBDVDs7QUEwQ25CLElBQU0sa0JBQWtCLHlCQUFDLE9BQUQ7O1VBQ2hCLE1BQ047WUFBUSxNQUNSO2FBQVMsTUFDVDtVQUFNLE1BQU07QUFIWjtBQURGO0FBTUEsSUFBTSxxQkFBcUIsNEJBQUMsVUFBRDtTQUFlLEVBQUUsU0FBUywrQkFBbUIsU0FBUztBQUFqRjs7QUFFQSxJQUFNLGdCQUFnQix5QkFBUSxpQkFBaUIsb0JBQy9DO2tCQUFlLGMiLCJmaWxlIjoiNS5mZDA4NjQ2ZTk5NjM4MWM2NTZmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCc7XG5pbXBvcnQgUmVqZWN0aW9uRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0nO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi4vY29tcG9uZW50cy9oaXN0b3J5JztcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQW5zd2VyID0gdGhpcy5oYW5kbGVBbnN3ZXIuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgeyBSZWplY3Rpb25Gb3JtIH0gPSB0aGlzLnByb3BzLmZvcm07XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFkZChSZWplY3Rpb25Gb3JtLnZhbHVlcyk7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKGV2ZW50LCB7IHZhbHVlLCBhbnN3ZXIsIGluZGV4IH0pIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcmVqZWN0ZWQsIGFjY2VwdGVkLCBkZWxldGVBc2ssIGFkZFRvSGlzdG9yeSB9ID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgIGlmIChhbnN3ZXIgPT09IEFjdGlvbnMucmVqZWN0ZWQpIHJlamVjdGVkKCk7XG4gICAgZWxzZSBhY2NlcHRlZCgpO1xuICAgIGFkZFRvSGlzdG9yeSh7IHRpbWU6IERhdGUubm93KCksIHZhbHVlLCBhbnN3ZXIgfSk7XG4gICAgZGVsZXRlQXNrKGluZGV4KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdCxcbiAgICAgIHBvaW50cyxcbiAgICAgIGhpc3RvcnksXG4gICAgIGFjdGlvbnM6IHsgYWRkVG9IaXN0b3J5LCBjbGVhckhpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5LCBjbGVhclNjb3JlIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxoMT57YFJlamVjdGlvbiBHYW1lYH08L2gxPlxuICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDxMaXN0IGhhbmRsZUFuc3dlcj17dGhpcy5oYW5kbGVBbnN3ZXJ9IGxpc3Q9e2xpc3R9IGtleT17RGF0ZS5ub3coKX0gLz5cbiAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgIGFkZFRvSGlzdG9yeT17YWRkVG9IaXN0b3J5fVxuICAgICAgICAgIGNsZWFySGlzdG9yeT17Y2xlYXJIaXN0b3J5fVxuICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5PXtkZWxldGVGcm9tSGlzdG9yeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5Ub3RhbCB7cG9pbnRzfSA8aW5wdXQgdHlwZT17J3N1Ym1pdCd9IHZhbHVlPXsnQ2xlYXIgU2NvcmUnfSBvbkNsaWNrPXtjbGVhclNjb3JlfS8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgbGlzdDogc3RhdGUubGlzdCxcbiAgcG9pbnRzOiBzdGF0ZS5wb2ludHMsXG4gIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnksXG4gIGZvcm06IHN0YXRlLmZvcm1cbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuXG5jb25zdCBNYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==