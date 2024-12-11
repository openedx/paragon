function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgVoiceOverOff = function SvgVoiceOverOff(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m16.76 5.36-1.68 1.69c.8 1.13.83 2.58.09 3.74l1.7 1.7c1.9-2.02 1.87-4.98-.11-7.13zM20.07 2l-1.63 1.63c2.72 2.97 2.76 7.39.14 10.56l1.64 1.64c3.74-3.89 3.71-9.84-.15-13.83zM9.43 5.04l3.53 3.53a3.979 3.979 0 0 0-3.53-3.53zM4.41 2.86 3 4.27l2.62 2.62C5.23 7.5 5 8.22 5 9c0 2.21 1.79 4 4 4 .78 0 1.5-.23 2.11-.62l4.4 4.4C13.74 15.6 10.78 15 9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-.37-.11-.7-.29-1.02L19.73 21l1.41-1.41L4.41 2.86z",
    fill: "currentColor"
  }));
};
export default SvgVoiceOverOff;