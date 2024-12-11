function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgSportsBaseball = function SvgSportsBaseball(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28zm16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 12c0-3.28 1.97-6.09 4.79-7.33C17.01 3.02 14.63 2 12 2S6.99 3.02 5.21 4.67C8.03 5.91 10 8.72 10 12s-1.97 6.09-4.79 7.33C6.99 20.98 9.37 22 12 22s5.01-1.02 6.79-2.67A8.002 8.002 0 0 1 14 12z",
    fill: "currentColor"
  }));
};
export default SvgSportsBaseball;