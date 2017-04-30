webpackHotUpdate(0,{

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight__ = __webpack_require__(1195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_partialRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_inRange__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_inRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_inRange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_get__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_isEqual__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_without__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_classnames__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prop_types__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lib__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__elements_Input__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__SearchCategory__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__SearchResult__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__SearchResults__ = __webpack_require__(950);



























var debug = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["o" /* makeDebugger */])('search');

/**
 * A search module allows a user to query for results from a selection of data
 */

var Search = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleResultSelect = function (e, result) {
      debug('handleResultSelect()');
      debug(result);
      var onResultSelect = _this.props.onResultSelect;

      if (onResultSelect) onResultSelect(e, result);
    }, _this.closeOnEscape = function (e) {
      if (__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      debug('moveSelectionOnKeyDown()');
      debug(__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getName(e));
      switch (__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getCode(e)) {
        case __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(1);
          break;
        case __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(-1);
          break;
        default:
          break;
      }
    }, _this.selectItemOnEnter = function (e) {
      debug('selectItemOnEnter()');
      debug(__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getName(e));
      if (__WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_19__lib__["p" /* keyboardKey */].Enter) return;
      e.preventDefault();

      var result = _this.getSelectedResult();

      // prevent selecting null if there was no selected item value
      if (!result) return;

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.closeOnDocumentClick = function (e) {
      debug('closeOnDocumentClick()');
      debug(e);
      _this.close();
    }, _this.handleMouseDown = function (e) {
      debug('handleMouseDown()');
      var onMouseDown = _this.props.onMouseDown;

      if (onMouseDown) onMouseDown(e, _this.props);
      _this.isMouseDown = true;
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;
      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {
      debug('handleDocumentMouseUp()');
      _this.isMouseDown = false;
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleInputClick = function (e) {
      debug('handleInputClick()', e);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      _this.tryOpen();
    }, _this.handleItemClick = function (e, _ref2) {
      var id = _ref2.id;

      debug('handleItemClick()');
      debug(id);
      var result = _this.getSelectedResult(id);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.handleFocus = function (e) {
      debug('handleFocus()');
      var onFocus = _this.props.onFocus;

      if (onFocus) onFocus(e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {
      debug('handleBlur()');
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur(e, _this.props);
      _this.setState({ focus: false });
    }, _this.handleSearchChange = function (e) {
      debug('handleSearchChange()');
      debug(e.target.value);
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var _this$props = _this.props,
          onSearchChange = _this$props.onSearchChange,
          minCharacters = _this$props.minCharacters;
      var open = _this.state.open;

      var newQuery = e.target.value;

      if (onSearchChange) onSearchChange(e, newQuery);

      // open search dropdown on search query
      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }

      _this.setValue(newQuery);
    }, _this.getFlattenedResults = function () {
      var _this$props2 = _this.props,
          category = _this$props2.category,
          results = _this$props2.results;


      return !category ? results : __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default()(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    }, _this.getSelectedResult = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;

      var results = _this.getFlattenedResults();
      return __WEBPACK_IMPORTED_MODULE_12_lodash_get___default()(results, index);
    }, _this.setValue = function (value) {
      debug('setValue()');
      debug('value', value);

      var selectFirstResult = _this.props.selectFirstResult;


      _this.trySetState({ value: value }, { selectedIndex: selectFirstResult ? 0 : -1 });
    }, _this.moveSelectionBy = function (offset) {
      debug('moveSelectionBy()');
      debug('offset: ' + offset);
      var selectedIndex = _this.state.selectedIndex;


      var results = _this.getFlattenedResults();
      var lastIndex = results.length - 1;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.scrollSelectedItemIntoView = function () {
      debug('scrollSelectedItemIntoView()');
      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      var item = menu.querySelector('.result.active');
      if (!item) return;
      debug('menu (results): ' + menu);
      debug('item (result): ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.tryOpen = function () {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;

      debug('open()');

      var minCharacters = _this.props.minCharacters;

      if (currentValue.length < minCharacters) return;

      _this.open();
    }, _this.open = function () {
      debug('open()');
      _this.trySetState({ open: true });
    }, _this.close = function () {
      debug('close()');
      _this.trySetState({ open: false });
    }, _this.renderSearchInput = function (rest) {
      var _this$props3 = _this.props,
          icon = _this$props3.icon,
          input = _this$props3.input;
      var value = _this.state.value;


      return __WEBPACK_IMPORTED_MODULE_20__elements_Input__["a" /* default */].create(input, { defaultProps: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, rest, {
          icon: icon,
          input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
          onBlur: _this.handleBlur,
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          onFocus: _this.handleFocus,
          value: value
        }) });
    }, _this.renderNoResults = function () {
      var _this$props4 = _this.props,
          noResultsDescription = _this$props4.noResultsDescription,
          noResultsMessage = _this$props4.noResultsMessage;


      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
        'div',
        { className: 'message empty' },
        __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
          'div',
          { className: 'header' },
          noResultsMessage
        ),
        noResultsDescription && __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
          'div',
          { className: 'description' },
          noResultsDescription
        )
      );
    }, _this.renderResult = function (_ref3, index, _array) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var childKey = _ref3.childKey,
          result = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['childKey']);

      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;

      var offsetIndex = index + offset;

      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__SearchResult__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click
      }));
    }, _this.renderResults = function () {
      var results = _this.props.results;


      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(results, _this.renderResult);
    }, _this.renderCategories = function () {
      var _this$props5 = _this.props,
          categoryRenderer = _this$props5.categoryRenderer,
          categories = _this$props5.results;
      var selectedIndex = _this.state.selectedIndex;


      var count = 0;

      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default()(categories, function (_ref4, name, index) {
        var childKey = _ref4.childKey,
            category = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref4, ['childKey']);

        var categoryProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
          key: childKey || category.name,
          active: __WEBPACK_IMPORTED_MODULE_10_lodash_inRange___default()(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);
        var renderFn = __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight___default()(_this.renderResult, count);

        count = count + category.results.length;

        return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_21__SearchCategory__["a" /* default */],
          categoryProps,
          category.results.map(renderFn)
        );
      });
    }, _this.renderMenuContent = function () {
      var _this$props6 = _this.props,
          category = _this$props6.category,
          showNoResults = _this$props6.showNoResults,
          results = _this$props6.results;


      if (__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default()(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    }, _this.renderResultsMenu = function () {
      var open = _this.state.open;

      var resultsClasses = open ? 'visible' : '';
      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;

      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_23__SearchResults__["a" /* default */],
        { className: resultsClasses },
        menuContent
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillMount', this)) __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillMount', this).call(this);
      debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default()(nextProps, this.props) || !__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default()(nextState, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default()(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      debug('changed props:', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["r" /* objectDiff */])(nextProps, this.props));

      if (!__WEBPACK_IMPORTED_MODULE_14_lodash_isEqual___default()(nextProps.value, this.props.value)) {
        debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      debug('componentDidUpdate()');
      // TODO objectDiff still runs in prod, stop it
      debug('to state:', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["r" /* objectDiff */])(prevState, this.state));

      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;

      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        debug('search focused');
        if (!this.isMouseDown) {
          debug('mouse is not down, opening');
          this.tryOpen();
        }
        if (this.state.open) {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
      } else if (prevState.focus && !this.state.focus) {
        debug('search blurred');
        if (!this.isMouseDown) {
          debug('mouse is not down, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        debug('search opened');
        this.open();
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('click', this.closeOnDocumentClick);
      } else if (prevState.open && !this.state.open) {
        debug('search closed');
        this.close();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!__WEBPACK_IMPORTED_MODULE_19__lib__["q" /* isBrowser */]) return;

      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // Open if the current value is greater than the minCharacters prop


    // ----------------------------------------
    // Render
    // ----------------------------------------

    /**
     * Offset is needed for determining the active item for results within a
     * category. Since the index is reset to 0 for each new category, an offset
     * must be passed in.
     */

  }, {
    key: 'render',
    value: function render() {
      debug('render()');
      debug('props', this.props);
      debug('state', this.state);
      var _state2 = this.state,
          searchClasses = _state2.searchClasses,
          focus = _state2.focus,
          open = _state2.open;
      var _props = this.props,
          aligned = _props.aligned,
          category = _props.category,
          className = _props.className,
          fluid = _props.fluid,
          loading = _props.loading,
          size = _props.size;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_16_classnames___default()('ui', open && 'active visible', size, searchClasses, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(category, 'category'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(focus, 'focus'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(fluid, 'fluid'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["a" /* useKeyOnly */])(loading, 'loading'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["h" /* useValueAndKey */])(aligned, 'aligned'), 'search', className);
      var unhandled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["b" /* getUnhandledProps */])(Search, this.props);
      var ElementType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["c" /* getElementType */])(Search, this.props);

      var _partitionHTMLInputPr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_19__lib__["s" /* partitionHTMLInputProps */])(unhandled, __WEBPACK_IMPORTED_MODULE_19__lib__["t" /* htmlInputAttrs */]),
          _partitionHTMLInputPr2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return __WEBPACK_IMPORTED_MODULE_18_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, rest, {
          className: classes,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown
        }),
        this.renderSearchInput(htmlInputProps),
        this.renderResultsMenu()
      );
    }
  }]);

  return Search;
}(__WEBPACK_IMPORTED_MODULE_19__lib__["n" /* AutoControlledComponent */]);

Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search.autoControlledProps = ['open', 'value'];
Search._meta = {
  name: 'Search',
  type: __WEBPACK_IMPORTED_MODULE_19__lib__["d" /* META */].TYPES.MODULE
};
Search.Category = __WEBPACK_IMPORTED_MODULE_21__SearchCategory__["a" /* default */];
Search.Result = __WEBPACK_IMPORTED_MODULE_22__SearchResult__["a" /* default */];
Search.Results = __WEBPACK_IMPORTED_MODULE_23__SearchResults__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Search);
 true ? Search.propTypes = {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_19__lib__["e" /* customPropTypes */].as,

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Initial value. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.object]),

  /** Minimum characters to query for results */
  minCharacters: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** Controls whether or not the results menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_22__SearchResult__["a" /* default */].propTypes)), __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.object]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func,

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** A search can display results from remote content ordered by categories. */
  category: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string,

  /** A search can have its results take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** A search input can take up the width of its container. */
  input: __WEBPACK_IMPORTED_MODULE_19__lib__["e" /* customPropTypes */].itemShorthand,

  /** A search can show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.bool,

  /** A search can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_15_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_19__lib__["g" /* SUI */].SIZES, 'medium'))
} : void 0;
Search.handledProps = ['aligned', 'as', 'category', 'categoryRenderer', 'className', 'defaultOpen', 'defaultValue', 'fluid', 'icon', 'input', 'loading', 'minCharacters', 'noResultsDescription', 'noResultsMessage', 'onBlur', 'onFocus', 'onMouseDown', 'onResultSelect', 'onSearchChange', 'open', 'resultRenderer', 'results', 'selectFirstResult', 'showNoResults', 'size', 'value'];

