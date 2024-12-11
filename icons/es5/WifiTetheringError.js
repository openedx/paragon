function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgWifiTetheringError = function SvgWifiTetheringError(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 7c-3.31 0-6 2.69-6 6 0 1.66.68 3.15 1.76 4.24l1.42-1.42A3.934 3.934 0 0 1 8 13c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.1-1.18 2.82l1.42 1.42A6.003 6.003 0 0 0 18 13c0-3.31-2.69-6-6-6zm0-4C6.48 3 2 7.48 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42A7.94 7.94 0 0 1 4 13c0-4.42 3.58-8 8-8 2.53 0 4.78 1.17 6.24 3h2.42C18.93 5.01 15.7 3 12 3zm0 8c-1.1 0-2 .9-2 2 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59s1.05-.23 1.41-.59c.36-.36.59-.86.59-1.41 0-1.1-.9-2-2-2zm8-1h2v6h-2v-6zm0 8h2v2h-2v-2z",
    fill: "currentColor"
  }));
};
export default SvgWifiTetheringError;