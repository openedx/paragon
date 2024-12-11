function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgAgriculture = function SvgAgriculture(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 12c.93 0 1.78.28 2.5.76V8c0-1.1-.9-2-2-2h-6.29l-1.06-1.06 1.41-1.41-.71-.71-3.53 3.53.71.71 1.41-1.41L13 6.71V9c0 1.1-.9 2-2 2h-.54A5.98 5.98 0 0 1 12 15c0 .34-.04.67-.09 1h3.14c.25-2.25 2.14-4 4.45-4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM4 9h5c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1s.45 1 1 1zm5.83 4.82-.18-.47.93-.35a4.92 4.92 0 0 0-2.31-2.43l-.4.89-.46-.21.4-.9C7.26 10.13 6.64 10 6 10c-.53 0-1.04.11-1.52.26l.34.91-.47.18-.35-.93a4.92 4.92 0 0 0-2.43 2.31l.89.4-.21.46-.9-.4C1.13 13.74 1 14.36 1 15c0 .53.11 1.04.26 1.52l.91-.34.18.47-.93.35a4.92 4.92 0 0 0 2.31 2.43l.4-.89.46.21-.4.9c.55.22 1.17.35 1.81.35.53 0 1.04-.11 1.52-.26l-.34-.91.47-.18.35.93a4.92 4.92 0 0 0 2.43-2.31l-.89-.4.21-.46.9.4c.22-.55.35-1.17.35-1.81 0-.53-.11-1.04-.26-1.52l-.91.34zm-2.68 3.95c-1.53.63-3.29-.09-3.92-1.62-.63-1.53.09-3.29 1.62-3.92 1.53-.63 3.29.09 3.92 1.62.64 1.53-.09 3.29-1.62 3.92z",
    fill: "currentColor"
  }));
};
export default SvgAgriculture;