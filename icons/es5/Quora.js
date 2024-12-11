function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgQuora = function SvgQuora(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.94 17.46h-1.11c-.06.52-.4 1.17-1.25 1.17-.78 0-1.34-.54-1.88-1.36a7.233 7.233 0 0 0 2.84-5.81C19.54 7 15.86 4 12.01 4 8.21 4 4.5 7.03 4.5 11.47c0 4.4 3.71 7.43 7.51 7.43.66 0 1.32-.09 1.95-.26.74 1.27 1.73 2.36 3.6 2.36 3.1 0 3.45-2.86 3.38-3.54zm-5.45-2.18c-.73-1.11-1.66-1.98-3.46-1.98-1.16 0-2.06.38-2.62.86l.46.92c.24-.11.49-.15.75-.15 1.35 0 2.04 1.17 2.63 2.33-.38.11-.79.16-1.24.16-2.85 0-4.08-2.01-4.08-5.95 0-3.96 1.23-5.99 4.08-5.99 2.89 0 4.13 2.03 4.13 5.99-.01 1.58-.21 2.86-.65 3.81z",
    fill: "currentColor"
  }));
};
export default SvgQuora;