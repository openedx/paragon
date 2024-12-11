function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgSportsBasketball = function SvgSportsBasketball(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.09 11h4.86a9.951 9.951 0 0 0-1.54-4.4 5.987 5.987 0 0 0-3.32 4.4zM6.91 11a5.987 5.987 0 0 0-3.32-4.4A9.951 9.951 0 0 0 2.05 11h4.86zm8.16 0a7.994 7.994 0 0 1 4.06-6A9.969 9.969 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 0 0 4.87 5a7.994 7.994 0 0 1 4.06 6zm6.14 2H13v8.95A9.943 9.943 0 0 0 19.13 19a7.994 7.994 0 0 1-4.06-6zM3.59 17.4A6.029 6.029 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 0 0 3.32 4.4 9.951 9.951 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 0 1-4.06 6A9.969 9.969 0 0 0 11 21.95V13H8.93z",
    fill: "currentColor"
  }));
};
export default SvgSportsBasketball;