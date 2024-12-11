function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgHistoryToggleOff = function SvgHistoryToggleOff(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m15.1 19.37 1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56zM4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1zM15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56zM19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1zM8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56zM11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56zm7.36 3.1 1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54zM4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1zm15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1h-2.02zm-3.1 5.36 1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54zM7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54zM5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53zM13 7h-2v5.41l4.29 4.29 1.41-1.41-3.7-3.7V7z",
    fill: "currentColor"
  }));
};
export default SvgHistoryToggleOff;