function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgCompost = function SvgCompost(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.87 11.81A2.5 2.5 0 0 1 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77A6.505 6.505 0 0 0 18.5 12h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5V0l4 4-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.35.3-.8.48-1.3.48-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51 0 0 4.45-.23 4.5 2.5 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81z",
    fill: "currentColor"
  }));
};
export default SvgCompost;