function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgLmsEditSquareComplete = function SvgLmsEditSquareComplete(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m20.047 2.57 1.375 1.376c.77.761.77 2 0 2.76l-1.034 1.035-4.136-4.136 1.034-1.034c.76-.761 2-.761 2.76 0ZM13 18v-.1l6.559-6.56v8.711a1.957 1.957 0 0 1-1.951 1.951h-5.864A6.967 6.967 0 0 0 13 18Zm-6.895-7 6.557-6.557H3.951A1.957 1.957 0 0 0 2 6.394v5.86a6.968 6.968 0 0 1 4.105-1.253Zm2.327.434a7.02 7.02 0 0 1 4.135 4.137l6.446-6.445-4.137-4.136-6.444 6.444ZM0 18c0-3.312 2.688-6 6-6s6 2.688 6 6-2.688 6-6 6-6-2.688-6-6Zm1.8 0 3 3 5.4-5.4-.846-.852L4.8 19.302l-2.154-2.148L1.8 18Z",
    fill: "currentColor"
  }));
};
export default SvgLmsEditSquareComplete;