function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgVerifiedOutline = function SvgVerifiedOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m7.77 11.42 2.32 2.33 5.86-5.88 1.48 1.49-7.34 7.36-3.8-3.81 1.48-1.49Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.56 9.2 23 11.99l-2.44 2.8.34 3.69-3.61.82-1.89 3.19-3.4-1.46-3.4 1.47-1.89-3.2-3.61-.82.34-3.7L1 11.99 3.44 9.2 3.1 5.5l3.61-.81L8.6 1.5 12 2.96l3.4-1.46 1.89 3.19 3.61.82-.34 3.69Zm-2.07 4.92.56-.65 1.28-1.48-1.29-1.47-.56-.65.08-.85.18-1.95L16 6.45l-.44-.74-.99-1.68-1.78.77-.79.34-.8-.34-1.78-.77-.99 1.68-.44.74-2.74.62.18 1.94.09.86-.56.65L3.67 12l1.29 1.47.56.65-.08.85-.18 1.96 2.74.62.44.74.99 1.67 1.78-.77.79-.34.8.34 1.78.77.99-1.68.44-.74 2.74-.62-.18-1.95-.08-.85Z",
    fill: "currentColor"
  }));
};
export default SvgVerifiedOutline;