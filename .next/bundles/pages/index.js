
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Rejection App'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' }));
};

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/Head.js"); } } })();

/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

var _actions = __webpack_require__(870);

var Actions = _interopRequireWildcard(_actions);

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

function List(_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;

  return list.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_semanticUiReact.Segment, { padded: true }, list.map(function (ask, index) {
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.person + ask.asked + Date.now() }, _react2.default.createElement(_semanticUiReact.Card.Content, null, _react2.default.createElement(_semanticUiReact.Card.Header, null, 'You Asked : ', ask.asked.toUpperCase()), _react2.default.createElement(_semanticUiReact.Card.Meta, null), _react2.default.createElement(_semanticUiReact.Card.Description, null, 'For : ', ask.person)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'red',
      fluid: true,
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.rejected, index: index });
      }
    }, 'Rejected'), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'green',
      fluid: true,
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      }
    }, 'Accepted')));
  }))) : _react2.default.createElement('div', null);
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var history = _ref.history,
      clearHistory = _ref.clearHistory,
      addToHistory = _ref.addToHistory,
      deleteFromHistory = _ref.deleteFromHistory;
  return history.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, { fluid: true }, _react2.default.createElement(_semanticUiReact.Segment, null, _react2.default.createElement(_semanticUiReact.Button, {
    compact: true,
    floated: 'right',
    basic: true, type: 'button',
    onClick: clearHistory
  }, 'Clear History'), _react2.default.createElement('br', null), history.map(function (item, index) {
    return _react2.default.createElement(_semanticUiReact.Card, {
      centered: true,
      key: item + Date.now() + item.person + item.time,
      color: item.result === 'REJECTED' ? 'red' : 'green'
    }, _react2.default.createElement(_semanticUiReact.Card.Header, null, 'You Asked For : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, null, 'Date: ', item.time, ' '), _react2.default.createElement(_semanticUiReact.Card.Description, null, 'You Asked : ', item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, item.result), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      type: 'button',
      color: item.result === 'REJECTED' ? 'red' : 'green',
      onClick: function onClick() {
        return deleteFromHistory(item.id);
      }
    }, 'Delete From History'));
  }))) : _react2.default.createElement('div', null);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/history.js"); } } })();

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var handleSubmit = props.handleSubmit,
      reset = props.reset,
      pristine = props.pristine,
      submitting = props.submitting,
      errors = props.errors;

  return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: handleSubmit }, _react2.default.createElement(_reduxForm.Field, {
    name: 'asked',
    type: 'text',
    component: _formComponent2.default
  }), _react2.default.createElement(_reduxForm.Field, {
    name: 'person',
    type: 'text',
    component: _formComponent2.default
  }), _react2.default.createElement(_semanticUiReact.Button.Group, null, _react2.default.createElement(_semanticUiReact.Button, {
    onClick: function onClick(e) {
      e.preventDefault();
      return reset('RejectionForm');
    }
  }, 'Cancel'), _react2.default.createElement(_semanticUiReact.Button.Or, null), _react2.default.createElement(_semanticUiReact.Button, {
    positive: true,
    type: 'submit',
    disabled: pristine && errors === undefined || submitting && errors === undefined,
    onClick: function onClick(e) {
      e.preventDefault();
      handleSubmit();
      return reset('RejectionForm');
    }
  }, 'Submit')));
};

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(663);

var _semanticUiReact = __webpack_require__(599);

