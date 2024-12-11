function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgAssistWalker = function SvgAssistWalker(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12.5,
    cy: 4.5,
    r: 2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.77 17.72 19 10h-3c-1.5-.02-2.86-.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-.51 0-1.02.2-1.41.59l-4.2 4.17 2.08 4.07-3.15 4.05 1.57 1.24 3.68-4.73-.17-1.36.77.72V20h2v-6.12l-2.12-2.12 2.36-2.36c.94.94 1.72 1.82 3.59 2.32L13 20h1.5l.41-3.5h3.18l.14 1.22c-.44.26-.73.74-.73 1.28 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.54-.29-1.02-.73-1.28zM15.09 15l.41-3.5h2l.41 3.5h-2.82z",
    fill: "currentColor"
  }));
};
export default SvgAssistWalker;