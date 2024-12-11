function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgWebhook = function SvgWebhook(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 15h5.88c.27-.31.67-.5 1.12-.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9A5 5 0 1 1 6 11.1v2.07c-1.16.41-2 1.53-2 2.83 0 1.65 1.35 3 3 3s3-1.35 3-3v-1zm2.5-11c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5a5.002 5.002 0 0 0-3.45 8.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48 0 .83.67 1.5 1.5 1.5a1.498 1.498 0 0 0 1.43-1.95l3.38-5.63A3.003 3.003 0 0 1 9.5 7c0-1.65 1.35-3 3-3zm4.5 9c-.64 0-1.23.2-1.72.54l-3.05-5.07C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08 2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 0 1-4.33-2.5h2.67c.48.32 1.05.5 1.66.5 1.65 0 3-1.35 3-3s-1.35-3-3-3z",
    fill: "currentColor"
  }));
};
export default SvgWebhook;