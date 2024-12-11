function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgFaceRetouchingOff = function SvgFaceRetouchingOff(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 13,
    r: 1.25,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49A9.981 9.981 0 0 0 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39zM1.89 3.72l2.19 2.19A9.958 9.958 0 0 0 2 12c0 5.52 4.48 10 10 10 2.29 0 4.4-.78 6.09-2.08l2.19 2.19 1.41-1.41L3.31 2.31 1.89 3.72zm14.77 14.77A7.91 7.91 0 0 1 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14a9.946 9.946 0 0 0 3.64-2.39l9.02 9.02z",
    fill: "currentColor"
  }));
};
export default SvgFaceRetouchingOff;