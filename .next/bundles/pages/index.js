
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
        return handleAnswer({ value: ask, answer: Actions.accepted, index: index });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/MmNhOTRlYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/MmNhOTRlYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/MmNhOTRlYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz8yY2E5NGVhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzPzJjYTk0ZWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzPzJjYTk0ZWEiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzPzJjYTk0ZWEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz8yY2E5NGVhIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzJjYTk0ZWEiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz8yY2E5NGVhIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz8yY2E5NGVhIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzJjYTk0ZWEiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzPzJjYTk0ZWEiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz8yNTk5NjY2Iiwid2VicGFjazovLy8uL3BhZ2VzPzI1OTk2NjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNFLDhCQUNFLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QjtTQUVFO1VBSVA7QUFMTyxJQUpKOzs7QUFMSjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDR3dCOztBQUp4Qjs7OztBQUNBOztBQUNBOztJQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxTQUFT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SUFBTSxvQkFBTTtNQUNqQiw0RUFBUTtNQUNSLDZFQUFTO01BQ1QsMkVBQU8sS0FBSztNQUNaLDZFQUFTO01BQ1QseUVBQUssV0FMWTs7VUFPWCxVQUNOOzthQUVFO2NBQ0E7WUFDQTtjQUNBO1VBTE87QUFDUDtBQUZGO0FBUEs7O0FBaUJBLElBQU0sOEJBQVc7O1VBQ2hCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sOEJBQVc7O1VBQ2hCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sc0JBQU87O1VBQ1osVUFDTjthQUY4QjtBQUM5QjtBQURLO0FBSUEsSUFBTSxnQ0FBWTs7VUFDakIsVUFDTjthQUZtQztBQUNuQztBQURLO0FBSUEsSUFBTSxnREFBb0I7O1VBQ3pCLFVBQ047YUFGMkM7QUFDM0M7QUFESztBQUlBLElBQU0sc0NBQWU7O1VBQ3BCLFVBQVU7QUFBaEI7QUFESztBQUdBLElBQU0sc0NBQWU7O1VBQ3BCLFVBQ047YUFGc0M7QUFDdEM7QUFESztBQUlBLElBQU0sa0NBQWE7O1VBQ2xCLFVBQVU7QUFBaEI7QUFESyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTSxRQUFRO1NBQ1oscUNBQ0Usb0RBQ0EsOERBRkY7QUFERjs7a0JBT2UsaURBQWlCLE8iLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UmVqZWN0aW9uIEFwcDwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgU2VnbWVudCwgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSB7XG4gIGlmIChsaXN0Lmxlbmd0aCA8PSAwKSByZXR1cm4gPGRpdiAvPjtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICB7bGlzdC5tYXAoKGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2FyZCByYWlzZWQgY2VudGVyZWQga2V5PXthc2suaWR9PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCA6IHthc2suYXNrZWQudG9VcHBlckNhc2UoKX08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhIC8+XG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPkZvciA6IHthc2sucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMucmVqZWN0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVqZWN0ZWRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICAgIGNvbG9yPXsnZ3JlZW4nfVxuICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVBbnN3ZXIoeyB2YWx1ZTogYXNrLCBhbnN3ZXI6IEFjdGlvbnMuYWNjZXB0ZWQsIGluZGV4IH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWNjZXB0ZWRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNlZ21lbnQsIENhcmQsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBoaXN0b3J5LCBjbGVhckhpc3RvcnksIGFkZFRvSGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnkgfSkgPT5cbiAgaGlzdG9yeS5sZW5ndGggPiAwXG4gICAgPyA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgPFNlZ21lbnQ+XG4gICAgICAgIDxCdXR0b24gY29tcGFjdCBmbG9hdGVkPXsncmlnaHQnfSBiYXNpYyB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2xlYXJIaXN0b3J5fT5cbiAgICAgICAgICB7J0NsZWFyIEhpc3RvcnknfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtoaXN0b3J5Lm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q2FyZCBjZW50ZXJlZCBrZXk9e2l0ZW0uaWR9IGNvbG9yPXtpdGVtLnJlc3VsdCA9PT0gJ1JFSkVDVEVEJyA/ICdyZWQnIDogJ2dyZWVuJ30+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIEZvciA6IHtpdGVtLmFza2VkfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhPkRhdGU6IHttb21lbnQoaXRlbS50aW1lKS5mb3JtYXQoJ0xMTEwnKX0gPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5Zb3UgQXNrZWQgOiB7aXRlbS5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT57aXRlbS5yZXN1bHR9PC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZyb21IaXN0b3J5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0RlbGV0ZSBGcm9tIEhpc3RvcnknfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDogPGRpdiAvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGlzdG9yeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9mb3JtQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZXNldCwgcHJpc3RpbmUsIHN1Ym1pdHRpbmcsIGVycm9ycyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8RmllbGRcbiAgICAgICAgbmFtZT17J2Fza2VkJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydwZXJzb24nfVxuICAgICAgICB0eXBlPXsndGV4dCd9XG4gICAgICAgIGNvbXBvbmVudD17Rm9ybUNvbXBvbmVudH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+Q2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uLk9yIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBwb3NpdGl2ZVxuICAgICAgICAgIHR5cGU9eydzdWJtaXQnfVxuICAgICAgICAgIGRpc2FibGVkPXtwcmlzdGluZSAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZCB8fCBzdWJtaXR0aW5nICYmIGVycm9ycyA9PT0gdW5kZWZpbmVkfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXNldCgnUmVqZWN0aW9uRm9ybScpO1xuICAgICAgICAgIH19XG4gICAgICAgID5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uLkdyb3VwPlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHsgaW5wdXQsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSwgLi4uY3VzdG9tIH0pID0+IHtcbiAgY29uc3QgaGFzRXJyb3IgPSB0b3VjaGVkICYmIGVycm9yICE9PSB1bmRlZmluZWQ7XG4gIHJldHVybiAoXG4gICAgPEZvcm0uSW5wdXRcbiAgICAgIGxhYmVsPXtpbnB1dC5uYW1lLnRvVXBwZXJDYXNlKCl9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBmbHVpZFxuICAgICAgey4uLmlucHV0fVxuICAgICAgey4uLmN1c3RvbX1cbiAgICAgIGVycm9yPXtoYXNFcnJvcn1cbiAgICAvPlxuICApO1xufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2Zvcm1Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCB2YWxpZGF0ZSA9ICh7IGFza2VkLCBwZXJzb24gfSkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgaWYgKGFza2VkID09PSB1bmRlZmluZWQpIGVycm9ycy5hc2tlZCA9ICdBc2tlZCBGaWVsZCBSZXF1aXJlZCc7XG4gIGlmIChwZXJzb24gPT09IHVuZGVmaW5lZCkgZXJyb3JzLnBlcnNvbiA9ICdQZXJzb24gRmllbGQgUmVxdWlyZWQnO1xuICByZXR1cm4gZXJyb3JzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcbiAgZm9ybTogJ1JlamVjdGlvbkZvcm0nLFxuICB2YWxpZGF0ZVxufSkoRm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBhdXRvQmluZCBmcm9tICdyZWFjdC1hdXRvYmluZCc7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFJlamVjdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtJztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uL2NvbXBvbmVudHMvaGlzdG9yeSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnM6IHsgYWRkIH0sIGZvcm06IHsgUmVqZWN0aW9uRm9ybTogeyB2YWx1ZXM6IHsgYXNrZWQsIHBlcnNvbiB9IH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBhZGQoYXNrZWQsIHBlcnNvbik7XG4gIH1cbiAgaGFuZGxlQW5zd2VyKHsgdmFsdWUsIGFuc3dlciB9KSB7XG4gICAgY29uc3QgeyByZWplY3RlZCwgYWNjZXB0ZWQsIGRlbGV0ZUFzaywgYWRkVG9IaXN0b3J5IH0gPSB0aGlzLnByb3BzLmFjdGlvbnM7XG4gICAgaWYgKGFuc3dlcigpLnR5cGUgPT09ICdSRUpFQ1RFRCcpIHJlamVjdGVkKCk7XG4gICAgZWxzZSBhY2NlcHRlZCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5hc3NpZ24odmFsdWUsIHsgcmVzdWx0OiBhbnN3ZXIoKS50eXBlIH0pO1xuXG4gICAgYWRkVG9IaXN0b3J5KHJlc3VsdCk7XG4gICAgZGVsZXRlQXNrKHJlc3VsdC5pZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3QsXG4gICAgICBwb2ludHMsXG4gICAgICBoaXN0b3J5LFxuICAgICAgYWN0aW9uczogeyBhZGRUb0hpc3RvcnksIGNsZWFySGlzdG9yeSwgZGVsZXRlRnJvbUhpc3RvcnksIGNsZWFyU2NvcmUgfVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxoMT57J1JlamVjdGlvbiBHYW1lJ308L2gxPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8UmVqZWN0aW9uRm9ybSBjbGFzc05hbWU9eydtYWluLWNvbnRhaW5lcid9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TGlzdCBoYW5kbGVBbnN3ZXI9e3RoaXMuaGFuZGxlQW5zd2VyfSBsaXN0PXtsaXN0fSBrZXk9e0RhdGUubm93KCl9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgICAgICBoaXN0b3J5PXtoaXN0b3J5fVxuICAgICAgICAgICAgICBhZGRUb0hpc3Rvcnk9e2FkZFRvSGlzdG9yeX1cbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5PXtjbGVhckhpc3Rvcnl9XG4gICAgICAgICAgICAgIGRlbGV0ZUZyb21IaXN0b3J5PXtkZWxldGVGcm9tSGlzdG9yeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgICAgICAgICAgPGRpdj5Qb2ludHMge3BvaW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydzdWJtaXQnfSBvbkNsaWNrPXtjbGVhclNjb3JlfT5cbiAgICAgICAgICAgICAgICAgIHsnQ2xlYXIgU2NvcmUnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgbGlzdCwgcG9pbnRzLCBoaXN0b3J5LCBmb3JtIH0pID0+ICh7XG4gIGxpc3QsXG4gIHBvaW50cyxcbiAgaGlzdG9yeSxcbiAgZm9ybVxufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoeyBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpIH0pO1xuXG5jb25zdCBNYWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbik7XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzIiwiaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFjdGlvbnMuQUREX0hJU1RPUlk6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkXTtcbiAgICBjYXNlIEFjdGlvbnMuQ0xFQVJfSElTVE9SWTpcbiAgICAgIHJldHVybiBbXTtcbiAgICBjYXNlIEFjdGlvbnMuREVMRVRFX0ZST01fSElTVE9SWTpcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoaGlzdCA9PiBoaXN0LmlkICE9PSBwYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9oaXN0b3J5LmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IHBvaW50cyBmcm9tICcuL3BvaW50cyc7XG5pbXBvcnQgbGlzdCBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi9oaXN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgbGlzdCxcbiAgcG9pbnRzLFxuICBoaXN0b3J5LFxuICBmb3JtOiBmb3JtUmVkdWNlclxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzLyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQWN0aW9ucy5BREQ6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkXTtcbiAgICBjYXNlIEFjdGlvbnMuREVMRVRFOlxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihhc2tzID0+IHBheWxvYWQgIT09IGFza3MuaWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2xpc3QuanMiLCJpbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQWN0aW9ucy5SRUpFQ1RFRDpcbiAgICAgIHJldHVybiBzdGF0ZSArIDEwO1xuICAgIGNhc2UgQWN0aW9ucy5BQ0NFUFRFRDpcbiAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgY2FzZSBBY3Rpb25zLkNMRUFSX1NDT1JFOlxuICAgICAgcmV0dXJuIDA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcG9pbnRzLmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgbWlkZGxld2FyZSA9IFtdO1xuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgLy8gU3BlY2lmeSBleHRlbnNpb27igJlzIG9wdGlvbnMgbGlrZSBuYW1lLCBhY3Rpb25zQmxhY2tsaXN0LCBhY3Rpb25zQ3JlYXRvcnMsIHNlcmlhbGl6ZS4uLlxuICAgIH0pIDogY29tcG9zZTtcblxuY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksXG4gIC8vIG90aGVyIHN0b3JlIGVuaGFuY2VycyBpZiBhbnlcbik7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IEFERCA9ICdBREQnO1xuZXhwb3J0IGNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xuZXhwb3J0IGNvbnN0IEVESVQgPSAnRURJVCc7XG5leHBvcnQgY29uc3QgUkVKRUNURUQgPSAnUkVKRUNURUQnO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEID0gJ0FDQ0VQVEVEJztcbmV4cG9ydCBjb25zdCBBRERfSElTVE9SWSA9ICdBRERfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgQ0xFQVJfSElTVE9SWSA9ICdDTEVBUl9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9ISVNUT1JZID0gJ0RFTEVURV9GUk9NX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX1NDT1JFID0gJ0NMRUFSX1NDT1JFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCBjdWlkIGZyb20gJ2N1aWQnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSAoXG4gIGFza2VkID0gJycsXG4gIHBlcnNvbiA9ICcnLFxuICB0aW1lID0gRGF0ZS5ub3coKSxcbiAgcmVzdWx0ID0gdW5kZWZpbmVkLFxuICBpZCA9IGN1aWQoKVxuKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQURELFxuICBwYXlsb2FkOiB7XG4gICAgYXNrZWQsXG4gICAgcGVyc29uLFxuICAgIHRpbWUsXG4gICAgcmVzdWx0LFxuICAgIGlkXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgcmVqZWN0ZWQgPSAoKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuUkVKRUNURURcbn0pO1xuZXhwb3J0IGNvbnN0IGFjY2VwdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkFDQ0VQVEVEXG59KTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gcGF5bG9hZCA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuRURJVCxcbiAgcGF5bG9hZFxufSk7XG5leHBvcnQgY29uc3QgZGVsZXRlQXNrID0gcGF5bG9hZCA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuREVMRVRFLFxuICBwYXlsb2FkXG59KTtcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tSGlzdG9yeSA9IHBheWxvYWQgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkRFTEVURV9GUk9NX0hJU1RPUlksXG4gIHBheWxvYWRcbn0pO1xuZXhwb3J0IGNvbnN0IGNsZWFySGlzdG9yeSA9ICgpID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5DTEVBUl9ISVNUT1JZXG59KTtcbmV4cG9ydCBjb25zdCBhZGRUb0hpc3RvcnkgPSBwYXlsb2FkID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5BRERfSElTVE9SWSxcbiAgcGF5bG9hZFxufSk7XG5leHBvcnQgY29uc3QgY2xlYXJTY29yZSA9ICgpID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5DTEVBUl9TQ09SRVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb250YWluZXJzL01haW5Db250YWluZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcblxuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZCAvPlxuICAgIDxNYWluIC8+XG4gIDwvZGl2PlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoc3RvcmUpKEluZGV4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        