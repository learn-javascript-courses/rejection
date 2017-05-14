
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

var _listItems = __webpack_require__(1346);

var _listItems2 = _interopRequireDefault(_listItems);

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
  return _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_semanticUiReact.Segment, { padded: true }, _react2.default.createElement(_listItems2.default, { list: list, handleAnswer: handleAnswer })));
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

  if (history.length <= 0) return _react2.default.createElement('div', null);
  return _react2.default.createElement(_semanticUiReact.Container, { fluid: true }, _react2.default.createElement(_semanticUiReact.Segment, null, _react2.default.createElement(_semanticUiReact.Button, { compact: true, floated: 'right', basic: true, type: 'button', onClick: clearHistory }, 'Clear History'), _react2.default.createElement('br', null), history.map(function (item) {
    return _react2.default.createElement(_semanticUiReact.Card, { centered: true, key: item.id, color: item.result === 'REJECTED' ? 'red' : 'green' }, _react2.default.createElement(_semanticUiReact.Card.Header, null, 'You Asked For : ', item.asked), _react2.default.createElement(_semanticUiReact.Card.Meta, null, 'Date: ', (0, _moment2.default)(item.time).format('LLLL'), ' '), _react2.default.createElement(_semanticUiReact.Card.Description, null, 'You Asked : ', item.person), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true }, item.result), _react2.default.createElement(_semanticUiReact.Button, {
      basic: true,
      type: 'button',
      color: item.result === 'REJECTED' ? 'red' : 'green',
      onClick: function onClick() {
        return deleteFromHistory(item.id);
      }
    }, 'Delete From History'));
  })));
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

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = function (_ref) {
  var list = _ref.list,
      handleAnswer = _ref.handleAnswer;
  return _react2.default.createElement('div', null, list.map(function (ask, index) {
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
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/list-items.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/RyanBas/Documents/web_development/eric-elliot-mentorship/rejection/components/list-items.js"); } } })();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanM/ZGVkNjI5NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/ZGVkNjI5NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/ZGVkNjI5NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcz9kZWQ2Mjk3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9NYWluQ29udGFpbmVyLmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaGlzdG9yeS5qcz9kZWQ2Mjk3Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbGlzdC5qcz9kZWQ2Mjk3Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3BvaW50cy5qcz9kZWQ2Mjk3Iiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saXN0LWl0ZW1zLmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2luZGV4LmpzP2RlZDYyOTciLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9pbmRleC5qcz9kZWQ2Mjk3Iiwid2VicGFjazovLy8uL3BhZ2VzP2RlZDYyOTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztrQkFHZSxZQUNiO3lCQUNFLDhCQUNFLG1EQUNBLDBEQUFNLE1BQUssWUFBVyxTQUN0QjtTQUVFO1VBSVA7QUFMTyxJQUpKOzs7QUFMSjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDSXdCOztBQUx4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QVM7QUFDZixJQUFNLHNCQUFPO0FBQ2IsSUFBTSw4QkFBVztBQUNqQixJQUFNLDhCQUFXO0FBQ2pCLElBQU0sb0NBQWM7QUFDcEIsSUFBTSx3Q0FBZ0I7QUFDdEIsSUFBTSxvREFBc0I7QUFDNUIsSUFBTSxvQ0FBYyxjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1IzQjs7OztBQUNBOztJQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFNLG9CQUFNO01BQ2pCLDRFQUFRO01BQ1IsNkVBQVM7TUFDVCwyRUFBTyxLQUFLO01BQ1osNkVBQVM7TUFDVCx5RUFBSyxXQUxZOztVQU9YLFVBQ047O2FBRUU7Y0FDQTtZQUNBO2NBQ0E7VUFMTztBQUNQO0FBRkY7QUFQSzs7QUFpQkEsSUFBTSw4QkFBVzs7VUFDaEIsVUFBVTtBQUFoQjtBQURLO0FBR0EsSUFBTSw4QkFBVzs7VUFDaEIsVUFBVTtBQUFoQjtBQURLO0FBR0EsSUFBTSxzQkFBTzs7VUFDWixVQUNOO2FBRjhCO0FBQzlCO0FBREs7QUFJQSxJQUFNLGdDQUFZOztVQUNqQixVQUNOO2FBRm1DO0FBQ25DO0FBREs7QUFJQSxJQUFNLGdEQUFvQjs7VUFDekIsVUFDTjthQUYyQztBQUMzQztBQURLO0FBSUEsSUFBTSxzQ0FBZTs7VUFDcEIsVUFBVTtBQUFoQjtBQURLO0FBR0EsSUFBTSxzQ0FBZTs7VUFDcEIsVUFDTjthQUZzQztBQUN0QztBQURLO0FBSUEsSUFBTSxrQ0FBYTs7VUFDbEIsVUFBVTtBQUFoQjtBQURLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q1A7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFNLFFBQVE7U0FDWixxQ0FDRSxvREFDQSw4REFGRjtBQURGOztrQkFPZSxpREFBaUIsTyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5SZWplY3Rpb24gQXBwPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMi4yL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBTZWdtZW50LCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExpc3RJdGVtcyBmcm9tICcuL2xpc3QtaXRlbXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgbGlzdCwgaGFuZGxlQW5zd2VyIH0pIHtcbiAgaWYgKGxpc3QubGVuZ3RoIDw9IDApIHJldHVybiA8ZGl2IC8+O1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U2VnbWVudCBwYWRkZWQ+XG4gICAgICAgIDxMaXN0SXRlbXMgbGlzdD17bGlzdH0gaGFuZGxlQW5zd2VyPXtoYW5kbGVBbnN3ZXJ9IC8+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgU2VnbWVudCwgQ2FyZCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGhpc3RvcnksIGNsZWFySGlzdG9yeSwgYWRkVG9IaXN0b3J5LCBkZWxldGVGcm9tSGlzdG9yeSB9KSA9PiB7XG4gIGlmIChoaXN0b3J5Lmxlbmd0aCA8PSAwKSByZXR1cm4gPGRpdiAvPjtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgPFNlZ21lbnQ+XG4gICAgICAgIDxCdXR0b24gY29tcGFjdCBmbG9hdGVkPXsncmlnaHQnfSBiYXNpYyB0eXBlPXsnYnV0dG9uJ30gb25DbGljaz17Y2xlYXJIaXN0b3J5fT5cbiAgICAgICAgICB7J0NsZWFyIEhpc3RvcnknfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtoaXN0b3J5Lm1hcChpdGVtID0+IChcbiAgICAgICAgICA8Q2FyZCBjZW50ZXJlZCBrZXk9e2l0ZW0uaWR9IGNvbG9yPXtpdGVtLnJlc3VsdCA9PT0gJ1JFSkVDVEVEJyA/ICdyZWQnIDogJ2dyZWVuJ30+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+WW91IEFza2VkIEZvciA6IHtpdGVtLmFza2VkfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhPkRhdGU6IHttb21lbnQoaXRlbS50aW1lKS5mb3JtYXQoJ0xMTEwnKX0gPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5Zb3UgQXNrZWQgOiB7aXRlbS5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT57aXRlbS5yZXN1bHR9PC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgICBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUZyb21IaXN0b3J5KGl0ZW0uaWQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7J0RlbGV0ZSBGcm9tIEhpc3RvcnknfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vZm9ybUNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcmVzZXQsIHByaXN0aW5lLCBzdWJtaXR0aW5nLCBlcnJvcnMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPEZpZWxkXG4gICAgICAgIG5hbWU9eydhc2tlZCd9XG4gICAgICAgIHR5cGU9eyd0ZXh0J31cbiAgICAgICAgY29tcG9uZW50PXtGb3JtQ29tcG9uZW50fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZFxuICAgICAgICBuYW1lPXsncGVyc29uJ31cbiAgICAgICAgdHlwZT17J3RleHQnfVxuICAgICAgICBjb21wb25lbnQ9e0Zvcm1Db21wb25lbnR9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbi5Hcm91cD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc2V0KCdSZWplY3Rpb25Gb3JtJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPkNhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbi5PciAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcG9zaXRpdmVcbiAgICAgICAgICB0eXBlPXsnc3VibWl0J31cbiAgICAgICAgICBkaXNhYmxlZD17cHJpc3RpbmUgJiYgZXJyb3JzID09PSB1bmRlZmluZWQgfHwgc3VibWl0dGluZyAmJiBlcnJvcnMgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzZXQoJ1JlamVjdGlvbkZvcm0nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlamVjdGlvbkZvcm0vZm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlucHV0LCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0sIC4uLmN1c3RvbSB9KSA9PiB7XG4gIGNvbnN0IGhhc0Vycm9yID0gdG91Y2hlZCAmJiBlcnJvciAhPT0gdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgIDxGb3JtLklucHV0XG4gICAgICBsYWJlbD17aW5wdXQubmFtZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgZmx1aWRcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIHsuLi5jdXN0b219XG4gICAgICBlcnJvcj17aGFzRXJyb3J9XG4gICAgLz5cbiAgKTtcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybS9mb3JtQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcblxuY29uc3QgdmFsaWRhdGUgPSAoeyBhc2tlZCwgcGVyc29uIH0pID0+IHtcbiAgY29uc3QgZXJyb3JzID0ge307XG4gIGlmIChhc2tlZCA9PT0gdW5kZWZpbmVkKSBlcnJvcnMuYXNrZWQgPSAnQXNrZWQgRmllbGQgUmVxdWlyZWQnO1xuICBpZiAocGVyc29uID09PSB1bmRlZmluZWQpIGVycm9ycy5wZXJzb24gPSAnUGVyc29uIEZpZWxkIFJlcXVpcmVkJztcbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdSZWplY3Rpb25Gb3JtJyxcbiAgdmFsaWRhdGVcbn0pKEZvcm0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWplY3Rpb25Gb3JtL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBTZWdtZW50LCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBSZWplY3Rpb25Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvcmVqZWN0aW9uRm9ybSc7XG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi9jb21wb25lbnRzL2hpc3RvcnknO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBhdXRvQmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zOiB7IGFkZCB9LCBmb3JtOiB7IFJlamVjdGlvbkZvcm06IHsgdmFsdWVzOiB7IGFza2VkLCBwZXJzb24gfSB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgYWRkKGFza2VkLCBwZXJzb24pO1xuICB9XG4gIGhhbmRsZUFuc3dlcih7IHZhbHVlLCBhbnN3ZXIgfSkge1xuICAgIGNvbnN0IHsgcmVqZWN0ZWQsIGFjY2VwdGVkLCBkZWxldGVBc2ssIGFkZFRvSGlzdG9yeSB9ID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuICAgIGlmIChhbnN3ZXIoKS50eXBlID09PSAnUkVKRUNURUQnKSByZWplY3RlZCgpO1xuICAgIGVsc2UgYWNjZXB0ZWQoKTtcbiAgICBjb25zdCByZXN1bHQgPSBPYmplY3QuYXNzaWduKHZhbHVlLCB7IHJlc3VsdDogYW5zd2VyKCkudHlwZSB9KTtcblxuICAgIGFkZFRvSGlzdG9yeShyZXN1bHQpO1xuICAgIGRlbGV0ZUFzayhyZXN1bHQuaWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsaXN0LFxuICAgICAgcG9pbnRzLFxuICAgICAgaGlzdG9yeSxcbiAgICAgIGFjdGlvbnM6IHsgYWRkVG9IaXN0b3J5LCBjbGVhckhpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5LCBjbGVhclNjb3JlIH1cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8aDE+eydSZWplY3Rpb24gR2FtZSd9PC9oMT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFJlamVjdGlvbkZvcm0gY2xhc3NOYW1lPXsnbWFpbi1jb250YWluZXInfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgY29sdW1ucz17Mn0+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPExpc3QgaGFuZGxlQW5zd2VyPXt0aGlzLmhhbmRsZUFuc3dlcn0gbGlzdD17bGlzdH0ga2V5PXtEYXRlLm5vdygpfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgICAgYWRkVG9IaXN0b3J5PXthZGRUb0hpc3Rvcnl9XG4gICAgICAgICAgICAgIGNsZWFySGlzdG9yeT17Y2xlYXJIaXN0b3J5fVxuICAgICAgICAgICAgICBkZWxldGVGcm9tSGlzdG9yeT17ZGVsZXRlRnJvbUhpc3Rvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPENvbnRhaW5lciB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxuICAgICAgICAgICAgICAgIDxkaXY+UG9pbnRzIHtwb2ludHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsnc3VibWl0J30gb25DbGljaz17Y2xlYXJTY29yZX0+XG4gICAgICAgICAgICAgICAgICB7J0NsZWFyIFNjb3JlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGxpc3QsIHBvaW50cywgaGlzdG9yeSwgZm9ybSB9KSA9PiAoe1xuICBsaXN0LFxuICBwb2ludHMsXG4gIGhpc3RvcnksXG4gIGZvcm1cbn0pO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHsgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKEFjdGlvbnMsIGRpc3BhdGNoKSB9KTtcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW4pO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvTWFpbkNvbnRhaW5lci5qcyIsImltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25zLkFERF9ISVNUT1JZOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZF07XG4gICAgY2FzZSBBY3Rpb25zLkNMRUFSX0hJU1RPUlk6XG4gICAgICByZXR1cm4gW107XG4gICAgY2FzZSBBY3Rpb25zLkRFTEVURV9GUk9NX0hJU1RPUlk6XG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGhpc3QgPT4gaGlzdC5pZCAhPT0gcGF5bG9hZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaGlzdG9yeS5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBwb2ludHMgZnJvbSAnLi9wb2ludHMnO1xuaW1wb3J0IGxpc3QgZnJvbSAnLi9saXN0JztcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4vaGlzdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxpc3QsXG4gIHBvaW50cyxcbiAgaGlzdG9yeSxcbiAgZm9ybTogZm9ybVJlZHVjZXJcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL2NvbnN0YW50cy8nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFjdGlvbnMuQUREOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZF07XG4gICAgY2FzZSBBY3Rpb25zLkRFTEVURTpcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoYXNrcyA9PiBwYXlsb2FkICE9PSBhc2tzLmlkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9saXN0LmpzIiwiaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9jb25zdGFudHMvaW5kZXgnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFjdGlvbnMuUkVKRUNURUQ6XG4gICAgICByZXR1cm4gc3RhdGUgKyAxMDtcbiAgICBjYXNlIEFjdGlvbnMuQUNDRVBURUQ6XG4gICAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgIGNhc2UgQWN0aW9ucy5DTEVBUl9TQ09SRTpcbiAgICAgIHJldHVybiAwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3BvaW50cy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbXTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPVxuICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID9cbiAgICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKHtcbiAgICAgIC8vIFNwZWNpZnkgZXh0ZW5zaW9u4oCZcyBvcHRpb25zIGxpa2UgbmFtZSwgYWN0aW9uc0JsYWNrbGlzdCwgYWN0aW9uc0NyZWF0b3JzLCBzZXJpYWxpemUuLi5cbiAgICB9KSA6IGNvbXBvc2U7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLFxuICAvLyBvdGhlciBzdG9yZSBlbmhhbmNlcnMgaWYgYW55XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxTdGF0ZSA9PiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFNlZ21lbnQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGxpc3QsIGhhbmRsZUFuc3dlciB9KSA9PiAoXG4gIDxkaXY+XG4gICAge2xpc3QubWFwKChhc2ssIGluZGV4KSA9PiAoXG4gICAgICA8Q2FyZCByYWlzZWQgY2VudGVyZWQga2V5PXthc2suaWR9PlxuICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgIDxDYXJkLkhlYWRlcj5Zb3UgQXNrZWQgOiB7YXNrLmFza2VkLnRvVXBwZXJDYXNlKCl9PC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICA8Q2FyZC5NZXRhIC8+XG4gICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+Rm9yIDoge2Fzay5wZXJzb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgY29sb3I9eydyZWQnfVxuICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQW5zd2VyKHsgdmFsdWU6IGFzaywgYW5zd2VyOiBBY3Rpb25zLnJlamVjdGVkLCBpbmRleCB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZWplY3RlZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICBjb2xvcj17J2dyZWVuJ31cbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUFuc3dlcih7IHZhbHVlOiBhc2ssIGFuc3dlcjogQWN0aW9ucy5hY2NlcHRlZCwgaW5kZXggfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWNjZXB0ZWRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGlzdC1pdGVtcy5qcyIsImV4cG9ydCBjb25zdCBBREQgPSAnQUREJztcbmV4cG9ydCBjb25zdCBERUxFVEUgPSAnREVMRVRFJztcbmV4cG9ydCBjb25zdCBFRElUID0gJ0VESVQnO1xuZXhwb3J0IGNvbnN0IFJFSkVDVEVEID0gJ1JFSkVDVEVEJztcbmV4cG9ydCBjb25zdCBBQ0NFUFRFRCA9ICdBQ0NFUFRFRCc7XG5leHBvcnQgY29uc3QgQUREX0hJU1RPUlkgPSAnQUREX0hJU1RPUlknO1xuZXhwb3J0IGNvbnN0IENMRUFSX0hJU1RPUlkgPSAnQ0xFQVJfSElTVE9SWSc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fSElTVE9SWSA9ICdERUxFVEVfRlJPTV9ISVNUT1JZJztcbmV4cG9ydCBjb25zdCBDTEVBUl9TQ09SRSA9ICdDTEVBUl9TQ09SRSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25zdGFudHMvaW5kZXguanMiLCJpbXBvcnQgY3VpZCBmcm9tICdjdWlkJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gKFxuICBhc2tlZCA9ICcnLFxuICBwZXJzb24gPSAnJyxcbiAgdGltZSA9IERhdGUubm93KCksXG4gIHJlc3VsdCA9IHVuZGVmaW5lZCxcbiAgaWQgPSBjdWlkKClcbikgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkFERCxcbiAgcGF5bG9hZDoge1xuICAgIGFza2VkLFxuICAgIHBlcnNvbixcbiAgICB0aW1lLFxuICAgIHJlc3VsdCxcbiAgICBpZFxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlamVjdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLlJFSkVDVEVEXG59KTtcbmV4cG9ydCBjb25zdCBhY2NlcHRlZCA9ICgpID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5BQ0NFUFRFRFxufSk7XG5leHBvcnQgY29uc3QgZWRpdCA9IHBheWxvYWQgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkVESVQsXG4gIHBheWxvYWRcbn0pO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUFzayA9IHBheWxvYWQgPT4gKHtcbiAgdHlwZTogQ29uc3RhbnRzLkRFTEVURSxcbiAgcGF5bG9hZFxufSk7XG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUhpc3RvcnkgPSBwYXlsb2FkID0+ICh7XG4gIHR5cGU6IENvbnN0YW50cy5ERUxFVEVfRlJPTV9ISVNUT1JZLFxuICBwYXlsb2FkXG59KTtcbmV4cG9ydCBjb25zdCBjbGVhckhpc3RvcnkgPSAoKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQ0xFQVJfSElTVE9SWVxufSk7XG5leHBvcnQgY29uc3QgYWRkVG9IaXN0b3J5ID0gcGF5bG9hZCA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQUREX0hJU1RPUlksXG4gIHBheWxvYWRcbn0pO1xuZXhwb3J0IGNvbnN0IGNsZWFyU2NvcmUgPSAoKSA9PiAoe1xuICB0eXBlOiBDb25zdGFudHMuQ0xFQVJfU0NPUkVcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29udGFpbmVycy9NYWluQ29udGFpbmVyJztcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XG5cblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQgLz5cbiAgICA8TWFpbiAvPlxuICA8L2Rpdj5cbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShJbmRleCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        