/***/ }),

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isNil__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FeedContent__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FeedDate__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FeedEvent__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FeedExtra__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__FeedLabel__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__FeedLike__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__FeedMeta__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__FeedSummary__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__FeedUser__ = __webpack_require__(681);





















/**
 * A feed presents user activity chronologically.
 */
function Feed(props) {
  var children = props.children,
      className = props.className,
      events = props.events,
      size = props.size;


  var classes = __WEBPACK_IMPORTED_MODULE_5_classnames___default()('ui', size, 'feed', className);
  var rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib__["b" /* getUnhandledProps */])(Feed, props);
  var ElementType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib__["c" /* getElementType */])(Feed, props);

  if (!__WEBPACK_IMPORTED_MODULE_4_lodash_isNil___default()(children)) {
    return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      ElementType,
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
      children
    );
  }

  var eventElements = __WEBPACK_IMPORTED_MODULE_3_lodash_map___default()(events, function (eventProps) {
    var childKey = eventProps.childKey,
        date = eventProps.date,
        meta = eventProps.meta,
        summary = eventProps.summary,
        eventData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(eventProps, ['childKey', 'date', 'meta', 'summary']);

    var finalKey = childKey || [date, meta, summary].join('-');

    return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__FeedEvent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
      date: date,
      key: finalKey,
      meta: meta,
      summary: summary
    }, eventData));
  });

  return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    ElementType,
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
    eventElements
  );
}

Feed.handledProps = ['as', 'children', 'className', 'events', 'size'];
Feed._meta = {
  name: 'Feed',
  type: __WEBPACK_IMPORTED_MODULE_8__lib__["d" /* META */].TYPES.VIEW
};

 true ? Feed.propTypes = {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_8__lib__["e" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Shorthand array of props for FeedEvent. */
  events: __WEBPACK_IMPORTED_MODULE_8__lib__["e" /* customPropTypes */].collectionShorthand,

  /** A feed can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_2_lodash_without___default()(__WEBPACK_IMPORTED_MODULE_8__lib__["g" /* SUI */].SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'))
} : void 0;

Feed.Content = __WEBPACK_IMPORTED_MODULE_9__FeedContent__["a" /* default */];
Feed.Date = __WEBPACK_IMPORTED_MODULE_10__FeedDate__["a" /* default */];
Feed.Event = __WEBPACK_IMPORTED_MODULE_11__FeedEvent__["a" /* default */];
Feed.Extra = __WEBPACK_IMPORTED_MODULE_12__FeedExtra__["a" /* default */];
Feed.Label = __WEBPACK_IMPORTED_MODULE_13__FeedLabel__["a" /* default */];
Feed.Like = __WEBPACK_IMPORTED_MODULE_14__FeedLike__["a" /* default */];
Feed.Meta = __WEBPACK_IMPORTED_MODULE_15__FeedMeta__["a" /* default */];
Feed.Summary = __WEBPACK_IMPORTED_MODULE_16__FeedSummary__["a" /* default */];
Feed.User = __WEBPACK_IMPORTED_MODULE_17__FeedUser__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (Feed);

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNil__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Item__ = __webpack_require__(965);












/**
 * A group of items.
 */
function ItemGroup(props) {
  var children = props.children,
      className = props.className,
      divided = props.divided,
      items = props.items,
      link = props.link,
      relaxed = props.relaxed;


  var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default()('ui', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib__["a" /* useKeyOnly */])(divided, 'divided'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib__["a" /* useKeyOnly */])(link, 'link'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib__["j" /* useKeyOrValueAndKey */])(relaxed, 'relaxed'), 'items', className);
  var rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib__["b" /* getUnhandledProps */])(ItemGroup, props);
  var ElementType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__lib__["c" /* getElementType */])(ItemGroup, props);

  if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isNil___default()(children)) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      ElementType,
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
      children
    );
  }

  var itemsJSX = __WEBPACK_IMPORTED_MODULE_2_lodash_map___default()(items, function (item) {
    var childKey = item.childKey,
        itemProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(item, ['childKey']);

    var finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-');

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, itemProps, { key: finalKey }));
  });

  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    ElementType,
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rest, { className: classes }),
    itemsJSX
  );
}

ItemGroup.handledProps = ['as', 'children', 'className', 'divided', 'items', 'link', 'relaxed'];
ItemGroup._meta = {
  name: 'ItemGroup',
  type: __WEBPACK_IMPORTED_MODULE_7__lib__["d" /* META */].TYPES.VIEW,
  parent: 'Item'
};

 true ? ItemGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_7__lib__["e" /* customPropTypes */].as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /** Items can be divided to better distinguish between grouped content. */
  divided: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /** Shorthand array of props for Item. */
  items: __WEBPACK_IMPORTED_MODULE_7__lib__["e" /* customPropTypes */].collectionShorthand,

  /** An item can be formatted so that the entire contents link to another page. */
  link: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /** A group of items can relax its padding to provide more negative space. */
  relaxed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['very'])])
} : void 0;

