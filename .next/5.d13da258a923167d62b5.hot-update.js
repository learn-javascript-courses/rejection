webpackHotUpdate(5,{

/***/ 666:
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

var _reactRedux = __webpack_require__(577);

var _actions = __webpack_require__(664);

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js';


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
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.add({
        ask: '20 dollars please',
        asked: 'Mom'
      });
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(event, answer) {
      event.preventDefault();
      answer === Actions.rejected ? this.props.rejected() : this.props.accepted();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(Actions.rejected());
      var _props = this.props,
          list = _props.list,
          rejected = _props.rejected,
          points = _props.points,
          accepted = _props.accepted;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('input', { type: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('input', { type: 'submit', onClick: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, list.map(function (ask, index) {
        return _react2.default.createElement('li', { key: index + ask.ask, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, ask.ask, ' | ', ask.asked, _react2.default.createElement('input', { type: 'submit', value: 'Rejected', onClick: function onClick(e) {
            return _this2.handleAnswer(e, Actions.rejected);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }), _react2.default.createElement('input', { type: 'submit', value: 'Accepted', onClick: function onClick(e) {
            return _this2.handleAnswer(e, Actions.accepted);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }));
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, points));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Actions, dispatch);
};

var MainContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);
exports.default = MainContainer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/rejection/containers/MainContainer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL01haW5Db250YWluZXIuanM/YzAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNQOztBQUNBOztBQUNGOztJQUFLOzs7Ozs7Ozs7SUFFTjtnQ0FDSjs7a0JBQWM7d0NBQUE7OzRIQUVaOztVQUFLLGVBQWUsTUFBSyxhQUFhLEtBQ3RDO1VBQUssZUFBZSxNQUFLLGFBQWEsS0FBdEM7V0FDRDs7Ozs7aUNBQ1ksR0FDWDtRQUNBO1dBQUssTUFBTTthQUVUO2VBRUg7QUFIRzs7OztpQ0FJUyxPQUFPLFFBQ2xCO1lBQ0E7aUJBQVcsUUFBUSxXQUFXLEtBQUssTUFBTSxhQUFhLEtBQUssTUFFNUQ7Ozs7NkJBQ1E7bUJBQ1A7O2NBQVEsSUFBSSxRQUFRO21CQUN5QixLQUFLO1VBQTFDO1VBQU07VUFBVTtVQUFRLGtCQUNoQzs7NkJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSxrREFDUyxNQUFLO29CQUFaO3NCQUNBO0FBREE7bURBQ08sTUFBSyxVQUFTLFNBQVMsS0FBSztvQkFBbkM7c0JBQ0E7QUFEQTswQkFDQTs7b0JBQUE7c0JBQ0c7QUFESDtBQUFBLGNBQ1EsSUFBSSxVQUFDLEtBQUssT0FBTjsrQkFDUixzQkFBSSxLQUFLLFFBQVEsSUFBSTtzQkFBckI7d0JBQ0c7QUFESDtTQUFBLE1BQ08sS0FBUSxXQUNiLGdEQUFPLE1BQUssVUFBUyxPQUFNLFlBQVcsU0FBUzttQkFBSyxPQUFLLGFBQWEsR0FBRyxRQUFRO0FBQWpGO3NCQUFBO3dCQUNBO0FBREE7cURBQ08sTUFBSyxVQUFTLE9BQU0sWUFBVyxTQUFTO21CQUFLLE9BQUssYUFBYSxHQUFHLFFBQVE7QUFBakY7c0JBQUE7d0JBQUE7QUFBQTs7QUFJTjs7b0JBQUE7c0JBQU07QUFBTjtBQUFBLFNBR0w7Ozs7O0FBckNnQjs7QUF3Q25CLElBQU0sa0JBQWtCLHlCQUFDLE9BQUQ7U0FBVztBQUFuQztBQUNBLElBQU0scUJBQXFCLDRCQUFDLFVBQUQ7U0FBYywrQkFBbUIsU0FBUztBQUFyRTs7QUFFQSxJQUFNLGdCQUFnQix5QkFBUSxpQkFBaUIsb0JBQy9DO2tCQUFlLGMiLCJmaWxlIjoiNS5kMTNkYTI1OGE5MjMxNjdkNjJiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBbnN3ZXIgPSB0aGlzLmhhbmRsZUFuc3dlci5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuYWRkKHtcbiAgICAgIGFzazonMjAgZG9sbGFycyBwbGVhc2UnLFxuICAgICAgYXNrZWQ6ICdNb20nXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKGV2ZW50LCBhbnN3ZXIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFuc3dlciA9PT0gQWN0aW9ucy5yZWplY3RlZCA/IHRoaXMucHJvcHMucmVqZWN0ZWQoKSA6IHRoaXMucHJvcHMuYWNjZXB0ZWQoKTtcblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhBY3Rpb25zLnJlamVjdGVkKCkpXG4gICAgY29uc3QgeyBsaXN0LCByZWplY3RlZCwgcG9pbnRzLCBhY2NlcHRlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPHVsID5cbiAgICAgICAgICB7bGlzdC5tYXAoKGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4ICsgYXNrLmFza30+XG4gICAgICAgICAgICAgIHthc2suYXNrfSB8IHthc2suYXNrZWR9XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZWplY3RlZFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVBbnN3ZXIoZSwgQWN0aW9ucy5yZWplY3RlZCl9IC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBY2NlcHRlZFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVBbnN3ZXIoZSwgQWN0aW9ucy5hY2NlcHRlZCl9IC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2Pntwb2ludHN9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiBzdGF0ZVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9