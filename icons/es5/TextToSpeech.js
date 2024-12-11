function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgTextToSpeech = function SvgTextToSpeech(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 22c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 0 1 2 20.5v-17c0-.417.146-.77.438-1.063A1.447 1.447 0 0 1 3.5 2H13l-1.5 1.5h-8v17h12V17H17v3.5c0 .417-.146.77-.438 1.063A1.446 1.446 0 0 1 15.5 22h-12ZM6 17.75v-1.5h7v1.5H6Zm0-3v-1.5h5v1.5H6Zm9.5.25-4-4H8V6h3.5l4-4v13Zm1.5-2.3V4.05c.933.35 1.667.967 2.2 1.85.533.883.8 1.75.8 2.6 0 .85-.292 1.692-.875 2.525S17.833 12.417 17 12.7Zm0 3.55V14.7c1.167-.417 2.208-1.167 3.125-2.25.917-1.083 1.375-2.4 1.375-3.95 0-1.55-.458-2.867-1.375-3.95C19.208 3.467 18.167 2.717 17 2.3V.75c1.7.45 3.125 1.388 4.275 2.813C22.425 4.986 23 6.633 23 8.5c0 1.867-.575 3.512-1.725 4.938C20.125 14.863 18.7 15.8 17 16.25Z",
    fill: "currentColor"
  }));
};
export default SvgTextToSpeech;