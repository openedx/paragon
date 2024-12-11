function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgUpdateDisabled = function SvgUpdateDisabled(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.67 5.84 7.22 4.39A8.86 8.86 0 0 1 12 3c2.74 0 5.19 1.23 6.84 3.16L21 4v6h-6l2.41-2.41C16.12 6.02 14.18 5 12 5c-1.2 0-2.34.31-3.33.84zM13 7h-2v1.17l2 2V7zm6.78 15.61-3-3A8.973 8.973 0 0 1 12 21a9 9 0 0 1-9-9c0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67A7.06 7.06 0 0 0 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85zM20.94 13h-2.02c-.12.83-.39 1.61-.77 2.32l1.47 1.47c.7-1.12 1.17-2.41 1.32-3.79z",
    fill: "currentColor"
  }));
};
export default SvgUpdateDisabled;