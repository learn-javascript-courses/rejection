
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1195:
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

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(594);

var _actions = __webpack_require__(861);

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

  if (list.length <= 0) return _react2.default.createElement('div', null);
  return _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_semanticUiReact.Segment, { padded: true }, list.map(function (ask, index) {
    return _react2.default.createElement(_semanticUiReact.Card, { raised: true, centered: true, key: ask.id }, _react2.default.createElement(_semanticUiReact.Card.Content, null, _react2.default.createElement(_semanticUiReact.Card.Header, null, 'You Asked : ', ask.asked.toUpperCase()), _react2.default.createElement(_semanticUiReact.Card.Meta, null), _react2.default.createElement(_semanticUiReact.Card.Description, null, 'For : ', ask.person)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'red',
      fluid: true,
      onClick: function onClick(e) {
        return handleAnswer({ value: ask, answer: Actions.rejected, index: index });
      }
    }, 'Rejected'), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      color: 'green',
      fluid: true,
      onClick: function onClick(e) {
        return handleAnswer(e, { value: ask, answer: Actions.accepted, index: index });
      }
    }, 'Accepted')));
  })));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/List.js"); } } })();

/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(566);

var _moment2 = _interopRequireDefault(_moment);

var _semanticUiReact = __webpack_require__(594);

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

/***/ 1198:
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

var _reduxForm = __webpack_require__(658);

var _semanticUiReact = __webpack_require__(594);

var _formComponent = __webpack_require__(1199);

var _formComponent2 = _interopRequireDefault(_formComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/rejectionForm/form.js"); } } })();

/***/ }),

/***/ 1199:
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

var _semanticUiReact = __webpack_require__(594);

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

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(658);

var _form = __webpack_require__(1198);

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

/***/ 1201:
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

var _redux = __webpack_require__(583);

var _reactRedux = __webpack_require__(582);

var _moment = __webpack_require__(566);

var _moment2 = _interopRequireDefault(_moment);

var _reactAutobind = __webpack_require__(1193);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _semanticUiReact = __webpack_require__(594);

var _actions = __webpack_require__(861);

var Actions = _interopRequireWildcard(_actions);

var _List = __webpack_require__(1196);

var _List2 = _interopRequireDefault(_List);

var _rejectionForm = __webpack_require__(1200);

var _rejectionForm2 = _interopRequireDefault(_rejectionForm);

var _history = __webpack_require__(1197);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/containers/MainContainer.js"); } } })();

/***/ }),

/***/ 1202:
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

var _constants = __webpack_require__(615);

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

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(583);

var _reduxForm = __webpack_require__(658);

var _points = __webpack_require__(1205);

var _points2 = _interopRequireDefault(_points);

var _list = __webpack_require__(1204);

var _list2 = _interopRequireDefault(_list);

var _history = __webpack_require__(1202);

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

/***/ 1204:
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

var _constants = __webpack_require__(615);

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

/***/ 1205:
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

var _index = __webpack_require__(615);

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

/***/ 1206:
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

var _redux = __webpack_require__(583);

var _reduxDevtoolsExtension = __webpack_require__(1216);

var _reducers = __webpack_require__(1203);

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

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(964);


/***/ }),

/***/ 615:
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

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearScore = exports.addToHistory = exports.clearHistory = exports.deleteFromHistory = exports.deleteAsk = exports.edit = exports.accepted = exports.rejected = exports.add = undefined;

var _cuid = __webpack_require__(968);

var _cuid2 = _interopRequireDefault(_cuid);

var _constants = __webpack_require__(615);

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

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(1192);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(1206);

var _store2 = _interopRequireDefault(_store);

var _MainContainer = __webpack_require__(1201);

var _MainContainer2 = _interopRequireDefault(_MainContainer);

