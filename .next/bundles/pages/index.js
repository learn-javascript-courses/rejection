
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
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Rejection App'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css'
  }));
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

var _actions = __webpack_require__(869);

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
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.id }, _react2.default.createElement(_semanticUiReact.Card.Content, null, _react2.default.createElement(_semanticUiReact.Card.Header, null, 'You Asked : ', ask.asked.toUpperCase()), _react2.default.createElement(_semanticUiReact.Card.Meta, null), _react2.default.createElement(_semanticUiReact.Card.Description, null, 'For : ', ask.person)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, _react2.default.createElement(_semanticUiReact.Button, {
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

var _moment = __webpack_require__(566);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(599);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
  var history = _ref.history,
      clearHistory = _ref.clearHistory,
      addToHistory = _ref.addToHistory,
      deleteFromHistory = _ref.deleteFromHistory;
  return history.length > 0 ? _react2.default.createElement(_semanticUiReact.Container, { fluid: true }, _react2.default.createElement(_semanticUiReact.Segment, null, _react2.default.createElement(_semanticUiReact.Button, { compact: true, floated: 'right', basic: true, type: 'button', onClick: clearHistory }, 'Clear History'), _react2.default.createElement('br', null), history.map(function (item) {
    return _react2.default.createElement(_semanticUiReact.Card, { centered: true, key: item.id, color: item.result === 'REJECTED' ? 'red' : 'green' }, _react2.default.createElement(_semanticUiReact.Card.Header, null, 'You Asked For : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, null, 'Date: ', (0, _moment2.default)(item.time).format('LLLL'), ' '), _react2.default.createElement(_semanticUiReact.Card.Description, null, 'You Asked : ', item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, item.result), _react2.default.createElement(_semanticUiReact.Button, {
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

var _reduxForm = __webpack_require__(662);

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

var _reduxForm = __webpack_require__(662);

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

var _actions = __webpack_require__(869);

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
      var _props = this.props,
          add = _props.actions.add,
          _props$form$Rejection = _props.form.RejectionForm.values,
          asked = _props$form$Rejection.asked,
          person = _props$form$Rejection.person;

      add(asked, person);
    }
  }, {
    key: 'handleAnswer',
    value: function handleAnswer(event, _ref) {
      var value = _ref.value,
          answer = _ref.answer;

      event.preventDefault();
      var _props$actions = this.props.actions,
          rejected = _props$actions.rejected,
          accepted = _props$actions.accepted,
          deleteAsk = _props$actions.deleteAsk,
          addToHistory = _props$actions.addToHistory;

      if (answer().type === 'REJECTED') rejected();else accepted();
      var result = Object.assign(value, { result: answer().type });

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

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case Actions.ADD_HISTORY:
      return [].concat(_toConsumableArray(state), [payload]);
    case Actions.CLEAR_HISTORY:
      return [];
    case Actions.DELETE_FROM_HISTORY:
      return state.filter(function (hist) {
        return hist.id !== payload;
      });
    default:
      return state;
  }
};

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/history.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/history.js"); } } })();

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(587);

var _reduxForm = __webpack_require__(662);

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

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case Actions.ADD:
      return [].concat(_toConsumableArray(state), [payload]);
    case Actions.DELETE:
      return state.filter(function (asks) {
        return payload !== asks.id;
      });
    default:
      return state;
  }
};

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/reducers/list.js"); } } })();

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case Actions.REJECTED:
      return state + 10;
    case Actions.ACCEPTED:
      return state + 1;
    case Actions.CLEAR_SCORE:
      return 0;
    default:
      return state;
  }
};

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

var initialState = 0;

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

var _reduxDevtoolsExtension = __webpack_require__(1244);

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

/***/ 1373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(976);


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

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _cuid = __webpack_require__(980);

var _cuid2 = _interopRequireDefault(_cuid);

var _reduxActions = __webpack_require__(1241);

var _constants = __webpack_require__(622);

var Constants = _interopRequireWildcard(_constants);

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

var add = exports.add = function add() {
  var asked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var person = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var id = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _cuid2.default)();
  return {
    type: Constants.ADD,
    payload: {
      asked: asked,
      person: person,
      time: time,
      result: result,
      id: id
    }
  };
};

var rejected = exports.rejected = function rejected() {
  return {
    type: Constants.REJECTED
  };
};
var accepted = exports.accepted = function accepted() {
  return {
    type: Constants.ACCEPTED
  };
};
var edit = exports.edit = function edit(payload) {
  return {
    type: Constants.EDIT,
    payload: payload
  };
};
var deleteAsk = exports.deleteAsk = function deleteAsk(payload) {
  return {
    type: Constants.DELETE,
    payload: payload
  };
};
var deleteFromHistory = exports.deleteFromHistory = function deleteFromHistory(payload) {
  return {
    type: Constants.DELETE_FROM_HISTORY,
    payload: payload
  };
};
var clearHistory = exports.clearHistory = function clearHistory() {
  return {
    type: Constants.CLEAR_HISTORY
  };
};
var addToHistory = exports.addToHistory = function addToHistory(payload) {
  return {
    type: Constants.ADD_HISTORY,
    payload: payload
  };
};
var clearScore = exports.clearScore = function clearScore() {
  return {
    type: Constants.CLEAR_SCORE
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/actions/index.js"); } } })();

/***/ }),

/***/ 976:
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

},[1373]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/ZmI3MDQzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/ZmI3MDQzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/ZmI3MDQzNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz9mYjcwNDM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzP2ZiNzA0MzUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzP2ZiNzA0MzUiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzP2ZiNzA0MzUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz9mYjcwNDM1Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzP2ZiNzA0MzUiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz9mYjcwNDM1Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz9mYjcwNDM1Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzP2ZiNzA0MzUiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzP2ZiNzA0MzUiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz9mYjcwNDM1Iiwid2VicGFjazovLy8uL3BhZ2VzP2ZiNzA0MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNFLDhCQUNFLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QjtTQUVFO1VBSVA7QUFMTyxJQUpKOzs7QUFMSjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDR3dCOztBQUp4Qjs7OztBQUNBOztBQUNBOztJQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxTQUFTLFdBQTZCO01BQUE7TUFBQSxvQkFDbkQ7O2NBQVksU0FBUyxvQkFDakIsMENBQ0EsZ0VBQVMsUUFDTixhQUFLLElBQUksVUFBQyxLQUFLLE9BQU47V0FDUix1REFBTSxRQUFOLE1BQWEsVUFBYixNQUFzQixLQUFLLElBQ3pCLDBEQUFNLFNBQ0osMERBQU0sUUFBTixNQUEwQixvQkFBSSxNQUM5QixvRUFBTSxNQUNOLDJEQUFNLGFBQU4sTUFBeUIsY0FFM0IsOERBQU0sV0FBUSxPQUNaO2FBRUU7YUFDQTthQUNBO2VBQVM7ZUFBSyxhQUFhLEdBQUcsRUFBRSxPQUFPLEtBQUssUUFBUSxRQUFRLFVBQVUsT0FBeEM7QUFKaEM7QUFDRSxPQU9GO2FBRUU7YUFDQTthQUNBO2VBQVM7ZUFBSyxhQUFhLEdBQUcsRUFBRSxPQUFPLEtBQUssUUFBUSxRQUFRLFVBQVUsT0FBeEM7QUFKaEM7QUFDRSxPQURGO0FBaEJMLEtBRkgsQ0FERyxHQWdDSCxxQ0FDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7TUFBRztNQUFTO01BQWM7TUFBYztpQkFDN0MsU0FBUyxvQkFDYiw0Q0FBVyxPQUNYLGdFQUNFLCtEQUFRLFNBQVIsTUFBZ0IsU0FBUyxTQUFTLE9BQWxDLE1BQXdDLE1BQU0sVUFBVSxTQUNyRCxnQkFFSCxzREFDQyxlQUFRLElBQUk7V0FDWCx1REFBTSxVQUFOLE1BQWUsS0FBSyxLQUFLLElBQUksT0FBTyxLQUFLLFdBQVcsYUFBYSxRQUMvRCwrREFBTSxRQUFOLE1BQThCLHlCQUM5Qiw0REFBTSxNQUFOLE1BQWtCLGdDQUFPLEtBQUssTUFBTSxPQUFPLFNBQzNDLDBEQUFNLGFBQU4sTUFBK0IscUJBQy9CLDZEQUFNLFdBQVEsT0FBTyxhQUNyQjthQUVFO1lBQ0E7YUFBTyxLQUFLLFdBQVcsYUFBYSxRQUNwQztlQUFTO2VBQU0sa0JBQWtCLEtBQUs7QUFFckM7QUFMRCxPQURGO0FBTkgsS0FOSCxDQURKLEdBeUJJLHFDQTFCUzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDQ0EsVUFBVSxPQUFPO01BQ3RCLGVBQXNELE1BQXREO01BQWMsUUFBd0MsTUFBeEM7TUFBTyxXQUFpQyxNQUFqQztNQUFVLGFBQXVCLE1BQXZCO01BQVksU0FBVyxNQUM5RDs7eUJBQ0UsdUNBQU0sVUFDSjtVQUVFO1VBQ0E7K0JBRUY7QUFKRSxJQUZKO1VBUUk7VUFDQTsrQkFFRjtBQUpFLHNCQUlGLHNDQUFRLE9BQ047YUFDVyxvQkFDUDtRQUNBO2FBQU8sTUFDUjtBQUpIO0FBQ0UsS0FNRixpRUFBUSxJQUNSO2NBRUU7VUFDQTtjQUFVLFlBQVksV0FBVyxhQUFhLGNBQWMsV0FDNUQ7YUFBUyxpQkFBQyxHQUNSO1FBQ0E7QUFDQTthQUFPLE1BQ1I7QUFSSDtBQUNFLEtBWVQ7OztBQXpDRDs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztrQkFHZSxnQkFBb0Q7TUFBQTt1QkFBQTtNQUFBO01BQUE7TUFBQSxrREFDakU7O01BQU0sV0FBVyxXQUFXLFVBQzVCOzZEQUNRO1dBQ0csTUFBTSxLQUNiO1VBQ0E7V0FIRjtBQUNFLEtBR0ksT0FDQTtXQUlUO0FBSEssSUFORjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQSjs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU0sV0FBVyx3QkFBdUI7TUFBQTtNQUFBLGNBQ3RDOztNQUFNLFNBQ047TUFBSSxVQUFVLFdBQVcsT0FBTyxRQUNoQztNQUFJLFdBQVcsV0FBVyxPQUFPLFNBQ2pDO1NBQ0Q7QUFMRDs7O1FBU0U7WUFGdUI7QUFDdkIsQ0FEYSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWTs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU07a0JBQ0o7O2tCQUFjOzBCQUFBOztzR0FFWjs7VUFBSyxlQUFlLE1BQUssYUFBYSxLQUN0QztVQUFLLGVBQWUsTUFBSyxhQUFhLEtBQXRDO1dBQ0Q7Ozs7O21DQUNjO21CQUN3RSxLQUFLO1VBQXZFLGFBQVgsUUFBVzt5Q0FBTyxLQUFRLGNBQWlCO1VBQVU7VUFBTywrQkFDcEU7O1VBQUksT0FDTDs7OztpQ0FDWSxhQUEwQjtVQUFBO1VBQUEsY0FDckM7O1lBQU07MkJBQ2tELEtBQUssTUFBTTtVQUEzRDtVQUFVO1VBQVU7VUFBVyw4QkFFdkM7O1VBQUksU0FBUyxTQUFTLFlBQVksZ0JBRWxDO1VBQU0sU0FBUyxPQUFPLE9BQU8sT0FBTyxFQUFFLFFBQVEsU0FFOUM7O21CQUNBO2dCQUFVLE9BQ1g7Ozs7NkJBQ1E7b0JBTUgsS0FBSztVQUpQO1VBQ0E7VUFDQTtvQ0FDQTtVQUFXO1VBQWM7VUFBYztVQUFtQiw2QkFFNUQ7O2FBQ0UscUNBQ0Usa0VBQVcsV0FDVCxnREFBSyxNQUVQLGdGQUFXLFdBQ1QscUVBQWUsV0FBVyxrQkFBa0IsY0FBYyxLQUU1RCx5RUFBTSxTQUNKLHlEQUFNLFFBQ0osc0RBQU0sY0FBYyxLQUFLLGNBQWMsTUFBTSxNQUFNLEtBQUssS0FFMUQsK0RBQU0sUUFDSjtpQkFFRTtzQkFDQTtzQkFDQTsyQkFHSjtBQU5JLDJCQU1KLG9DQUFNLEtBQ0osa0VBQVcsV0FDVCxzRUFBUyxRQUNQLG1EQUFhLFdBQ2Isa0VBQVEsTUFBTSxVQUFVLFNBQ3JCLGNBU2hCOzs7Ozs7O0FBR0gsSUFBTSxrQkFBa0I7O1VBQ2hCLE1BQ047WUFBUSxNQUNSO2FBQVMsTUFDVDtVQUFNLE1BQU07QUFIWjtBQURGO0FBTUEsSUFBTSxxQkFBcUI7U0FBYSxFQUFFLFNBQVMsK0JBQW1CLFNBQVM7QUFBL0U7O0FBRUEsSUFBTSxnQkFBZ0IseUJBQVEsaUJBQWlCLG9CQUFvQjtrQkFDcEQsYzs7Ozs7Ozs7Ozs7Ozs7OztrQkNoRkEsWUFBbUQ7TUFBQTt1QkFBQTtNQUFBO01BQUEsZUFDaEU7O1VBQ0U7U0FBSyxRQUNIOzBDQUFXLFNBQ2I7U0FBSyxRQUNIO2FBQ0Y7U0FBSyxRQUNIO21CQUFhLE9BQU87ZUFBUSxLQUFLLE9BQU87QUFDMUMsT0FEUztBQUVQO2FBRUw7Ozs7QUFmRDs7SUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBTSxlQUFlLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7ZUFJRTttQkFDQTtxQkFDQTttQkFKNkI7QUFDN0IsQ0FEYSxFOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ0ZBLFlBQW1EO01BQUE7dUJBQUE7TUFBQTtNQUFBLGVBQ2hFOztVQUNFO1NBQUssUUFDSDswQ0FBVyxTQUNiO1NBQUssUUFDSDttQkFBYSxPQUFPO2VBQVEsWUFBWSxLQUFLO0FBQy9DLE9BRFM7QUFFUDthQUVMOzs7O0FBYkQ7O0lBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVaLElBQU0sZUFBZSxHOzs7Ozs7Ozs7Ozs7Ozs7O2tCQ0NOLFlBQW1EO01BQUE7dUJBQUE7TUFBQTtNQUFBLGVBQ2hFOztVQUNFO1NBQUssUUFDSDthQUFPLFFBQ1Q7U0FBSyxRQUNIO2FBQU8sUUFDVDtTQUFLLFFBQ0g7YUFDRjtBQUNFO2FBRUw7Ozs7QUFkRDs7SUFBWTs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFNLGVBQWUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLGFBQWE7QUFDbkIsSUFBTSwyQkFDRyw0REFBVyxZQUNsQixPQUFPLDhDQUNFO0FBQXFDO0FBQzFDLENBREYsQ0FGRixVQURGOztBQU9BLElBQU0sV0FBVyxpQkFDZix3Q0FBbUI7O2tCQUtOO1NBQWdCLDRDQUF5QixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQi9ELElBQU0sb0JBQU07QUFDWixJQUFNLDBCQUFTO0FBQ2YsSUFBTSxzQkFBTztBQUNiLElBQU0sOEJBQVc7QUFDakIsSUFBTSw4QkFBVztBQUNqQixJQUFNLG9DQUFjO0FBQ3BCLElBQU0sd0NBQWdCO0FBQ3RCLElBQU0sb0RBQXNCO0FBQzVCLElBQU0sb0NBQWMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSM0I7Ozs7QUFDQTs7QUFDQTs7SUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBTSxvQkFBTTtNQUNqQiw0RUFBUTtNQUNSLDZFQUFTO01BQ1QsMkVBQU8sS0FBSztNQUNaLDZFQUFTO01BQ1QseUVBQUssV0FMWTs7VUFPWCxVQUNOOzthQUVFO2NBQ0E7WUFDQTtjQUNBO1VBTE87QUFDUDtBQUZGO0FBUEs7O0FBaUJBLElBQU0sOEJBQVc7O1VBQ2hCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sOEJBQVc7O1VBQ2hCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sc0JBQU87O1VBQ1osVUFDTjthQUY4QjtBQUM5QjtBQURLO0FBSUEsSUFBTSxnQ0FBWTs7VUFDakIsVUFDTjthQUZtQztBQUNuQztBQURLO0FBSUEsSUFBTSxnREFBb0I7O1VBQ3pCLFVBQ047YUFGMkM7QUFDM0M7QUFESztBQUlBLElBQU0sc0NBQWU7O1VBQ3BCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sc0NBQWU7O1VBQ3BCLFVBQ047YUFGc0M7QUFDdEM7QUFESztBQUlBLElBQU0sa0NBQWE7O1VBQ2xCLFVBQVU7QUFBaEI7QUFESyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTSxRQUFRO1NBQ1oscUNBQ0Usb0RBQ0EsOERBRkY7QUFERjs7a0JBT2UsaURBQWlCLE8iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVqZWN0aW9uIEFwcDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgU2VnbWVudCwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIHJldHVybiBsaXN0Lmxlbmd0aCA+IDBcbiAgICA/IDxDb250YWluZXI+XG4gICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgIHtsaXN0Lm1hcCgoYXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHJhaXNlZCBjZW50ZXJlZCBrZXk9e2Fzay5pZH0+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIDoge2Fzay5hc2tlZC50b1VwcGVyQ2FzZSgpfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkLk1ldGEgLz5cbiAgICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+Rm9yIDoge2Fzay5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYmFzaWNcbiAgICAgICAgICAgICAgICBjb2xvcj17J3JlZCd9XG4gICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcihlLCB7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5yZWplY3RlZCwgaW5kZXggfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlamVjdGVkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNvbG9yPXsnZ3JlZW4nfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMuYWNjZXB0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBY2NlcHRlZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDogPGRpdiAvPjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTZWdtZW50LCBDYXJkLCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBhZGRUb0hpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5IH0pID0+XG4gIGhpc3RvcnkubGVuZ3RoID4gMFxuICAgID8gPENvbnRhaW5lciBmbHVpZD5cbiAgICAgIDxTZWdtZW50PlxuICAgICAgICA8QnV0dG9uIGNvbXBhY3QgZmxvYXRlZD17J3JpZ2h0J30gYmFzaWMgdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e2NsZWFySGlzdG9yeX0+XG4gICAgICAgICAgeydDbGVhciBIaXN0b3J5J31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7aGlzdG9yeS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPENhcmQgY2VudGVyZWQga2V5PXtpdGVtLmlkfSBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9PlxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCBGb3IgOiB7aXRlbS5hc2tlZH08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPENhcmQuTWV0YT5EYXRlOiB7bW9tZW50KGl0ZW0udGltZSkuZm9ybWF0KCdMTExMJyl9IDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+WW91IEFza2VkIDoge2l0ZW0ucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+e2l0ZW0ucmVzdWx0fTwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICB0eXBlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tSGlzdG9yeShpdGVtLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeydEZWxldGUgRnJvbSBIaXN0b3J5J31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA6IDxkaXYgLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vZm9ybUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcmVzZXQsIHByaXN0aW5lLCBzdWJtaXR0aW5nLCBlcnJvcnMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydhc2tlZCd9XG4gICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXsncGVyc29uJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCdSZWplY3Rpb25Gb3JtJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPkNhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbi5PciAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcG9zaXRpdmVcbiAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICBkaXNhYmxlZD17cHJpc3RpbmUgJiYgZXJyb3JzID09PSB1bmRlZmluZWQgfHwgc3VibWl0dGluZyAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIC4uLmN1c3RvbSB9KSA9PiB7XG4gIGNvbnN0IGhhc0Vycm9yID0gdG91Y2hlZCAmJiBlcnJvciAhPT0gdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgIDxGb3JtLklucHV0XG4gICAgICBsYWJlbD17aW5wdXQubmFtZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgZmx1aWRcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIHsuLi5jdXN0b219XG4gICAgICBlcnJvcj17aGFzRXJyb3J9XG4gICAgLz5cbiAgKTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuY29uc3QgdmFsaWRhdGUgPSAoeyBhc2tlZCwgcGVyc29uIH0pID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge307XG4gIGlmIChhc2tlZCA9PT0gdW5kZWZpbmVkKSBlcnJvcnMuYXNrZWQgPSAnQXNrZWQgRmllbGQgUmVxdWlyZWQnO1xuICBpZiAocGVyc29uID09PSB1bmRlZmluZWQpIGVycm9ycy5wZXJzb24gPSAnUGVyc29uIEZpZWxkIFJlcXVpcmVkJztcbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdSZWplY3Rpb25Gb3JtJyxcbiAgdmFsaWRhdGVcbn0pKEZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFuc3dlciA9IHRoaXMuaGFuZGxlQW5zd2VyLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnN0IHsgYWN0aW9uczogeyBhZGQgfSwgZm9ybTogeyBSZWplY3Rpb25Gb3JtOiB7IHZhbHVlczogeyBhc2tlZCwgcGVyc29uIH0gfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGFkZChhc2tlZCwgcGVyc29uKTtcbiAgfVxuICBoYW5kbGVBbnN3ZXIoZXZlbnQsIHsgdmFsdWUsIGFuc3dlciB9KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHJlamVjdGVkLCBhY2NlcHRlZCwgZGVsZXRlQXNrLCBhZGRUb0hpc3RvcnkgfSA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIGlmIChhbnN3ZXIoKS50eXBlID09PSAnUkVKRUNURUQnKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHZhbHVlLCB7IHJlc3VsdDogYW5zd2VyKCkudHlwZSB9KTtcblxuICAgIGFkZFRvSGlzdG9yeShyZXN1bHQpO1xuICAgIGRlbGV0ZUFzayhyZXN1bHQuaWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsaXN0LFxuICAgICAgcG9pbnRzLFxuICAgICAgaGlzdG9yeSxcbiAgICAgIGFjdGlvbnM6IHsgYWRkVG9IaXN0b3J5LCBjbGVhckhpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5LCBjbGVhclNjb3JlIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8aDE+eydSZWplY3Rpb24gR2FtZSd9PC9oMT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFJlamVjdGlvbkZvcm0gY2xhc3NOYW1lPXsnbWFpbi1jb250YWluZXInfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgY29sdW1ucz17Mn0+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPExpc3QgaGFuZGxlQW5zd2VyPXt0aGlzLmhhbmRsZUFuc3dlcn0gbGlzdD17bGlzdH0ga2V5PXtEYXRlLm5vdygpfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgICAgYWRkVG9IaXN0b3J5PXthZGRUb0hpc3Rvcnl9XG4gICAgICAgICAgICAgIGNsZWFySGlzdG9yeT17Y2xlYXJIaXN0b3J5fVxuICAgICAgICAgICAgICBkZWxldGVGcm9tSGlzdG9yeT17ZGVsZXRlRnJvbUhpc3Rvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgIDxkaXY+UG9pbnRzIHtwb2ludHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsnc3VibWl0J30gb25DbGljaz17Y2xlYXJTY29yZX0+XG4gICAgICAgICAgICAgICAgICB7J0NsZWFyIFNjb3JlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxpc3Q6IHN0YXRlLmxpc3QsXG4gIHBvaW50czogc3RhdGUucG9pbnRzLFxuICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LFxuICBmb3JtOiBzdGF0ZS5mb3JtXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7IGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaCkgfSk7XG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiLCJpbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQWN0aW9ucy5BRERfSElTVE9SWTpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xuICAgIGNhc2UgQWN0aW9ucy5DTEVBUl9ISVNUT1JZOlxuICAgICAgcmV0dXJuIFtdO1xuICAgIGNhc2UgQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZOlxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihoaXN0ID0+IGhpc3QuaWQgIT09IHBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2hpc3RvcnkuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vcG9pbnRzJztcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGhpc3RvcnksXG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25zLkFERDpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xuICAgIGNhc2UgQWN0aW9ucy5ERUxFVEU6XG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGFza3MgPT4gcGF5bG9hZCAhPT0gYXNrcy5pZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyIsImltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25zLlJFSkVDVEVEOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTA7XG4gICAgY2FzZSBBY3Rpb25zLkFDQ0VQVEVEOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICBjYXNlIEFjdGlvbnMuQ0xFQVJfU0NPUkU6XG4gICAgICByZXR1cm4gMDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9wb2ludHMuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW107XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7XG4gICAgICAvLyBTcGVjaWZ5IGV4dGVuc2lvbuKAmXMgb3B0aW9ucyBsaWtlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycywgc2VyaWFsaXplLi4uXG4gICAgfSkgOiBjb21wb3NlO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgLy8gb3RoZXIgc3RvcmUgZW5oYW5jZXJzIGlmIGFueVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgQUREID0gJ0FERCc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XG5leHBvcnQgY29uc3QgRURJVCA9ICdFRElUJztcbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuZXhwb3J0IGNvbnN0IEFERF9ISVNUT1JZID0gJ0FERF9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBDTEVBUl9ISVNUT1JZID0gJ0NMRUFSX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0hJU1RPUlkgPSAnREVMRVRFX0ZST01fSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU0NPUkUgPSAnQ0xFQVJfU0NPUkUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2luZGV4LmpzIiwiaW1wb3J0IGN1aWQgZnJvbSAnY3VpZCc7XG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gKFxuICBhc2tlZCA9ICcnLFxuICBwZXJzb24gPSAnJyxcbiAgdGltZSA9IERhdGUubm93KCksXG4gIHJlc3VsdCA9IHVuZGVmaW5lZCxcbiAgaWQgPSBjdWlkKClcbikgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkFERCxcbiAgcGF5bG9hZDoge1xuICAgIGFza2VkLFxuICAgIHBlcnNvbixcbiAgICB0aW1lLFxuICAgIHJlc3VsdCxcbiAgICBpZFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlamVjdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLlJFSkVDVEVEXG59KTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9ICgpID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5BQ0NFUFRFRFxufSk7XG5leHBvcnQgY29uc3QgZWRpdCA9IHBheWxvYWQgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkVESVQsXG4gIHBheWxvYWRcbn0pO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFzayA9IHBheWxvYWQgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkRFTEVURSxcbiAgcGF5bG9hZFxufSk7XG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUhpc3RvcnkgPSBwYXlsb2FkID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5ERUxFVEVfRlJPTV9ISVNUT1JZLFxuICBwYXlsb2FkXG59KTtcbmV4cG9ydCBjb25zdCBjbGVhckhpc3RvcnkgPSAoKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQ0xFQVJfSElTVE9SWVxufSk7XG5leHBvcnQgY29uc3QgYWRkVG9IaXN0b3J5ID0gcGF5bG9hZCA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQUREX0hJU1RPUlksXG4gIHBheWxvYWRcbn0pO1xuZXhwb3J0IGNvbnN0IGNsZWFyU2NvcmUgPSAoKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQ0xFQVJfU0NPUkVcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29udGFpbmVycy9NYWluQ29udGFpbmVyJztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XG5cblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8TWFpbiAvPlxuICA8L2Rpdj5cbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShJbmRleCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        