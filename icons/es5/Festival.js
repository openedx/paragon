function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgFestival = function SvgFestival(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 11V9c-6-2-11-7-11-7S7 7 1 9v2c0 1.49.93 2.75 2.24 3.26C3.2 16.76 2.92 19.69 2 22h20c-.92-2.31-1.2-5.24-1.24-7.74A3.496 3.496 0 0 0 23 11zM12 4.71c1.33 1.14 3.49 2.84 6.11 4.29H5.89C8.51 7.55 10.67 5.85 12 4.71zM13 11h3c0 .83-.67 1.5-1.5 1.5S13 11.83 13 11zm-3.5 1.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zM6 11c0 .83-.67 1.5-1.5 1.5S3 11.83 3 11h3zm-1.34 9c.39-1.86.54-3.82.57-5.58.68-.15 1.29-.49 1.76-.98.25.25.54.45.85.62-.1 1.87-.26 4-.52 5.93H4.66zm4.69 0c.24-1.83.39-3.78.48-5.53.84-.08 1.61-.45 2.17-1.02.56.57 1.32.94 2.17 1.02.1 1.75.24 3.7.48 5.53h-5.3zm7.32 0c-.27-1.94-.43-4.07-.52-5.93.31-.17.61-.37.85-.62.47.48 1.08.83 1.76.98.03 1.76.18 3.72.57 5.58h-2.66zm2.83-7.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5z",
    fill: "currentColor"
  }));
};
export default SvgFestival;