function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgWifiTetheringOff = function SvgWifiTetheringOff(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.81 2.81 1.39 4.22l2.69 2.69A9.958 9.958 0 0 0 2 13c0 2.76 1.12 5.26 2.93 7.07l1.42-1.42a7.957 7.957 0 0 1-.84-10.31l1.43 1.43a6.003 6.003 0 0 0 .82 7.47l1.42-1.42A3.934 3.934 0 0 1 8 13c0-.63.15-1.23.41-1.76l1.61 1.61c0 .05-.02.1-.02.15 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59.05 0 .1-.01.16-.02l7.62 7.62 1.41-1.41L2.81 2.81zM17.7 14.87c.19-.59.3-1.22.3-1.87 0-3.31-2.69-6-6-6-.65 0-1.28.1-1.87.3l1.71 1.71C11.89 9 11.95 9 12 9c2.21 0 4 1.79 4 4 0 .05 0 .11-.01.16l1.71 1.71zM12 5c4.42 0 8 3.58 8 8 0 1.22-.27 2.37-.77 3.4l1.49 1.49A9.953 9.953 0 0 0 22 13c0-5.52-4.48-10-10-10-1.78 0-3.44.46-4.89 1.28l1.48 1.48C9.63 5.27 10.78 5 12 5z",
    fill: "currentColor"
  }));
};
export default SvgWifiTetheringOff;