var _formComponent = __webpack_require__(1220);

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); } } })();

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(599);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      custom = _objectWithoutProperties(_ref, ['input', 'meta']);

  var hasError = touched && error !== undefined;
  return _react2.default.createElement(_semanticUiReact.Form.Input, _extends({
    label: input.name.toUpperCase(),
    type: 'text',
    fluid: true
  }, input, custom, {
    error: hasError
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/formComponent.js"); } } })();

/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(663);

var _form = __webpack_require__(1219);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var validate = function validate(_ref) {
  var asked = _ref.asked,
      person = _ref.person;

  var errors = {};
  if (asked === undefined) errors.asked = 'Asked Field Required';
  if (person === undefined) errors.person = 'Person Field Required';
  return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'RejectionForm',
  validate: validate
})(_form2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/index.js"); } } })();

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(587);

var _reactRedux = __webpack_require__(586);

var _moment = __webpack_require__(566);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(599);

var _actions = __webpack_require__(870);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(1217);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(1221);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(1218);

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

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleAnswer = _this.handleAnswer.bind(_this);
    return _this;
  }

  _createClass(Main, [{
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

      addToHistory(_extends({ time: (0, _moment2.default)().format('LLLL'), answer: answer }, value));
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

/***/ }),

/***/ 1223:
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

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, Actions.ADD_HISTORY, function (state, _ref) {
  var payload = _ref.payload;

  var historyItem = Object.assign({}, {
    asked: payload.asked,
    person: payload.person,
    time: payload.time,
    result: payload.result,
    id: state.reduce(function (maxId, curr) {
      return Math.max(maxId, curr.id);
    }, -1) + 1
  });
  return [historyItem].concat(_toConsumableArray(state));
}), _defineProperty(_handleActions, Actions.CLEAR_HISTORY, function (state, _ref2) {
  var payload = _ref2.payload;
  return [];
}), _defineProperty(_handleActions, Actions.DELETE_FROM_HISTORY, function (state, _ref3) {
  var payload = _ref3.payload;
  return state.filter(function (hist) {
    return hist.id !== payload;
  });
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/history.js"); } } })();

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(587);

var _reduxForm = __webpack_require__(663);

var _points = __webpack_require__(1226);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(1225);

var _list2 = _interopRequireDefault(_list);

var _history = __webpack_require__(1223);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _redux.combineReducers)({
  list: _list2.default,
  points: _points2.default,
  history: _history2.default,
  form: _reduxForm.reducer
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/index.js"); } } })();

/***/ }),

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

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = __webpack_require__(623);

var _index = __webpack_require__(622);

var Actions = _interopRequireWildcard(_index);

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

var initialState = 0;
exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, Actions.REJECTED, function (state, _ref) {
  var payload = _ref.payload;

  var total = state + 10;
  return total;
}), _defineProperty(_handleActions, Actions.ACCEPTED, function (state, _ref2) {
  var payload = _ref2.payload;

  var total = state + 1;
  return total;
}), _defineProperty(_handleActions, Actions.CLEAR_SCORE, function (state, _ref3) {
  var payload = _ref3.payload;
  return 0;
}), _handleActions), initialState);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/points.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/points.js"); } } })();

/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _redux = __webpack_require__(587);

var _reduxDevtoolsExtension = __webpack_require__(1243);

var _reducers = __webpack_require__(1224);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var middleware = [];
var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware));

exports.default = function (initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/store/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/store/index.js"); } } })();

/***/ }),

/***/ 1372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(977);


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD = exports.ADD = 'ADD';
var DELETE = exports.DELETE = 'DELETE';
var EDIT = exports.EDIT = 'EDIT';
var REJECTED = exports.REJECTED = 'REJECTED';
var ACCEPTED = exports.ACCEPTED = 'ACCEPTED';
var ADD_HISTORY = exports.ADD_HISTORY = 'ADD_HISTORY';
var CLEAR_HISTORY = exports.CLEAR_HISTORY = 'CLEAR_HISTORY';
var DELETE_FROM_HISTORY = exports.DELETE_FROM_HISTORY = 'DELETE_FROM_HISTORY';
var CLEAR_SCORE = exports.CLEAR_SCORE = 'CLEAR_SCORE';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/constants/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/constants/index.js"); } } })();

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

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

var add = exports.add = (0, _reduxActions.createAction)(Actions.ADD, function (values) {
  return values;
});
var rejected = exports.rejected = (0, _reduxActions.createAction)(Actions.REJECTED);
var accepted = exports.accepted = (0, _reduxActions.createAction)(Actions.ACCEPTED);
var edit = exports.edit = (0, _reduxActions.createAction)(Actions.EDIT);
var deleteAsk = exports.deleteAsk = (0, _reduxActions.createAction)(Actions.DELETE, function (id) {
  return id;
});
var deleteFromHistory = exports.deleteFromHistory = (0, _reduxActions.createAction)(Actions.DELETE_FROM_HISTORY, function (id) {
  return id;
});
var clearHistory = exports.clearHistory = (0, _reduxActions.createAction)(Actions.CLEAR_HISTORY);
var addToHistory = exports.addToHistory = (0, _reduxActions.createAction)(Actions.ADD_HISTORY, function (value) {
  return value;
});
var clearScore = exports.clearScore = (0, _reduxActions.createAction)(Actions.CLEAR_SCORE);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/actions/index.js"); } } })();

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(1215);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(1227);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(1222);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(1216);

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Index = function Index() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement(_MainContainer2.default, null));
};

