function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgFace2 = function SvgFace2(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.97 13.52v-.04C23.21 12.38 24 10.78 24 9c0-3.31-2.69-6-6-6-.26 0-.52.02-.78.06a5.98 5.98 0 0 0-10.44 0C6.52 3.02 6.26 3 6 3 2.69 3 0 5.69 0 9c0 1.78.79 3.38 2.02 4.48v.04A6.008 6.008 0 0 0 0 18c0 3.31 2.69 6 6 6 1.39 0 2.67-.48 3.69-1.28.74.18 1.51.28 2.31.28s1.57-.1 2.31-.28c1.02.8 2.3 1.28 3.69 1.28 3.31 0 6-2.69 6-6 0-1.78-.79-3.38-2.03-4.48zM12 21c-4.41 0-8-3.59-8-8 0-3.72 2.56-6.85 6-7.74v.05c0 3.34 2.72 6.06 6.06 6.06 1.26 0 2.45-.39 3.45-1.09.31.86.49 1.77.49 2.72 0 4.41-3.59 8-8 8z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 14,
    r: 1.25,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 14,
    r: 1.25,
    fill: "currentColor"
  }));
};
export default SvgFace2;