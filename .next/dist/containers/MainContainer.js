'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _reactAutobind = require("react-autobind");

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _semanticUiReact = require("semantic-ui-react");

var _actions = require("../actions");

var Actions = _interopRequireWildcard(_actions);

var _List = require("../components/List");

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = require("../components/rejectionForm");

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = require("../components/history");

var _history2 = _interopRequireDefault(_history);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  _createClass(Main, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _props = this.props,
          add = _props.actions.add,
          _props$form$Rejection = _props.form.RejectionForm.values,
          asked = _props$form$Rejection.asked,
          person = _props$form$Rejection.person;

      add(asked, person);
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(_ref) {
      var value = _ref.value,
          answer = _ref.answer;
      var _props$actions = this.props.actions,
          rejected = _props$actions.rejected,
          accepted = _props$actions.accepted,
          deleteAsk = _props$actions.deleteAsk,
          addToHistory = _props$actions.addToHistory;

      var result = Object.assign(value, { result: answer().type });

      if (answer().type === 'REJECTED') rejected();else accepted();

      addToHistory(result);
      deleteAsk(result.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          list = _props2.list,
          points = _props2.points,
          history = _props2.history,
          _props2$actions = _props2.actions,
          addToHistory = _props2$actions.addToHistory,
          clearHistory = _props2$actions.clearHistory,
          deleteFromHistory = _props2$actions.deleteFromHistory,
          clearScore = _props2$actions.clearScore;

      return _react2.default.createElement('div', null, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center' }, _react2.default.createElement('h1', null, 'Rejection Game')), _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center' }, _react2.default.createElement(_rejectionForm2.default, { className: 'main-container', handleSubmit: this.handleSubmit })), _react2.default.createElement(_semanticUiReact.Grid, { columns: 2 }, _react2.default.createElement(_semanticUiReact.Grid.Column, null, _react2.default.createElement(_List2.default, { handleAnswer: this.handleAnswer, list: list, key: Date.now() })), _react2.default.createElement(_semanticUiReact.Grid.Column, null, _react2.default.createElement(_history2.default, {
        history: history,
        addToHistory: addToHistory,
        clearHistory: clearHistory,
        deleteFromHistory: deleteFromHistory
      })), _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Container, { textAlign: 'center' }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true }, _react2.default.createElement('div', null, 'Points ', points), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', onClick: clearScore }, 'Clear Score'))))));
    }
  }]);

  return Main;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var list = _ref2.list,
      points = _ref2.points,
      history = _ref2.history,
      form = _ref2.form;
  return {
    list: list,
    points: points,
    history: history,
    form: form
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(Actions, dispatch) };
};

var MainContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Main);
exports.default = MainContainer;