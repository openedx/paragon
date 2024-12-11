function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgOnlinePrediction = function SvgOnlinePrediction(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06A8.481 8.481 0 0 1 20.5 12c0 2.34-.95 4.47-2.49 6.01l1.06 1.06A9.969 9.969 0 0 0 22 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93A9.969 9.969 0 0 0 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06A8.481 8.481 0 0 1 3.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06A6.976 6.976 0 0 0 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05A6.976 6.976 0 0 0 5 12c0 1.93.78 3.68 2.05 4.95z",
    fill: "currentColor"
  }));
};
export default SvgOnlinePrediction;