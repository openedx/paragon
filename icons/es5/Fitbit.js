function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgFitbit = function SvgFitbit(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19.89 13.89c1.04 0 1.89-.85 1.89-1.89s-.85-1.89-1.89-1.89S18 10.96 18 12s.85 1.89 1.89 1.89zm-4.24-.21c.93 0 1.68-.75 1.68-1.68s-.75-1.68-1.68-1.68c-.93 0-1.68.75-1.68 1.68s.75 1.68 1.68 1.68zm0-4.26c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .93.75 1.68 1.68 1.68zm0 8.51c.93 0 1.68-.75 1.68-1.68 0-.93-.75-1.68-1.68-1.68-.93 0-1.68.75-1.68 1.68 0 .92.75 1.68 1.68 1.68zm-4.24-4.46c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0-4.26c.81 0 1.47-.66 1.47-1.47s-.66-1.47-1.47-1.47c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm0 8.52c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0 4.27c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47-.81 0-1.47.66-1.47 1.47-.01.81.65 1.47 1.47 1.47zm0-17.06c.81 0 1.47-.66 1.47-1.47S12.22 2 11.41 2c-.81 0-1.47.66-1.47 1.47s.65 1.47 1.47 1.47zm-4.25 8.32c.7 0 1.26-.57 1.26-1.26s-.57-1.26-1.26-1.26a1.261 1.261 0 0 0 0 2.52zm0 4.25a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm0-8.49a1.261 1.261 0 0 0 0-2.52 1.261 1.261 0 0 0 0 2.52zm-3.87 4.03a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1z",
    fill: "currentColor"
  }));
};
export default SvgFitbit;