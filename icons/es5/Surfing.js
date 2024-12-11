function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgSurfing = function SvgSurfing(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2h-1zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.72-4.24 3.12-2.1-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55A5.007 5.007 0 0 0 20.5 10v2a7.01 7.01 0 0 1-6.07-3.52zM10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14l-3.7-2.9z",
    fill: "currentColor"
  }));
};
export default SvgSurfing;