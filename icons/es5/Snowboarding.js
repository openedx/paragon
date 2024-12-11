function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgSnowboarding = function SvgSnowboarding(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.4 17.09a.748.748 0 0 0-.64.17c-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89A6.507 6.507 0 0 0 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35L8.5 11.7l1 4.3L6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67a.744.744 0 0 0-.51-.42c-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89zM8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64-6.17-1.31z",
    fill: "currentColor"
  }));
};
export default SvgSnowboarding;