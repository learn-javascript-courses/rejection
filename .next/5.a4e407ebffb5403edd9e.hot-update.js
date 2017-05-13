webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpc3RvcnkuanM/ZDcxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtNQUFHO01BQVM7TUFBYztNQUFjO2lCQUM3QyxTQUFTLG9CQUNiLDRDQUFXLE9BQ1gsZ0VBQ0UsK0RBQVEsU0FBUixNQUFnQixTQUFTLFNBQVMsT0FBbEMsTUFBd0MsTUFBTSxVQUFVLFNBQ3JELGdCQUVILHNEQUNDLGVBQVEsSUFBSTtXQUNYLHVEQUFNLFVBQU4sTUFBZSxLQUFLLEtBQUssSUFBSSxPQUFPLEtBQUssV0FBVyxhQUFhLFFBQy9ELCtEQUFNLFFBQU4sTUFBOEIseUJBQzlCLDREQUFNLE1BQU4sTUFBa0IsZ0NBQU8sS0FBSyxNQUFNLE9BQU8sU0FDM0MsMERBQU0sYUFBTixNQUErQixxQkFDL0IsNkRBQU0sV0FBUSxPQUFPLGFBQ3JCO2FBRUU7WUFDQTthQUFPLEtBQUssV0FBVyxhQUFhLFFBQ3BDO2VBQVM7ZUFBTSxrQkFBa0IsS0FBSztBQUVyQztBQUxELE9BREY7QUFOSCxLQU5ILENBREosR0F5QkkscUNBMUJTIiwiZmlsZSI6IjUuYTRlNDA3ZWJmZmI1NDAzZWRkOWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBTZWdtZW50LCBDYXJkLCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgaGlzdG9yeSwgY2xlYXJIaXN0b3J5LCBhZGRUb0hpc3RvcnksIGRlbGV0ZUZyb21IaXN0b3J5IH0pID0+XG4gIGhpc3RvcnkubGVuZ3RoID4gMFxuICAgID8gPENvbnRhaW5lciBmbHVpZD5cbiAgICAgIDxTZWdtZW50PlxuICAgICAgICA8QnV0dG9uIGNvbXBhY3QgZmxvYXRlZD17J3JpZ2h0J30gYmFzaWMgdHlwZT17J2J1dHRvbid9IG9uQ2xpY2s9e2NsZWFySGlzdG9yeX0+XG4gICAgICAgICAgeydDbGVhciBIaXN0b3J5J31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7aGlzdG9yeS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPENhcmQgY2VudGVyZWQga2V5PXtpdGVtLmlkfSBjb2xvcj17aXRlbS5yZXN1bHQgPT09ICdSRUpFQ1RFRCcgPyAncmVkJyA6ICdncmVlbid9PlxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPllvdSBBc2tlZCBGb3IgOiB7aXRlbS5hc2tlZH08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgPENhcmQuTWV0YT5EYXRlOiB7bW9tZW50KGl0ZW0udGltZSkuZm9ybWF0KCdMTExMJyl9IDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPENhcmQuRGVzY3JpcHRpb24+WW91IEFza2VkIDoge2l0ZW0ucGVyc29ufTwvQ2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+e2l0ZW0ucmVzdWx0fTwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBiYXNpY1xuICAgICAgICAgICAgICB0eXBlPXsnYnV0dG9uJ31cbiAgICAgICAgICAgICAgY29sb3I9e2l0ZW0ucmVzdWx0ID09PSAnUkVKRUNURUQnID8gJ3JlZCcgOiAnZ3JlZW4nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tSGlzdG9yeShpdGVtLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeydEZWxldGUgRnJvbSBIaXN0b3J5J31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvU2VnbWVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA6IDxkaXYgLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hpc3RvcnkuanMiXSwic291cmNlUm9vdCI6IiJ9