/* harmony default export */ __webpack_exports__["a"] = (ItemGroup);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbW9kdWxlcy9TZWFyY2gvU2VhcmNoLmpzPzlhM2YiLCJ3ZWJwYWNrOi8vLy4vfi9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL3ZpZXdzL0ZlZWQvRmVlZC5qcz9mNDhlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzPzdlZGMwYTciLCJ3ZWJwYWNrOi8vLy4vfi9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL3ZpZXdzL0l0ZW0vSXRlbUdyb3VwLmpzPzdlZGMwYTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFcU87QUFDck87QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7OztBQUdBLHlCQUF5QixlQUFlLEdBQUcsNENBQTRDO0FBQ3ZGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQyxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsOEZBQWtDLHVGQUEwQjtBQUM1RDtBQUNBLGtCQUFrQiwwREFBMEQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRztBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxTQUFTLDZCQUE2QjtBQUN0QztBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOzs7QUFHQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsNkJBQTZCO0FBQ3hFLG1DQUFtQyxzQkFBc0IsNkJBQTZCO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlLEVBQUU7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGVBQWU7QUFDNUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMFg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUV3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhFQUFpQixTQUFTLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsNEVBQWUsU0FBUyxxQkFBcUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRDs7Ozs7Ozs7QUNwR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVvRztBQUNwRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhFQUFpQixTQUFTLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVNQUFnRCxjQUFjLGdCQUFnQjtBQUM5RSxHQUFHOztBQUVIO0FBQ0E7QUFDQSw0RUFBZSxTQUFTLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0UiLCJmaWxlIjoiMC4wOWYzMDE4YWYzNDRmN2RkYTc1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9nZXQyIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBfcGFydGlhbFJpZ2h0IGZyb20gJ2xvZGFzaC9wYXJ0aWFsUmlnaHQnO1xuaW1wb3J0IF9pblJhbmdlIGZyb20gJ2xvZGFzaC9pblJhbmdlJztcbmltcG9ydCBfbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBfaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCc7XG5pbXBvcnQgX3dpdGhvdXQgZnJvbSAnbG9kYXNoL3dpdGhvdXQnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXV0b0NvbnRyb2xsZWRDb21wb25lbnQgYXMgQ29tcG9uZW50LCBjdXN0b21Qcm9wVHlwZXMsIGdldEVsZW1lbnRUeXBlLCBnZXRVbmhhbmRsZWRQcm9wcywgaHRtbElucHV0QXR0cnMsIGlzQnJvd3Nlciwga2V5Ym9hcmRLZXksIG1ha2VEZWJ1Z2dlciwgTUVUQSwgb2JqZWN0RGlmZiwgcGFydGl0aW9uSFRNTElucHV0UHJvcHMsIFNVSSwgdXNlS2V5T25seSwgdXNlVmFsdWVBbmRLZXkgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2VsZW1lbnRzL0lucHV0JztcbmltcG9ydCBTZWFyY2hDYXRlZ29yeSBmcm9tICcuL1NlYXJjaENhdGVnb3J5JztcbmltcG9ydCBTZWFyY2hSZXN1bHQgZnJvbSAnLi9TZWFyY2hSZXN1bHQnO1xuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnLi9TZWFyY2hSZXN1bHRzJztcblxudmFyIGRlYnVnID0gbWFrZURlYnVnZ2VyKCdzZWFyY2gnKTtcblxuLyoqXG4gKiBBIHNlYXJjaCBtb2R1bGUgYWxsb3dzIGEgdXNlciB0byBxdWVyeSBmb3IgcmVzdWx0cyBmcm9tIGEgc2VsZWN0aW9uIG9mIGRhdGFcbiAqL1xuXG52YXIgU2VhcmNoID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlYXJjaCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2VhcmNoKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWFyY2gpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFNlYXJjaC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlYXJjaCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZVJlc3VsdFNlbGVjdCA9IGZ1bmN0aW9uIChlLCByZXN1bHQpIHtcbiAgICAgIGRlYnVnKCdoYW5kbGVSZXN1bHRTZWxlY3QoKScpO1xuICAgICAgZGVidWcocmVzdWx0KTtcbiAgICAgIHZhciBvblJlc3VsdFNlbGVjdCA9IF90aGlzLnByb3BzLm9uUmVzdWx0U2VsZWN0O1xuXG4gICAgICBpZiAob25SZXN1bHRTZWxlY3QpIG9uUmVzdWx0U2VsZWN0KGUsIHJlc3VsdCk7XG4gICAgfSwgX3RoaXMuY2xvc2VPbkVzY2FwZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuRXNjYXBlKSByZXR1cm47XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0sIF90aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ21vdmVTZWxlY3Rpb25PbktleURvd24oKScpO1xuICAgICAgZGVidWcoa2V5Ym9hcmRLZXkuZ2V0TmFtZShlKSk7XG4gICAgICBzd2l0Y2ggKGtleWJvYXJkS2V5LmdldENvZGUoZSkpIHtcbiAgICAgICAgY2FzZSBrZXlib2FyZEtleS5BcnJvd0Rvd246XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLm1vdmVTZWxlY3Rpb25CeSgxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlib2FyZEtleS5BcnJvd1VwOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkoLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIF90aGlzLnNlbGVjdEl0ZW1PbkVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdzZWxlY3RJdGVtT25FbnRlcigpJyk7XG4gICAgICBkZWJ1ZyhrZXlib2FyZEtleS5nZXROYW1lKGUpKTtcbiAgICAgIGlmIChrZXlib2FyZEtleS5nZXRDb2RlKGUpICE9PSBrZXlib2FyZEtleS5FbnRlcikgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gX3RoaXMuZ2V0U2VsZWN0ZWRSZXN1bHQoKTtcblxuICAgICAgLy8gcHJldmVudCBzZWxlY3RpbmcgbnVsbCBpZiB0aGVyZSB3YXMgbm8gc2VsZWN0ZWQgaXRlbSB2YWx1ZVxuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybjtcblxuICAgICAgLy8gbm90aWZ5IHRoZSBvblJlc3VsdFNlbGVjdCBwcm9wIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB2YWx1ZVxuICAgICAgX3RoaXMuc2V0VmFsdWUocmVzdWx0LnRpdGxlKTtcbiAgICAgIF90aGlzLmhhbmRsZVJlc3VsdFNlbGVjdChlLCByZXN1bHQpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5jbG9zZU9uRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnY2xvc2VPbkRvY3VtZW50Q2xpY2soKScpO1xuICAgICAgZGVidWcoZSk7XG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlTW91c2VEb3duKCknKTtcbiAgICAgIHZhciBvbk1vdXNlRG93biA9IF90aGlzLnByb3BzLm9uTW91c2VEb3duO1xuXG4gICAgICBpZiAob25Nb3VzZURvd24pIG9uTW91c2VEb3duKGUsIF90aGlzLnByb3BzKTtcbiAgICAgIF90aGlzLmlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIC8vIERvIG5vdCBhY2Nlc3MgZG9jdW1lbnQgd2hlbiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICAgIGlmICghaXNCcm93c2VyKSByZXR1cm47XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX3RoaXMuaGFuZGxlRG9jdW1lbnRNb3VzZVVwKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVEb2N1bWVudE1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlRG9jdW1lbnRNb3VzZVVwKCknKTtcbiAgICAgIF90aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLmhhbmRsZURvY3VtZW50TW91c2VVcCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlSW5wdXRDbGljaygpJywgZSk7XG5cbiAgICAgIC8vIHByZXZlbnQgY2xvc2VPbkRvY3VtZW50Q2xpY2soKVxuICAgICAgZS5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgX3RoaXMudHJ5T3BlbigpO1xuICAgIH0sIF90aGlzLmhhbmRsZUl0ZW1DbGljayA9IGZ1bmN0aW9uIChlLCBfcmVmMikge1xuICAgICAgdmFyIGlkID0gX3JlZjIuaWQ7XG5cbiAgICAgIGRlYnVnKCdoYW5kbGVJdGVtQ2xpY2soKScpO1xuICAgICAgZGVidWcoaWQpO1xuICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLmdldFNlbGVjdGVkUmVzdWx0KGlkKTtcblxuICAgICAgLy8gcHJldmVudCBjbG9zZU9uRG9jdW1lbnRDbGljaygpXG4gICAgICBlLm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAvLyBub3RpZnkgdGhlIG9uUmVzdWx0U2VsZWN0IHByb3AgdGhhdCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gY2hhbmdlIHZhbHVlXG4gICAgICBfdGhpcy5zZXRWYWx1ZShyZXN1bHQudGl0bGUpO1xuICAgICAgX3RoaXMuaGFuZGxlUmVzdWx0U2VsZWN0KGUsIHJlc3VsdCk7XG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0sIF90aGlzLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdoYW5kbGVGb2N1cygpJyk7XG4gICAgICB2YXIgb25Gb2N1cyA9IF90aGlzLnByb3BzLm9uRm9jdXM7XG5cbiAgICAgIGlmIChvbkZvY3VzKSBvbkZvY3VzKGUsIF90aGlzLnByb3BzKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWJ1ZygnaGFuZGxlQmx1cigpJyk7XG4gICAgICB2YXIgb25CbHVyID0gX3RoaXMucHJvcHMub25CbHVyO1xuXG4gICAgICBpZiAob25CbHVyKSBvbkJsdXIoZSwgX3RoaXMucHJvcHMpO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlYnVnKCdoYW5kbGVTZWFyY2hDaGFuZ2UoKScpO1xuICAgICAgZGVidWcoZS50YXJnZXQudmFsdWUpO1xuICAgICAgLy8gcHJldmVudCBwcm9wYWdhdGluZyB0byB0aGlzLnByb3BzLm9uQ2hhbmdlKClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblNlYXJjaENoYW5nZSA9IF90aGlzJHByb3BzLm9uU2VhcmNoQ2hhbmdlLFxuICAgICAgICAgIG1pbkNoYXJhY3RlcnMgPSBfdGhpcyRwcm9wcy5taW5DaGFyYWN0ZXJzO1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICB2YXIgbmV3UXVlcnkgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICAgaWYgKG9uU2VhcmNoQ2hhbmdlKSBvblNlYXJjaENoYW5nZShlLCBuZXdRdWVyeSk7XG5cbiAgICAgIC8vIG9wZW4gc2VhcmNoIGRyb3Bkb3duIG9uIHNlYXJjaCBxdWVyeVxuICAgICAgaWYgKG5ld1F1ZXJ5Lmxlbmd0aCA8IG1pbkNoYXJhY3RlcnMpIHtcbiAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wZW4pIHtcbiAgICAgICAgX3RoaXMudHJ5T3BlbihuZXdRdWVyeSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFZhbHVlKG5ld1F1ZXJ5KTtcbiAgICB9LCBfdGhpcy5nZXRGbGF0dGVuZWRSZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNhdGVnb3J5ID0gX3RoaXMkcHJvcHMyLmNhdGVnb3J5LFxuICAgICAgICAgIHJlc3VsdHMgPSBfdGhpcyRwcm9wczIucmVzdWx0cztcblxuXG4gICAgICByZXR1cm4gIWNhdGVnb3J5ID8gcmVzdWx0cyA6IF9yZWR1Y2UocmVzdWx0cywgZnVuY3Rpb24gKG1lbW8sIGNhdGVnb3J5RGF0YSkge1xuICAgICAgICByZXR1cm4gbWVtby5jb25jYXQoY2F0ZWdvcnlEYXRhLnJlc3VsdHMpO1xuICAgICAgfSwgW10pO1xuICAgIH0sIF90aGlzLmdldFNlbGVjdGVkUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG4gICAgICB2YXIgcmVzdWx0cyA9IF90aGlzLmdldEZsYXR0ZW5lZFJlc3VsdHMoKTtcbiAgICAgIHJldHVybiBfZ2V0KHJlc3VsdHMsIGluZGV4KTtcbiAgICB9LCBfdGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZGVidWcoJ3NldFZhbHVlKCknKTtcbiAgICAgIGRlYnVnKCd2YWx1ZScsIHZhbHVlKTtcblxuICAgICAgdmFyIHNlbGVjdEZpcnN0UmVzdWx0ID0gX3RoaXMucHJvcHMuc2VsZWN0Rmlyc3RSZXN1bHQ7XG5cblxuICAgICAgX3RoaXMudHJ5U2V0U3RhdGUoeyB2YWx1ZTogdmFsdWUgfSwgeyBzZWxlY3RlZEluZGV4OiBzZWxlY3RGaXJzdFJlc3VsdCA/IDAgOiAtMSB9KTtcbiAgICB9LCBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICBkZWJ1ZygnbW92ZVNlbGVjdGlvbkJ5KCknKTtcbiAgICAgIGRlYnVnKCdvZmZzZXQ6ICcgKyBvZmZzZXQpO1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG5cbiAgICAgIHZhciByZXN1bHRzID0gX3RoaXMuZ2V0RmxhdHRlbmVkUmVzdWx0cygpO1xuICAgICAgdmFyIGxhc3RJbmRleCA9IHJlc3VsdHMubGVuZ3RoIC0gMTtcblxuICAgICAgLy8gbmV4dCBpcyBhZnRlciBsYXN0LCB3cmFwIHRvIGJlZ2lubmluZ1xuICAgICAgLy8gbmV4dCBpcyBiZWZvcmUgZmlyc3QsIHdyYXAgdG8gZW5kXG4gICAgICB2YXIgbmV4dEluZGV4ID0gc2VsZWN0ZWRJbmRleCArIG9mZnNldDtcbiAgICAgIGlmIChuZXh0SW5kZXggPiBsYXN0SW5kZXgpIG5leHRJbmRleCA9IDA7ZWxzZSBpZiAobmV4dEluZGV4IDwgMCkgbmV4dEluZGV4ID0gbGFzdEluZGV4O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IG5leHRJbmRleCB9KTtcbiAgICAgIF90aGlzLnNjcm9sbFNlbGVjdGVkSXRlbUludG9WaWV3KCk7XG4gICAgfSwgX3RoaXMuc2Nyb2xsU2VsZWN0ZWRJdGVtSW50b1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1Zygnc2Nyb2xsU2VsZWN0ZWRJdGVtSW50b1ZpZXcoKScpO1xuICAgICAgLy8gRG8gbm90IGFjY2VzcyBkb2N1bWVudCB3aGVuIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuICAgICAgaWYgKCFpc0Jyb3dzZXIpIHJldHVybjtcbiAgICAgIHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVpLnNlYXJjaC5hY3RpdmUudmlzaWJsZSAucmVzdWx0cy52aXNpYmxlJyk7XG4gICAgICB2YXIgaXRlbSA9IG1lbnUucXVlcnlTZWxlY3RvcignLnJlc3VsdC5hY3RpdmUnKTtcbiAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgICAgZGVidWcoJ21lbnUgKHJlc3VsdHMpOiAnICsgbWVudSk7XG4gICAgICBkZWJ1ZygnaXRlbSAocmVzdWx0KTogJyArIGl0ZW0pO1xuICAgICAgdmFyIGlzT3V0T2ZVcHBlclZpZXcgPSBpdGVtLm9mZnNldFRvcCA8IG1lbnUuc2Nyb2xsVG9wO1xuICAgICAgdmFyIGlzT3V0T2ZMb3dlclZpZXcgPSBpdGVtLm9mZnNldFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0ID4gbWVudS5zY3JvbGxUb3AgKyBtZW51LmNsaWVudEhlaWdodDtcblxuICAgICAgaWYgKGlzT3V0T2ZVcHBlclZpZXcpIHtcbiAgICAgICAgbWVudS5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPdXRPZkxvd2VyVmlldykge1xuICAgICAgICBtZW51LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wICsgaXRlbS5jbGllbnRIZWlnaHQgLSBtZW51LmNsaWVudEhlaWdodDtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy50cnlPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3RoaXMuc3RhdGUudmFsdWU7XG5cbiAgICAgIGRlYnVnKCdvcGVuKCknKTtcblxuICAgICAgdmFyIG1pbkNoYXJhY3RlcnMgPSBfdGhpcy5wcm9wcy5taW5DaGFyYWN0ZXJzO1xuXG4gICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCA8IG1pbkNoYXJhY3RlcnMpIHJldHVybjtcblxuICAgICAgX3RoaXMub3BlbigpO1xuICAgIH0sIF90aGlzLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1Zygnb3BlbigpJyk7XG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgfSwgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygnY2xvc2UoKScpO1xuICAgICAgX3RoaXMudHJ5U2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCA9IGZ1bmN0aW9uIChyZXN0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzMy5pY29uLFxuICAgICAgICAgIGlucHV0ID0gX3RoaXMkcHJvcHMzLmlucHV0O1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG5cblxuICAgICAgcmV0dXJuIElucHV0LmNyZWF0ZShpbnB1dCwgeyBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBpbnB1dDogeyBjbGFzc05hbWU6ICdwcm9tcHQnLCB0YWJJbmRleDogJzAnLCBhdXRvQ29tcGxldGU6ICdvZmYnIH0sXG4gICAgICAgICAgb25CbHVyOiBfdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlOiBfdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UsXG4gICAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlSW5wdXRDbGljayxcbiAgICAgICAgICBvbkZvY3VzOiBfdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSkgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyTm9SZXN1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG5vUmVzdWx0c0Rlc2NyaXB0aW9uID0gX3RoaXMkcHJvcHM0Lm5vUmVzdWx0c0Rlc2NyaXB0aW9uLFxuICAgICAgICAgIG5vUmVzdWx0c01lc3NhZ2UgPSBfdGhpcyRwcm9wczQubm9SZXN1bHRzTWVzc2FnZTtcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAnbWVzc2FnZSBlbXB0eScgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2hlYWRlcicgfSxcbiAgICAgICAgICBub1Jlc3VsdHNNZXNzYWdlXG4gICAgICAgICksXG4gICAgICAgIG5vUmVzdWx0c0Rlc2NyaXB0aW9uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdkZXNjcmlwdGlvbicgfSxcbiAgICAgICAgICBub1Jlc3VsdHNEZXNjcmlwdGlvblxuICAgICAgICApXG4gICAgICApO1xuICAgIH0sIF90aGlzLnJlbmRlclJlc3VsdCA9IGZ1bmN0aW9uIChfcmVmMywgaW5kZXgsIF9hcnJheSkge1xuICAgICAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcblxuICAgICAgdmFyIGNoaWxkS2V5ID0gX3JlZjMuY2hpbGRLZXksXG4gICAgICAgICAgcmVzdWx0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBbJ2NoaWxkS2V5J10pO1xuXG4gICAgICB2YXIgcmVzdWx0UmVuZGVyZXIgPSBfdGhpcy5wcm9wcy5yZXN1bHRSZW5kZXJlcjtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgdmFyIG9mZnNldEluZGV4ID0gaW5kZXggKyBvZmZzZXQ7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlYXJjaFJlc3VsdCwgX2V4dGVuZHMoe1xuICAgICAgICBrZXk6IGNoaWxkS2V5IHx8IHJlc3VsdC50aXRsZSxcbiAgICAgICAgYWN0aXZlOiBzZWxlY3RlZEluZGV4ID09PSBvZmZzZXRJbmRleCxcbiAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlSXRlbUNsaWNrLFxuICAgICAgICByZW5kZXJlcjogcmVzdWx0UmVuZGVyZXJcbiAgICAgIH0sIHJlc3VsdCwge1xuICAgICAgICBpZDogb2Zmc2V0SW5kZXggLy8gVXNlZCB0byBsb29rdXAgdGhlIHJlc3VsdCBvbiBpdGVtIGNsaWNrXG4gICAgICB9KSk7XG4gICAgfSwgX3RoaXMucmVuZGVyUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHRzID0gX3RoaXMucHJvcHMucmVzdWx0cztcblxuXG4gICAgICByZXR1cm4gX21hcChyZXN1bHRzLCBfdGhpcy5yZW5kZXJSZXN1bHQpO1xuICAgIH0sIF90aGlzLnJlbmRlckNhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2F0ZWdvcnlSZW5kZXJlciA9IF90aGlzJHByb3BzNS5jYXRlZ29yeVJlbmRlcmVyLFxuICAgICAgICAgIGNhdGVnb3JpZXMgPSBfdGhpcyRwcm9wczUucmVzdWx0cztcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuXG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICByZXR1cm4gX21hcChjYXRlZ29yaWVzLCBmdW5jdGlvbiAoX3JlZjQsIG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZEtleSA9IF9yZWY0LmNoaWxkS2V5LFxuICAgICAgICAgICAgY2F0ZWdvcnkgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjQsIFsnY2hpbGRLZXknXSk7XG5cbiAgICAgICAgdmFyIGNhdGVnb3J5UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAga2V5OiBjaGlsZEtleSB8fCBjYXRlZ29yeS5uYW1lLFxuICAgICAgICAgIGFjdGl2ZTogX2luUmFuZ2Uoc2VsZWN0ZWRJbmRleCwgY291bnQsIGNvdW50ICsgY2F0ZWdvcnkucmVzdWx0cy5sZW5ndGgpLFxuICAgICAgICAgIHJlbmRlcmVyOiBjYXRlZ29yeVJlbmRlcmVyXG4gICAgICAgIH0sIGNhdGVnb3J5KTtcbiAgICAgICAgdmFyIHJlbmRlckZuID0gX3BhcnRpYWxSaWdodChfdGhpcy5yZW5kZXJSZXN1bHQsIGNvdW50KTtcblxuICAgICAgICBjb3VudCA9IGNvdW50ICsgY2F0ZWdvcnkucmVzdWx0cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgU2VhcmNoQ2F0ZWdvcnksXG4gICAgICAgICAgY2F0ZWdvcnlQcm9wcyxcbiAgICAgICAgICBjYXRlZ29yeS5yZXN1bHRzLm1hcChyZW5kZXJGbilcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0sIF90aGlzLnJlbmRlck1lbnVDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNhdGVnb3J5ID0gX3RoaXMkcHJvcHM2LmNhdGVnb3J5LFxuICAgICAgICAgIHNob3dOb1Jlc3VsdHMgPSBfdGhpcyRwcm9wczYuc2hvd05vUmVzdWx0cyxcbiAgICAgICAgICByZXN1bHRzID0gX3RoaXMkcHJvcHM2LnJlc3VsdHM7XG5cblxuICAgICAgaWYgKF9pc0VtcHR5KHJlc3VsdHMpKSB7XG4gICAgICAgIHJldHVybiBzaG93Tm9SZXN1bHRzID8gX3RoaXMucmVuZGVyTm9SZXN1bHRzKCkgOiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2F0ZWdvcnkgPyBfdGhpcy5yZW5kZXJDYXRlZ29yaWVzKCkgOiBfdGhpcy5yZW5kZXJSZXN1bHRzKCk7XG4gICAgfSwgX3RoaXMucmVuZGVyUmVzdWx0c01lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgIHZhciByZXN1bHRzQ2xhc3NlcyA9IG9wZW4gPyAndmlzaWJsZScgOiAnJztcbiAgICAgIHZhciBtZW51Q29udGVudCA9IF90aGlzLnJlbmRlck1lbnVDb250ZW50KCk7XG5cbiAgICAgIGlmICghbWVudUNvbnRlbnQpIHJldHVybjtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFNlYXJjaFJlc3VsdHMsXG4gICAgICAgIHsgY2xhc3NOYW1lOiByZXN1bHRzQ2xhc3NlcyB9LFxuICAgICAgICBtZW51Q29udGVudFxuICAgICAgKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWFyY2gsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgaWYgKF9nZXQyKFNlYXJjaC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWFyY2gucHJvdG90eXBlKSwgJ2NvbXBvbmVudFdpbGxNb3VudCcsIHRoaXMpKSBfZ2V0MihTZWFyY2gucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VhcmNoLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsTW91bnQnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgZGVidWcoJ2NvbXBvbmVudFdpbGxNb3VudCgpJyk7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3N0YXRlLm9wZW4sXG4gICAgICAgICAgdmFsdWUgPSBfc3RhdGUudmFsdWU7XG5cblxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAob3BlbikgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gIV9pc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIV9pc0VxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBfZ2V0MihTZWFyY2gucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VhcmNoLnByb3RvdHlwZSksICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJywgdGhpcykuY2FsbCh0aGlzLCBuZXh0UHJvcHMpO1xuICAgICAgZGVidWcoJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKScpO1xuICAgICAgLy8gVE9ETyBvYmplY3REaWZmIHN0aWxsIHJ1bnMgaW4gcHJvZCwgc3RvcCBpdFxuICAgICAgZGVidWcoJ2NoYW5nZWQgcHJvcHM6Jywgb2JqZWN0RGlmZihuZXh0UHJvcHMsIHRoaXMucHJvcHMpKTtcblxuICAgICAgaWYgKCFfaXNFcXVhbChuZXh0UHJvcHMudmFsdWUsIHRoaXMucHJvcHMudmFsdWUpKSB7XG4gICAgICAgIGRlYnVnKCd2YWx1ZSBjaGFuZ2VkLCBzZXR0aW5nJywgbmV4dFByb3BzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb21wbGV4aXR5XG4gICAgICBkZWJ1ZygnY29tcG9uZW50RGlkVXBkYXRlKCknKTtcbiAgICAgIC8vIFRPRE8gb2JqZWN0RGlmZiBzdGlsbCBydW5zIGluIHByb2QsIHN0b3AgaXRcbiAgICAgIGRlYnVnKCd0byBzdGF0ZTonLCBvYmplY3REaWZmKHByZXZTdGF0ZSwgdGhpcy5zdGF0ZSkpO1xuXG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgICAvLyBmb2N1c2VkIC8gYmx1cnJlZFxuICAgICAgaWYgKCFwcmV2U3RhdGUuZm9jdXMgJiYgdGhpcy5zdGF0ZS5mb2N1cykge1xuICAgICAgICBkZWJ1Zygnc2VhcmNoIGZvY3VzZWQnKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICAgICAgZGVidWcoJ21vdXNlIGlzIG5vdCBkb3duLCBvcGVuaW5nJyk7XG4gICAgICAgICAgdGhpcy50cnlPcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24pO1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUuZm9jdXMgJiYgIXRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgICAgZGVidWcoJ3NlYXJjaCBibHVycmVkJyk7XG4gICAgICAgIGlmICghdGhpcy5pc01vdXNlRG93bikge1xuICAgICAgICAgIGRlYnVnKCdtb3VzZSBpcyBub3QgZG93biwgY2xvc2luZycpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBvcGVuZWQgLyBjbG9zZWRcbiAgICAgIGlmICghcHJldlN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGRlYnVnKCdzZWFyY2ggb3BlbmVkJyk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jbG9zZU9uRXNjYXBlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT25Eb2N1bWVudENsaWNrKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICBkZWJ1Zygnc2VhcmNoIGNsb3NlZCcpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNsb3NlT25Fc2NhcGUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBkZWJ1ZygnY29tcG9uZW50V2lsbFVubW91bnQoKScpO1xuXG4gICAgICAvLyBEbyBub3QgYWNjZXNzIGRvY3VtZW50IHdoZW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuO1xuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmNsb3NlT25Fc2NhcGUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT25Eb2N1bWVudENsaWNrKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRG9jdW1lbnQgRXZlbnQgSGFuZGxlcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29tcG9uZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU2V0dGVyc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBCZWhhdmlvclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIE9wZW4gaWYgdGhlIGN1cnJlbnQgdmFsdWUgaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW5DaGFyYWN0ZXJzIHByb3BcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlbmRlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8qKlxuICAgICAqIE9mZnNldCBpcyBuZWVkZWQgZm9yIGRldGVybWluaW5nIHRoZSBhY3RpdmUgaXRlbSBmb3IgcmVzdWx0cyB3aXRoaW4gYVxuICAgICAqIGNhdGVnb3J5LiBTaW5jZSB0aGUgaW5kZXggaXMgcmVzZXQgdG8gMCBmb3IgZWFjaCBuZXcgY2F0ZWdvcnksIGFuIG9mZnNldFxuICAgICAqIG11c3QgYmUgcGFzc2VkIGluLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBkZWJ1ZygncmVuZGVyKCknKTtcbiAgICAgIGRlYnVnKCdwcm9wcycsIHRoaXMucHJvcHMpO1xuICAgICAgZGVidWcoJ3N0YXRlJywgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VhcmNoQ2xhc3NlcyA9IF9zdGF0ZTIuc2VhcmNoQ2xhc3NlcyxcbiAgICAgICAgICBmb2N1cyA9IF9zdGF0ZTIuZm9jdXMsXG4gICAgICAgICAgb3BlbiA9IF9zdGF0ZTIub3BlbjtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFsaWduZWQgPSBfcHJvcHMuYWxpZ25lZCxcbiAgICAgICAgICBjYXRlZ29yeSA9IF9wcm9wcy5jYXRlZ29yeSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGZsdWlkID0gX3Byb3BzLmZsdWlkLFxuICAgICAgICAgIGxvYWRpbmcgPSBfcHJvcHMubG9hZGluZyxcbiAgICAgICAgICBzaXplID0gX3Byb3BzLnNpemU7XG5cbiAgICAgIC8vIENsYXNzZXNcblxuICAgICAgdmFyIGNsYXNzZXMgPSBjeCgndWknLCBvcGVuICYmICdhY3RpdmUgdmlzaWJsZScsIHNpemUsIHNlYXJjaENsYXNzZXMsIHVzZUtleU9ubHkoY2F0ZWdvcnksICdjYXRlZ29yeScpLCB1c2VLZXlPbmx5KGZvY3VzLCAnZm9jdXMnKSwgdXNlS2V5T25seShmbHVpZCwgJ2ZsdWlkJyksIHVzZUtleU9ubHkobG9hZGluZywgJ2xvYWRpbmcnKSwgdXNlVmFsdWVBbmRLZXkoYWxpZ25lZCwgJ2FsaWduZWQnKSwgJ3NlYXJjaCcsIGNsYXNzTmFtZSk7XG4gICAgICB2YXIgdW5oYW5kbGVkID0gZ2V0VW5oYW5kbGVkUHJvcHMoU2VhcmNoLCB0aGlzLnByb3BzKTtcbiAgICAgIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKFNlYXJjaCwgdGhpcy5wcm9wcyk7XG5cbiAgICAgIHZhciBfcGFydGl0aW9uSFRNTElucHV0UHIgPSBwYXJ0aXRpb25IVE1MSW5wdXRQcm9wcyh1bmhhbmRsZWQsIGh0bWxJbnB1dEF0dHJzKSxcbiAgICAgICAgICBfcGFydGl0aW9uSFRNTElucHV0UHIyID0gX3NsaWNlZFRvQXJyYXkoX3BhcnRpdGlvbkhUTUxJbnB1dFByLCAyKSxcbiAgICAgICAgICBodG1sSW5wdXRQcm9wcyA9IF9wYXJ0aXRpb25IVE1MSW5wdXRQcjJbMF0sXG4gICAgICAgICAgcmVzdCA9IF9wYXJ0aXRpb25IVE1MSW5wdXRQcjJbMV07XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBFbGVtZW50VHlwZSxcbiAgICAgICAgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd25cbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoaHRtbElucHV0UHJvcHMpLFxuICAgICAgICB0aGlzLnJlbmRlclJlc3VsdHNNZW51KClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0oQ29tcG9uZW50KTtcblxuU2VhcmNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbjogJ3NlYXJjaCcsXG4gIGlucHV0OiAndGV4dCcsXG4gIG1pbkNoYXJhY3RlcnM6IDEsXG4gIG5vUmVzdWx0c01lc3NhZ2U6ICdObyByZXN1bHRzIGZvdW5kLicsXG4gIHNob3dOb1Jlc3VsdHM6IHRydWVcbn07XG5TZWFyY2guYXV0b0NvbnRyb2xsZWRQcm9wcyA9IFsnb3BlbicsICd2YWx1ZSddO1xuU2VhcmNoLl9tZXRhID0ge1xuICBuYW1lOiAnU2VhcmNoJyxcbiAgdHlwZTogTUVUQS5UWVBFUy5NT0RVTEVcbn07XG5TZWFyY2guQ2F0ZWdvcnkgPSBTZWFyY2hDYXRlZ29yeTtcblNlYXJjaC5SZXN1bHQgPSBTZWFyY2hSZXN1bHQ7XG5TZWFyY2guUmVzdWx0cyA9IFNlYXJjaFJlc3VsdHM7XG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWFyY2gucHJvcFR5cGVzID0ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IGN1c3RvbVByb3BUeXBlcy5hcyxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQmVoYXZpb3JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqIEluaXRpYWwgdmFsdWUgb2Ygb3Blbi4gKi9cbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBJbml0aWFsIHZhbHVlLiAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIFNob3J0aGFuZCBmb3IgSWNvbi4gKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5vYmplY3RdKSxcblxuICAvKiogTWluaW11bSBjaGFyYWN0ZXJzIHRvIHF1ZXJ5IGZvciByZXN1bHRzICovXG4gIG1pbkNoYXJhY3RlcnM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqIEFkZGl0aW9uYWwgdGV4dCBmb3IgXCJObyBSZXN1bHRzXCIgbWVzc2FnZSB3aXRoIGxlc3MgZW1waGFzaXMuICovXG4gIG5vUmVzdWx0c0Rlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBNZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0cy4gKi9cbiAgbm9SZXN1bHRzTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIHJlc3VsdHMgbWVudSBpcyBkaXNwbGF5ZWQuICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPbmUgb2Y6XG4gICAqIC0gYXJyYXkgb2YgU2VhcmNoLlJlc3VsdCBwcm9wcyBlLmcuIGB7IHRpdGxlOiAnJywgZGVzY3JpcHRpb246ICcnIH1gIG9yXG4gICAqIC0gb2JqZWN0IG9mIGNhdGVnb3JpZXMgZS5nLiBgeyBuYW1lOiAnJywgcmVzdWx0czogW3sgdGl0bGU6ICcnLCBkZXNjcmlwdGlvbjogJycgfV1gXG4gICAqL1xuICByZXN1bHRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoU2VhcmNoUmVzdWx0LnByb3BUeXBlcykpLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqIFdoZXRoZXIgdGhlIHNlYXJjaCBzaG91bGQgYXV0b21hdGljYWxseSBzZWxlY3QgdGhlIGZpcnN0IHJlc3VsdCBhZnRlciBzZWFyY2hpbmcuICovXG4gIHNlbGVjdEZpcnN0UmVzdWx0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogV2hldGhlciBhIFwibm8gcmVzdWx0c1wiIG1lc3NhZ2Ugc2hvdWxkIGJlIHNob3duIGlmIG5vIHJlc3VsdHMgYXJlIGZvdW5kLiAqL1xuICBzaG93Tm9SZXN1bHRzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQ3VycmVudCB2YWx1ZSBvZiB0aGUgc2VhcmNoIGlucHV0LiBDcmVhdGVzIGEgY29udHJvbGxlZCBjb21wb25lbnQuICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBSZW5kZXJpbmdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIFNlYXJjaENhdGVnb3J5IGNvbnRlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgLSBUaGUgU2VhcmNoQ2F0ZWdvcnkgcHJvcHMgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7Kn0gLSBSZW5kZXJhYmxlIFNlYXJjaENhdGVnb3J5IGNvbnRlbnRzLlxuICAgKi9cbiAgY2F0ZWdvcnlSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIFNlYXJjaFJlc3VsdCBjb250ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gVGhlIFNlYXJjaFJlc3VsdCBwcm9wcyBvYmplY3QuXG4gICAqIEByZXR1cm5zIHsqfSAtIFJlbmRlcmFibGUgU2VhcmNoUmVzdWx0IGNvbnRlbnRzLlxuICAgKi9cbiAgcmVzdWx0UmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBDYWxsYmFja3NcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBibHVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBtb3VzZWRvd24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgcmVzdWx0IGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25SZXN1bHRTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gc2VhcmNoIGlucHV0IGNoYW5nZS5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBDdXJyZW50IHZhbHVlIG9mIHNlYXJjaCBpbnB1dC5cbiAgICovXG4gIG9uU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU3R5bGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqIEEgc2VhcmNoIGNhbiBoYXZlIGl0cyByZXN1bHRzIGFsaWduZWQgdG8gaXRzIGxlZnQgb3IgcmlnaHQgY29udGFpbmVyIGVkZ2UuICovXG4gIGFsaWduZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEEgc2VhcmNoIGNhbiBkaXNwbGF5IHJlc3VsdHMgZnJvbSByZW1vdGUgY29udGVudCBvcmRlcmVkIGJ5IGNhdGVnb3JpZXMuICovXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQWRkaXRpb25hbCBjbGFzc2VzLiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEEgc2VhcmNoIGNhbiBoYXZlIGl0cyByZXN1bHRzIHRha2UgdXAgdGhlIHdpZHRoIG9mIGl0cyBjb250YWluZXIuICovXG4gIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBzZWFyY2ggaW5wdXQgY2FuIHRha2UgdXAgdGhlIHdpZHRoIG9mIGl0cyBjb250YWluZXIuICovXG4gIGlucHV0OiBjdXN0b21Qcm9wVHlwZXMuaXRlbVNob3J0aGFuZCxcblxuICAvKiogQSBzZWFyY2ggY2FuIHNob3cgYSBsb2FkaW5nIGluZGljYXRvci4gKi9cbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgc2VhcmNoIGNhbiBoYXZlIGRpZmZlcmVudCBzaXplcy4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKF93aXRob3V0KFNVSS5TSVpFUywgJ21lZGl1bScpKVxufSA6IHZvaWQgMDtcblNlYXJjaC5oYW5kbGVkUHJvcHMgPSBbJ2FsaWduZWQnLCAnYXMnLCAnY2F0ZWdvcnknLCAnY2F0ZWdvcnlSZW5kZXJlcicsICdjbGFzc05hbWUnLCAnZGVmYXVsdE9wZW4nLCAnZGVmYXVsdFZhbHVlJywgJ2ZsdWlkJywgJ2ljb24nLCAnaW5wdXQnLCAnbG9hZGluZycsICdtaW5DaGFyYWN0ZXJzJywgJ25vUmVzdWx0c0Rlc2NyaXB0aW9uJywgJ25vUmVzdWx0c01lc3NhZ2UnLCAnb25CbHVyJywgJ29uRm9jdXMnLCAnb25Nb3VzZURvd24nLCAnb25SZXN1bHRTZWxlY3QnLCAnb25TZWFyY2hDaGFuZ2UnLCAnb3BlbicsICdyZXN1bHRSZW5kZXJlcicsICdyZXN1bHRzJywgJ3NlbGVjdEZpcnN0UmVzdWx0JywgJ3Nob3dOb1Jlc3VsdHMnLCAnc2l6ZScsICd2YWx1ZSddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL21vZHVsZXMvU2VhcmNoL1NlYXJjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTM1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF93aXRob3V0IGZyb20gJ2xvZGFzaC93aXRob3V0JztcbmltcG9ydCBfbWFwIGZyb20gJ2xvZGFzaC9tYXAnO1xuaW1wb3J0IF9pc05pbCBmcm9tICdsb2Rhc2gvaXNOaWwnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY3VzdG9tUHJvcFR5cGVzLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIE1FVEEsIFNVSSB9IGZyb20gJy4uLy4uL2xpYic7XG5pbXBvcnQgRmVlZENvbnRlbnQgZnJvbSAnLi9GZWVkQ29udGVudCc7XG5pbXBvcnQgRmVlZERhdGUgZnJvbSAnLi9GZWVkRGF0ZSc7XG5pbXBvcnQgRmVlZEV2ZW50IGZyb20gJy4vRmVlZEV2ZW50JztcbmltcG9ydCBGZWVkRXh0cmEgZnJvbSAnLi9GZWVkRXh0cmEnO1xuaW1wb3J0IEZlZWRMYWJlbCBmcm9tICcuL0ZlZWRMYWJlbCc7XG5pbXBvcnQgRmVlZExpa2UgZnJvbSAnLi9GZWVkTGlrZSc7XG5pbXBvcnQgRmVlZE1ldGEgZnJvbSAnLi9GZWVkTWV0YSc7XG5pbXBvcnQgRmVlZFN1bW1hcnkgZnJvbSAnLi9GZWVkU3VtbWFyeSc7XG5pbXBvcnQgRmVlZFVzZXIgZnJvbSAnLi9GZWVkVXNlcic7XG5cbi8qKlxuICogQSBmZWVkIHByZXNlbnRzIHVzZXIgYWN0aXZpdHkgY2hyb25vbG9naWNhbGx5LlxuICovXG5mdW5jdGlvbiBGZWVkKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZXZlbnRzID0gcHJvcHMuZXZlbnRzLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemU7XG5cblxuICB2YXIgY2xhc3NlcyA9IGN4KCd1aScsIHNpemUsICdmZWVkJywgY2xhc3NOYW1lKTtcbiAgdmFyIHJlc3QgPSBnZXRVbmhhbmRsZWRQcm9wcyhGZWVkLCBwcm9wcyk7XG4gIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKEZlZWQsIHByb3BzKTtcblxuICBpZiAoIV9pc05pbChjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIEVsZW1lbnRUeXBlLFxuICAgICAgX2V4dGVuZHMoe30sIHJlc3QsIHsgY2xhc3NOYW1lOiBjbGFzc2VzIH0pLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG5cbiAgdmFyIGV2ZW50RWxlbWVudHMgPSBfbWFwKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50UHJvcHMpIHtcbiAgICB2YXIgY2hpbGRLZXkgPSBldmVudFByb3BzLmNoaWxkS2V5LFxuICAgICAgICBkYXRlID0gZXZlbnRQcm9wcy5kYXRlLFxuICAgICAgICBtZXRhID0gZXZlbnRQcm9wcy5tZXRhLFxuICAgICAgICBzdW1tYXJ5ID0gZXZlbnRQcm9wcy5zdW1tYXJ5LFxuICAgICAgICBldmVudERhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZXZlbnRQcm9wcywgWydjaGlsZEtleScsICdkYXRlJywgJ21ldGEnLCAnc3VtbWFyeSddKTtcblxuICAgIHZhciBmaW5hbEtleSA9IGNoaWxkS2V5IHx8IFtkYXRlLCBtZXRhLCBzdW1tYXJ5XS5qb2luKCctJyk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGZWVkRXZlbnQsIF9leHRlbmRzKHtcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICBrZXk6IGZpbmFsS2V5LFxuICAgICAgbWV0YTogbWV0YSxcbiAgICAgIHN1bW1hcnk6IHN1bW1hcnlcbiAgICB9LCBldmVudERhdGEpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgRWxlbWVudFR5cGUsXG4gICAgX2V4dGVuZHMoe30sIHJlc3QsIHsgY2xhc3NOYW1lOiBjbGFzc2VzIH0pLFxuICAgIGV2ZW50RWxlbWVudHNcbiAgKTtcbn1cblxuRmVlZC5oYW5kbGVkUHJvcHMgPSBbJ2FzJywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdldmVudHMnLCAnc2l6ZSddO1xuRmVlZC5fbWV0YSA9IHtcbiAgbmFtZTogJ0ZlZWQnLFxuICB0eXBlOiBNRVRBLlRZUEVTLlZJRVdcbn07XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEZlZWQucHJvcFR5cGVzID0ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IGN1c3RvbVByb3BUeXBlcy5hcyxcblxuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBTaG9ydGhhbmQgYXJyYXkgb2YgcHJvcHMgZm9yIEZlZWRFdmVudC4gKi9cbiAgZXZlbnRzOiBjdXN0b21Qcm9wVHlwZXMuY29sbGVjdGlvblNob3J0aGFuZCxcblxuICAvKiogQSBmZWVkIGNhbiBoYXZlIGRpZmZlcmVudCBzaXplcy4gKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKF93aXRob3V0KFNVSS5TSVpFUywgJ21pbmknLCAndGlueScsICdtZWRpdW0nLCAnYmlnJywgJ2h1Z2UnLCAnbWFzc2l2ZScpKVxufSA6IHZvaWQgMDtcblxuRmVlZC5Db250ZW50ID0gRmVlZENvbnRlbnQ7XG5GZWVkLkRhdGUgPSBGZWVkRGF0ZTtcbkZlZWQuRXZlbnQgPSBGZWVkRXZlbnQ7XG5GZWVkLkV4dHJhID0gRmVlZEV4dHJhO1xuRmVlZC5MYWJlbCA9IEZlZWRMYWJlbDtcbkZlZWQuTGlrZSA9IEZlZWRMaWtlO1xuRmVlZC5NZXRhID0gRmVlZE1ldGE7XG5GZWVkLlN1bW1hcnkgPSBGZWVkU3VtbWFyeTtcbkZlZWQuVXNlciA9IEZlZWRVc2VyO1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL3ZpZXdzL0ZlZWQvRmVlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTM2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDU5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9tYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5pbXBvcnQgX2lzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjdXN0b21Qcm9wVHlwZXMsIGdldEVsZW1lbnRUeXBlLCBnZXRVbmhhbmRsZWRQcm9wcywgTUVUQSwgdXNlS2V5T25seSwgdXNlS2V5T3JWYWx1ZUFuZEtleSB9IGZyb20gJy4uLy4uL2xpYic7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG4vKipcbiAqIEEgZ3JvdXAgb2YgaXRlbXMuXG4gKi9cbmZ1bmN0aW9uIEl0ZW1Hcm91cChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGRpdmlkZWQgPSBwcm9wcy5kaXZpZGVkLFxuICAgICAgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIGxpbmsgPSBwcm9wcy5saW5rLFxuICAgICAgcmVsYXhlZCA9IHByb3BzLnJlbGF4ZWQ7XG5cblxuICB2YXIgY2xhc3NlcyA9IGN4KCd1aScsIHVzZUtleU9ubHkoZGl2aWRlZCwgJ2RpdmlkZWQnKSwgdXNlS2V5T25seShsaW5rLCAnbGluaycpLCB1c2VLZXlPclZhbHVlQW5kS2V5KHJlbGF4ZWQsICdyZWxheGVkJyksICdpdGVtcycsIGNsYXNzTmFtZSk7XG4gIHZhciByZXN0ID0gZ2V0VW5oYW5kbGVkUHJvcHMoSXRlbUdyb3VwLCBwcm9wcyk7XG4gIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKEl0ZW1Hcm91cCwgcHJvcHMpO1xuXG4gIGlmICghX2lzTmlsKGNoaWxkcmVuKSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgRWxlbWVudFR5cGUsXG4gICAgICBfZXh0ZW5kcyh7fSwgcmVzdCwgeyBjbGFzc05hbWU6IGNsYXNzZXMgfSksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cblxuICB2YXIgaXRlbXNKU1ggPSBfbWFwKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBjaGlsZEtleSA9IGl0ZW0uY2hpbGRLZXksXG4gICAgICAgIGl0ZW1Qcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhpdGVtLCBbJ2NoaWxkS2V5J10pO1xuXG4gICAgdmFyIGZpbmFsS2V5ID0gY2hpbGRLZXkgfHwgW2l0ZW1Qcm9wcy5jb250ZW50LCBpdGVtUHJvcHMuZGVzY3JpcHRpb24sIGl0ZW1Qcm9wcy5oZWFkZXIsIGl0ZW1Qcm9wcy5tZXRhXS5qb2luKCctJyk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJdGVtLCBfZXh0ZW5kcyh7fSwgaXRlbVByb3BzLCB7IGtleTogZmluYWxLZXkgfSkpO1xuICB9KTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBFbGVtZW50VHlwZSxcbiAgICBfZXh0ZW5kcyh7fSwgcmVzdCwgeyBjbGFzc05hbWU6IGNsYXNzZXMgfSksXG4gICAgaXRlbXNKU1hcbiAgKTtcbn1cblxuSXRlbUdyb3VwLmhhbmRsZWRQcm9wcyA9IFsnYXMnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2RpdmlkZWQnLCAnaXRlbXMnLCAnbGluaycsICdyZWxheGVkJ107XG5JdGVtR3JvdXAuX21ldGEgPSB7XG4gIG5hbWU6ICdJdGVtR3JvdXAnLFxuICB0eXBlOiBNRVRBLlRZUEVTLlZJRVcsXG4gIHBhcmVudDogJ0l0ZW0nXG59O1xuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJdGVtR3JvdXAucHJvcFR5cGVzID0ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IGN1c3RvbVByb3BUeXBlcy5hcyxcblxuICAvKiogUHJpbWFyeSBjb250ZW50LiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3Nlcy4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBJdGVtcyBjYW4gYmUgZGl2aWRlZCB0byBiZXR0ZXIgZGlzdGluZ3Vpc2ggYmV0d2VlbiBncm91cGVkIGNvbnRlbnQuICovXG4gIGRpdmlkZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBTaG9ydGhhbmQgYXJyYXkgb2YgcHJvcHMgZm9yIEl0ZW0uICovXG4gIGl0ZW1zOiBjdXN0b21Qcm9wVHlwZXMuY29sbGVjdGlvblNob3J0aGFuZCxcblxuICAvKiogQW4gaXRlbSBjYW4gYmUgZm9ybWF0dGVkIHNvIHRoYXQgdGhlIGVudGlyZSBjb250ZW50cyBsaW5rIHRvIGFub3RoZXIgcGFnZS4gKi9cbiAgbGluazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZ3JvdXAgb2YgaXRlbXMgY2FuIHJlbGF4IGl0cyBwYWRkaW5nIHRvIHByb3ZpZGUgbW9yZSBuZWdhdGl2ZSBzcGFjZS4gKi9cbiAgcmVsYXhlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vbmVPZihbJ3ZlcnknXSldKVxufSA6IHZvaWQgMDtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbUdyb3VwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL3ZpZXdzL0l0ZW0vSXRlbUdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSA5Njdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==