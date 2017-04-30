'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = require('semantic-ui-react');

var _actions = require('../actions');

var Actions = _interopRequireWildcard(_actions);

var _List = require('../components/List');

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = require('../components/rejectionForm');

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = require('../components/history');

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