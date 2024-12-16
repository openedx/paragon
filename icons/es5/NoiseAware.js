function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgNoiseAware = function SvgNoiseAware(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.33l1.43-1.43A7.941 7.941 0 0 1 4.07 13zm1.62-5.9L4.26 5.67A10.013 10.013 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM11 4.07V2.05c-2.01.2-3.84 1-5.33 2.21L7.1 5.69A7.941 7.941 0 0 1 11 4.07zm7.33.19A10.013 10.013 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.43-1.43zm-.02 12.64 1.43 1.43A9.98 9.98 0 0 0 21.95 13h-2.02a7.941 7.941 0 0 1-1.62 3.9zm1.62-5.9h2.02c-.2-2.01-1-3.84-2.21-5.33L18.31 7.1a7.941 7.941 0 0 1 1.62 3.9zM13 19.93v2.02c2.01-.2 3.84-1 5.33-2.21l-1.43-1.43a7.941 7.941 0 0 1-3.9 1.62zm-7.33-.19A9.98 9.98 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.43 1.43z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 5,
    fill: "currentColor"
  }));
};
export default SvgNoiseAware;