function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgCrueltyFree = function SvgCrueltyFree(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.84 14.52c-.26-.19-.62-.63-.79-.84C17.24 12.01 19 8.87 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.87 1.76 7.01 2.95 8.68-.17.21-.53.65-.79.84-.5.41-1.66 1.37-1.66 2.98 0 2.21 1.79 4 4 4 1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4 0-1.61-1.16-2.57-1.66-2.98zM9.35 12.2C8.34 10.7 7 8.12 7 5c0-.49.06-.8.12-.97.94.31 3.24 2.71 3.38 7.64-.47.12-.84.3-1.15.53zm1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75zM12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5 1 .22 1 .5-.45 1-1 1zm1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75zm0-5.08c.14-4.93 2.44-7.33 3.38-7.64.06.17.12.48.12.97 0 3.12-1.34 5.7-2.35 7.2-.31-.23-.68-.41-1.15-.53z",
    fill: "currentColor"
  }));
};
export default SvgCrueltyFree;