exports.default = (0, _nextReduxWrapper2.default)(_store2.default)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[1372]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/OGVlNjE3NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/OGVlNjE3NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/OGVlNjE3NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz84ZWU2MTc0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzhlZTYxNzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzhlZTYxNzQiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzhlZTYxNzQiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz84ZWU2MTc0Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzhlZTYxNzQiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz84ZWU2MTc0Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz84ZWU2MTc0Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzhlZTYxNzQiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzPzhlZTYxNzQiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz84ZWU2MTc0Iiwid2VicGFjazovLy8uL3BhZ2VzPzhlZTYxNzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO1NBQ0UsOENBQ0UsbURBQ0EsMERBQU0sTUFBSyxZQUFXLFNBQ3RCLGtGQUFNLEtBQUksY0FBYSxNQUc1Qjs7O0FBWEQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0d3Qjs7QUFKeEI7Ozs7QUFDQTs7QUFDQTs7SUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsU0FB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TyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5SZWplY3Rpb24gQXBwPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBsaXN0LCBoYW5kbGVBbnN3ZXIgfSkge1xuICByZXR1cm4gbGlzdC5sZW5ndGggPiAwID8gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHJhaXNlZCBjZW50ZXJlZCBrZXk9e2Fzay5wZXJzb24gKyBhc2suYXNrZWQgKyBEYXRlLm5vdygpfT5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5Zb3UgQXNrZWQgOiB7YXNrLmFza2VkLnRvVXBwZXJDYXNlKCl9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YSAvPlxuICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5Gb3IgOiB7YXNrLnBlcnNvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNvbG9yPXsncmVkJ31cbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHsgdmFsdWU6IGFzaywgYW5zd2VyOiBBY3Rpb25zLnJlamVjdGVkLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgPlJlamVjdGVkXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICBjb2xvcj17J2dyZWVuJ31cbiAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKGUsIHsgdmFsdWU6IGFzaywgYW5zd2VyOiBBY3Rpb25zLmFjY2VwdGVkLCBpbmRleCB9KX1cbiAgICAgICAgICAgICAgPkFjY2VwdGVkPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICApIDogPGRpdiAvPjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWdtZW50LCBDYXJkLCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgICAgICAgICAgICAgICAgIGhpc3RvcnksXG4gICAgICAgICAgICAgICAgICBjbGVhckhpc3RvcnksXG4gICAgICAgICAgICAgICAgICBhZGRUb0hpc3RvcnksXG4gICAgICAgICAgICAgICAgICBkZWxldGVGcm9tSGlzdG9yeVxufSkgPT4gaGlzdG9yeS5sZW5ndGggPiAwID8gKFxuICA8Q29udGFpbmVyIGZsdWlkPlxuICAgIDxTZWdtZW50PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb21wYWN0XG4gICAgICAgIGZsb2F0ZWQ9eydyaWdodCd9XG4gICAgICAgIGJhc2ljIHR5cGU9eydidXR0b24nfVxuICAgICAgICBvbkNsaWNrPXtjbGVhckhpc3Rvcnl9XG4gICAgICA+XG4gICAgICAgIHsnQ2xlYXIgSGlzdG9yeSd9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAga2V5PXtpdGVtICsgRGF0ZS5ub3coKSArIGl0ZW0ucGVyc29uICsgaXRlbS50aW1lfVxuICAgICAgICAgIGNvbG9yPXtpdGVtLnJlc3VsdCA9PT0gJ1JFSkVDVEVEJyA/ICdyZWQnIDogJ2dyZWVuJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5Zb3UgQXNrZWQgRm9yIDoge2l0ZW0uYXNrZWR9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5NZXRhPkRhdGU6IHtpdGVtLnRpbWV9IDwvQ2FyZC5NZXRhPlxuICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPllvdSBBc2tlZCA6IHtpdGVtLnBlcnNvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT57aXRlbS5yZXN1bHR9PC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlRnJvbUhpc3RvcnkoaXRlbS5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeydEZWxldGUgRnJvbSBIaXN0b3J5J31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkPlxuICAgICkpfVxuICAgIDwvU2VnbWVudD5cbiAgPC9Db250YWluZXI+XG4pIDogKFxuICA8ZGl2IC8+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oaXN0b3J5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuL2Zvcm1Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlc2V0LCBwcmlzdGluZSwgc3VibWl0dGluZywgZXJyb3JzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXsnYXNrZWQnfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J3BlcnNvbid9XG4gICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24uR3JvdXA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXNldCgnUmVqZWN0aW9uRm9ybScpO1xuICAgICAgICAgIH19XG4gICAgICAgID5DYW5jZWxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24uT3IgLz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHBvc2l0aXZlXG4gICAgICAgICAgdHlwZT17J3N1Ym1pdCd9XG4gICAgICAgICAgZGlzYWJsZWQ9e3ByaXN0aW5lICYmIGVycm9ycyA9PT0gdW5kZWZpbmVkIHx8IHN1Ym1pdHRpbmcgJiYgZXJyb3JzID09PSB1bmRlZmluZWR9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCdSZWplY3Rpb25Gb3JtJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBpbnB1dCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCAuLi5jdXN0b20gfSkgPT4ge1xuICBjb25zdCBoYXNFcnJvciA9IHRvdWNoZWQgJiYgZXJyb3IgIT09IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybS5JbnB1dFxuICAgICAgbGFiZWw9e2lucHV0Lm5hbWUudG9VcHBlckNhc2UoKX1cbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGZsdWlkXG4gICAgICB7Li4uaW5wdXR9XG4gICAgICB7Li4uY3VzdG9tfVxuICAgICAgZXJyb3I9e2hhc0Vycm9yfVxuICAgIC8+XG4gICk7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybUNvbXBvbmVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5cbmNvbnN0IHZhbGlkYXRlID0gKHsgYXNrZWQsIHBlcnNvbiB9KSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuICBpZiAoYXNrZWQgPT09IHVuZGVmaW5lZCkgZXJyb3JzLmFza2VkID0gJ0Fza2VkIEZpZWxkIFJlcXVpcmVkJztcbiAgaWYgKHBlcnNvbiA9PT0gdW5kZWZpbmVkKSBlcnJvcnMucGVyc29uID0gJ1BlcnNvbiBGaWVsZCBSZXF1aXJlZCc7XG4gIHJldHVybiBlcnJvcnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xuICBmb3JtOiAnUmVqZWN0aW9uRm9ybScsXG4gIHZhbGlkYXRlXG59KShGb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBTZWdtZW50LCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBSZWplY3Rpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybSc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2hpc3RvcnknO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBbnN3ZXIgPSB0aGlzLmhhbmRsZUFuc3dlci5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBjb25zdCB7IFJlamVjdGlvbkZvcm0gfSA9IHRoaXMucHJvcHMuZm9ybTtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuYWRkKFJlamVjdGlvbkZvcm0udmFsdWVzKTtcbiAgfVxuICBoYW5kbGVBbnN3ZXIoZXZlbnQsIHsgdmFsdWUsIGFuc3dlciwgaW5kZXggfSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrLCBhZGRUb0hpc3RvcnkgfSA9IHRoaXMucHJvcHMuYWN0aW9ucztcbiAgICBpZiAoYW5zd2VyID09PSBBY3Rpb25zLnJlamVjdGVkKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcblxuICAgIGFkZFRvSGlzdG9yeSh7IHRpbWU6IG1vbWVudCgpLmZvcm1hdCgnTExMTCcpLCBhbnN3ZXIsIC4uLnZhbHVlIH0pO1xuICAgIGRlbGV0ZUFzayhpbmRleCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3QsXG4gICAgICBwb2ludHMsXG4gICAgICBoaXN0b3J5LFxuICAgICAgYWN0aW9uczogeyBhZGRUb0hpc3RvcnksIGNsZWFySGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnksIGNsZWFyU2NvcmUgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxoMT57J1JlamVjdGlvbiBHYW1lJ308L2gxPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93KCl9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgICAgICBhZGRUb0hpc3Rvcnk9e2FkZFRvSGlzdG9yeX1cbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5PXtjbGVhckhpc3Rvcnl9XG4gICAgICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5PXtkZWxldGVGcm9tSGlzdG9yeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPGRpdj5Qb2ludHMge3BvaW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydzdWJtaXQnfSBvbkNsaWNrPXtjbGVhclNjb3JlfT5cbiAgICAgICAgICAgICAgICAgIHsnQ2xlYXIgU2NvcmUnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbGlzdDogc3RhdGUubGlzdCxcbiAgcG9pbnRzOiBzdGF0ZS5wb2ludHMsXG4gIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnksXG4gIGZvcm06IHN0YXRlLmZvcm1cbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHsgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KTtcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoXG4gIHtcbiAgICBbQWN0aW9ucy5BRERfSElTVE9SWV06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IGhpc3RvcnlJdGVtID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBhc2tlZDogcGF5bG9hZC5hc2tlZCxcbiAgICAgICAgICBwZXJzb246IHBheWxvYWQucGVyc29uLFxuICAgICAgICAgIHRpbWU6IHBheWxvYWQudGltZSxcbiAgICAgICAgICByZXN1bHQ6IHBheWxvYWQucmVzdWx0LFxuICAgICAgICAgIGlkOiBzdGF0ZS5yZWR1Y2UoKG1heElkLCBjdXJyKSA9PiBNYXRoLm1heChtYXhJZCwgY3Vyci5pZCksIC0xKSArIDFcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBbaGlzdG9yeUl0ZW0sIC4uLnN0YXRlXTtcbiAgICB9LFxuICAgIFtBY3Rpb25zLkNMRUFSX0hJU1RPUlldOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiBbXSxcbiAgICBbQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKGhpc3QgPT4gaGlzdC5pZCAhPT0gcGF5bG9hZClcbiAgfSxcbiAgaW5pdGlhbFN0YXRlXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaGlzdG9yeS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBwb2ludHMgZnJvbSAnLi9wb2ludHMnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4vaGlzdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxpc3QsXG4gIHBvaW50cyxcbiAgaGlzdG9yeSxcbiAgZm9ybTogZm9ybVJlZHVjZXJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy8nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyhcbiAge1xuICAgIFtBY3Rpb25zLkFERF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcbiAgICAgICAgZmlsdGVyOiAnbm9uZScsXG4gICAgICAgIGlkOiBzdGF0ZS5yZWR1Y2UoKG1heElkLCBhc2spID0+IE1hdGgubWF4KGFzay5pZCwgbWF4SWQpLCAtMSkgKyAxXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHJlcXVlc3RdO1xuICAgIH0sXG4gICAgW0FjdGlvbnMuREVMRVRFXTogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gc3RhdGUuZmlsdGVyKGFza3MgPT4gc3RhdGVbcGF5bG9hZF0uaWQgIT09IGFza3MuaWQpXG4gIH0sXG4gIGluaXRpYWxTdGF0ZVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKFxuICB7XG4gICAgW0FjdGlvbnMuUkVKRUNURURdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICBjb25zdCB0b3RhbCA9IHN0YXRlICsgMTA7XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSxcbiAgICBbQWN0aW9ucy5BQ0NFUFRFRF06IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsID0gc3RhdGUgKyAxO1xuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sXG4gICAgW0FjdGlvbnMuQ0xFQVJfU0NPUkVdOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiAwXG4gIH0sXG4gIGluaXRpYWxTdGF0ZVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3BvaW50cy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKHtcbiAgICAgIC8vIFNwZWNpZnkgZXh0ZW5zaW9u4oCZcyBvcHRpb25zIGxpa2UgbmFtZSwgYWN0aW9uc0JsYWNrbGlzdCwgYWN0aW9uc0NyZWF0b3JzLCBzZXJpYWxpemUuLi5cbiAgICB9KSA6IGNvbXBvc2U7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAvLyBvdGhlciBzdG9yZSBlbmhhbmNlcnMgaWYgYW55XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBBREQgPSAnQUREJztcbmV4cG9ydCBjb25zdCBERUxFVEUgPSAnREVMRVRFJztcbmV4cG9ydCBjb25zdCBFRElUID0gJ0VESVQnO1xuZXhwb3J0IGNvbnN0IFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG5leHBvcnQgY29uc3QgQUREX0hJU1RPUlkgPSAnQUREX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX0hJU1RPUlkgPSAnQ0xFQVJfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fSElTVE9SWSA9ICdERUxFVEVfRlJPTV9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBDTEVBUl9TQ09SRSA9ICdDTEVBUl9TQ09SRSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGFkZCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFERCwgdmFsdWVzID0+IHZhbHVlcyk7XG5leHBvcnQgY29uc3QgcmVqZWN0ZWQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5SRUpFQ1RFRCk7XG5leHBvcnQgY29uc3QgYWNjZXB0ZWQgPSBjcmVhdGVBY3Rpb24oQWN0aW9ucy5BQ0NFUFRFRCk7XG5leHBvcnQgY29uc3QgZWRpdCA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkVESVQpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFzayA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkRFTEVURSwgaWQgPT4gaWQpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21IaXN0b3J5ID0gY3JlYXRlQWN0aW9uKEFjdGlvbnMuREVMRVRFX0ZST01fSElTVE9SWSwgaWQgPT4gaWQpO1xuZXhwb3J0IGNvbnN0IGNsZWFySGlzdG9yeSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkNMRUFSX0hJU1RPUlkpO1xuZXhwb3J0IGNvbnN0IGFkZFRvSGlzdG9yeSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkFERF9ISVNUT1JZLCB2YWx1ZSA9PiB2YWx1ZSk7XG5leHBvcnQgY29uc3QgY2xlYXJTY29yZSA9IGNyZWF0ZUFjdGlvbihBY3Rpb25zLkNMRUFSX1NDT1JFKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPE1haW4gLz5cbiAgPC9kaXY+XG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        