var _Head = __webpack_require__(1195);

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

},[1345]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/MmJjNGQzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/MmJjNGQzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/MmJjNGQzMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz8yYmM0ZDMyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzJiYzRkMzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzJiYzRkMzIiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzJiYzRkMzIiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz8yYmM0ZDMyIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzJiYzRkMzIiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz8yYmM0ZDMyIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz8yYmM0ZDMyIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzJiYzRkMzIiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzPzJiYzRkMzIiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz8yYmM0ZDMyIiwid2VicGFjazovLy8uL3BhZ2VzPzJiYzRkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNFLDhCQUNFLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QjtTQUVFO1VBSVA7QUFMTyxJQUpKOzs7QUFMSjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDR3dCOztBQUp4Qjs7OztBQUNBOztBQUNBOztJQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxTQUFT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O0FBRUwsSUFBTSxvQkFBTTtNQUNqQiw0RUFBUTtNQUNSLDZFQUFTO01BQ1QsMkVBQU8sS0FBSztNQUNaLDZFQUFTO01BQ1QseUVBQUssV0FMWTs7VUFPWCxVQUNOOzthQUVFO2NBQ0E7WUFDQTtjQUNBO1VBTE87QUFDUDtBQUZGO0FBUEs7O0FBaUJBLElBQU0sOEJBQVc7O1VBQ2hCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sOEJBQVc7O1VBQ2hCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sc0JBQU87O1VBQ1osVUFDTjthQUY4QjtBQUM5QjtBQURLO0FBSUEsSUFBTSxnQ0FBWTs7VUFDakIsVUFDTjthQUZtQztBQUNuQztBQURLO0FBSUEsSUFBTSxnREFBb0I7O1VBQ3pCLFVBQ047YUFGMkM7QUFDM0M7QUFESztBQUlBLElBQU0sc0NBQWU7O1VBQ3BCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sc0NBQWU7O1VBQ3BCLFVBQ047YUFGc0M7QUFDdEM7QUFESztBQUlBLElBQU0sa0NBQWE7O1VBQ2xCLFVBQVU7QUFBaEI7QUFESyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTSxRQUFRO1NBQ1oscUNBQ0Usb0RBQ0EsOERBRkY7QUFERjs7a0JBT2UsaURBQWlCLE8iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVqZWN0aW9uIEFwcDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgU2VnbWVudCwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA8PSAwKSByZXR1cm4gPGRpdiAvPjtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICB7bGlzdC5tYXAoKGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2FyZCByYWlzZWQgY2VudGVyZWQga2V5PXthc2suaWR9PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHthc2suYXNrZWQudG9VcHBlckNhc2UoKX08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhIC8+XG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPkZvciA6IHthc2sucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMucmVqZWN0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVqZWN0ZWRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNvbG9yPXsnZ3JlZW4nfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoZSwgeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMuYWNjZXB0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWNjZXB0ZWRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNlZ21lbnQsIENhcmQsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBoaXN0b3J5LCBjbGVhckhpc3RvcnksIGFkZFRvSGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnkgfSkgPT5cbiAgaGlzdG9yeS5sZW5ndGggPiAwXG4gICAgPyA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgPFNlZ21lbnQ+XG4gICAgICAgIDxCdXR0b24gY29tcGFjdCBmbG9hdGVkPXsncmlnaHQnfSBiYXNpYyB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2xlYXJIaXN0b3J5fT5cbiAgICAgICAgICB7J0NsZWFyIEhpc3RvcnknfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtoaXN0b3J5Lm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q2FyZCBjZW50ZXJlZCBrZXk9e2l0ZW0uaWR9IGNvbG9yPXtpdGVtLnJlc3VsdCA9PT0gJ1JFSkVDVEVEJyA/ICdyZWQnIDogJ2dyZWVuJ30+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIEZvciA6IHtpdGVtLmFza2VkfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhPkRhdGU6IHttb21lbnQoaXRlbS50aW1lKS5mb3JtYXQoJ0xMTEwnKX0gPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5Zb3UgQXNrZWQgOiB7aXRlbS5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT57aXRlbS5yZXN1bHR9PC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZyb21IaXN0b3J5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0RlbGV0ZSBGcm9tIEhpc3RvcnknfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDogPGRpdiAvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGlzdG9yeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9mb3JtQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZXNldCwgcHJpc3RpbmUsIHN1Ym1pdHRpbmcsIGVycm9ycyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J2Fza2VkJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydwZXJzb24nfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+Q2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uLk9yIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBwb3NpdGl2ZVxuICAgICAgICAgIHR5cGU9eydzdWJtaXQnfVxuICAgICAgICAgIGRpc2FibGVkPXtwcmlzdGluZSAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZCB8fCBzdWJtaXR0aW5nICYmIGVycm9ycyA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXNldCgnUmVqZWN0aW9uRm9ybScpO1xuICAgICAgICAgIH19XG4gICAgICAgID5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHsgaW5wdXQsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgLi4uY3VzdG9tIH0pID0+IHtcbiAgY29uc3QgaGFzRXJyb3IgPSB0b3VjaGVkICYmIGVycm9yICE9PSB1bmRlZmluZWQ7XG4gIHJldHVybiAoXG4gICAgPEZvcm0uSW5wdXRcbiAgICAgIGxhYmVsPXtpbnB1dC5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBmbHVpZFxuICAgICAgey4uLmlucHV0fVxuICAgICAgey4uLmN1c3RvbX1cbiAgICAgIGVycm9yPXtoYXNFcnJvcn1cbiAgICAvPlxuICApO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm1Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh7IGFza2VkLCBwZXJzb24gfSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgaWYgKGFza2VkID09PSB1bmRlZmluZWQpIGVycm9ycy5hc2tlZCA9ICdBc2tlZCBGaWVsZCBSZXF1aXJlZCc7XG4gIGlmIChwZXJzb24gPT09IHVuZGVmaW5lZCkgZXJyb3JzLnBlcnNvbiA9ICdQZXJzb24gRmllbGQgUmVxdWlyZWQnO1xuICByZXR1cm4gZXJyb3JzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ1JlamVjdGlvbkZvcm0nLFxuICB2YWxpZGF0ZVxufSkoRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBhdXRvQmluZCBmcm9tICdyZWFjdC1hdXRvYmluZCc7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnM6IHsgYWRkIH0sIGZvcm06IHsgUmVqZWN0aW9uRm9ybTogeyB2YWx1ZXM6IHsgYXNrZWQsIHBlcnNvbiB9IH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBhZGQoYXNrZWQsIHBlcnNvbik7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKHsgdmFsdWUsIGFuc3dlciB9KSB7XG4gICAgY29uc3QgeyByZWplY3RlZCwgYWNjZXB0ZWQsIGRlbGV0ZUFzaywgYWRkVG9IaXN0b3J5IH0gPSB0aGlzLnByb3BzLmFjdGlvbnM7XG4gICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih2YWx1ZSwgeyByZXN1bHQ6IGFuc3dlcigpLnR5cGUgfSk7XG5cbiAgICBpZiAoYW5zd2VyKCkudHlwZSA9PT0gJ1JFSkVDVEVEJykgcmVqZWN0ZWQoKTtcbiAgICBlbHNlIGFjY2VwdGVkKCk7XG5cbiAgICBhZGRUb0hpc3RvcnkocmVzdWx0KTtcbiAgICBkZWxldGVBc2socmVzdWx0LmlkKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdCxcbiAgICAgIHBvaW50cyxcbiAgICAgIGhpc3RvcnksXG4gICAgICBhY3Rpb25zOiB7IGFkZFRvSGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBkZWxldGVGcm9tSGlzdG9yeSwgY2xlYXJTY29yZSB9XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPGgxPnsnUmVqZWN0aW9uIEdhbWUnfTwvaDE+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxSZWplY3Rpb25Gb3JtIGNsYXNzTmFtZT17J21haW4tY29udGFpbmVyJ30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxMaXN0IGhhbmRsZUFuc3dlcj17dGhpcy5oYW5kbGVBbnN3ZXJ9IGxpc3Q9e2xpc3R9IGtleT17RGF0ZS5ub3coKX0gLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxIaXN0b3J5XG4gICAgICAgICAgICAgIGhpc3Rvcnk9e2hpc3Rvcnl9XG4gICAgICAgICAgICAgIGFkZFRvSGlzdG9yeT17YWRkVG9IaXN0b3J5fVxuICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk9e2NsZWFySGlzdG9yeX1cbiAgICAgICAgICAgICAgZGVsZXRlRnJvbUhpc3Rvcnk9e2RlbGV0ZUZyb21IaXN0b3J5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgIDxTZWdtZW50IHBhZGRlZD5cbiAgICAgICAgICAgICAgICA8ZGl2PlBvaW50cyB7cG9pbnRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3N1Ym1pdCd9IG9uQ2xpY2s9e2NsZWFyU2NvcmV9PlxuICAgICAgICAgICAgICAgICAgeydDbGVhciBTY29yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2VnbWVudD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBsaXN0LCBwb2ludHMsIGhpc3RvcnksIGZvcm0gfSkgPT4gKHtcbiAgbGlzdCxcbiAgcG9pbnRzLFxuICBoaXN0b3J5LFxuICBmb3JtXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7IGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaCkgfSk7XG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluKTtcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL01haW5Db250YWluZXIuanMiLCJpbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQWN0aW9ucy5BRERfSElTVE9SWTpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xuICAgIGNhc2UgQWN0aW9ucy5DTEVBUl9ISVNUT1JZOlxuICAgICAgcmV0dXJuIFtdO1xuICAgIGNhc2UgQWN0aW9ucy5ERUxFVEVfRlJPTV9ISVNUT1JZOlxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihoaXN0ID0+IGhpc3QuaWQgIT09IHBheWxvYWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2hpc3RvcnkuanMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgcG9pbnRzIGZyb20gJy4vcG9pbnRzJztcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGhpc3RvcnksXG4gIGZvcm06IGZvcm1SZWR1Y2VyXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25zLkFERDpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xuICAgIGNhc2UgQWN0aW9ucy5ERUxFVEU6XG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGFza3MgPT4gcGF5bG9hZCAhPT0gYXNrcy5pZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbGlzdC5qcyIsImltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25zLlJFSkVDVEVEOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTA7XG4gICAgY2FzZSBBY3Rpb25zLkFDQ0VQVEVEOlxuICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICBjYXNlIEFjdGlvbnMuQ0xFQVJfU0NPUkU6XG4gICAgICByZXR1cm4gMDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9wb2ludHMuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW107XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7XG4gICAgICAvLyBTcGVjaWZ5IGV4dGVuc2lvbuKAmXMgb3B0aW9ucyBsaWtlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycywgc2VyaWFsaXplLi4uXG4gICAgfSkgOiBjb21wb3NlO1xuXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2VFbmhhbmNlcnMoXG4gIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSxcbiAgLy8gb3RoZXIgc3RvcmUgZW5oYW5jZXJzIGlmIGFueVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGUgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgQUREID0gJ0FERCc7XG5leHBvcnQgY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XG5leHBvcnQgY29uc3QgRURJVCA9ICdFRElUJztcbmV4cG9ydCBjb25zdCBSRUpFQ1RFRCA9ICdSRUpFQ1RFRCc7XG5leHBvcnQgY29uc3QgQUNDRVBURUQgPSAnQUNDRVBURUQnO1xuZXhwb3J0IGNvbnN0IEFERF9ISVNUT1JZID0gJ0FERF9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBDTEVBUl9ISVNUT1JZID0gJ0NMRUFSX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0hJU1RPUlkgPSAnREVMRVRFX0ZST01fSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfU0NPUkUgPSAnQ0xFQVJfU0NPUkUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uc3RhbnRzL2luZGV4LmpzIiwiaW1wb3J0IGN1aWQgZnJvbSAnY3VpZCc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGFkZCA9IChcbiAgYXNrZWQgPSAnJyxcbiAgcGVyc29uID0gJycsXG4gIHRpbWUgPSBEYXRlLm5vdygpLFxuICByZXN1bHQgPSB1bmRlZmluZWQsXG4gIGlkID0gY3VpZCgpXG4pID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5BREQsXG4gIHBheWxvYWQ6IHtcbiAgICBhc2tlZCxcbiAgICBwZXJzb24sXG4gICAgdGltZSxcbiAgICByZXN1bHQsXG4gICAgaWRcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCByZWplY3RlZCA9ICgpID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5SRUpFQ1RFRFxufSk7XG5leHBvcnQgY29uc3QgYWNjZXB0ZWQgPSAoKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQUNDRVBURURcbn0pO1xuZXhwb3J0IGNvbnN0IGVkaXQgPSBwYXlsb2FkID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5FRElULFxuICBwYXlsb2FkXG59KTtcbmV4cG9ydCBjb25zdCBkZWxldGVBc2sgPSBwYXlsb2FkID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5ERUxFVEUsXG4gIHBheWxvYWRcbn0pO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21IaXN0b3J5ID0gcGF5bG9hZCA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuREVMRVRFX0ZST01fSElTVE9SWSxcbiAgcGF5bG9hZFxufSk7XG5leHBvcnQgY29uc3QgY2xlYXJIaXN0b3J5ID0gKCkgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkNMRUFSX0hJU1RPUllcbn0pO1xuZXhwb3J0IGNvbnN0IGFkZFRvSGlzdG9yeSA9IHBheWxvYWQgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkFERF9ISVNUT1JZLFxuICBwYXlsb2FkXG59KTtcbmV4cG9ydCBjb25zdCBjbGVhclNjb3JlID0gKCkgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkNMRUFSX1NDT1JFXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIC8+XG4gICAgPE1haW4gLz5cbiAgPC9kaXY+XG4gICk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSkoSW5kZXgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        