function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgSnapchat = function SvgSnapchat(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.07 16.17c-.34-.93-2.4-1.06-3.36-3.19-.06-.16-.05-.27.11-.37.74-.49 1.26-.76 1.56-1.33.22-.41.25-.89.08-1.33-.23-.61-.81-1-1.52-1-.25 0-.45.05-.55.07.01-.42 0-.86-.04-1.3-.13-1.53-.67-2.34-1.23-2.98C15.79 4.37 14.48 3 12 3 9.52 3 8.21 4.37 7.88 4.74c-.56.64-1.1 1.45-1.23 2.98-.03.44-.04.88-.04 1.3-.11-.03-.3-.07-.55-.07-.7 0-1.29.38-1.52 1-.17.43-.14.92.08 1.33.31.58.82.84 1.56 1.33.16.11.17.21.11.37-.97 2.13-3.02 2.26-3.36 3.19-.15.4-.05.85.32 1.23.57.59 1.63.77 1.84.91.17.14.15.56.63.9.38.26.8.28 1.25.29 1.31.05 1.6.27 2.1.58.63.39 1.49.92 2.93.92 1.44 0 2.3-.53 2.93-.92.5-.31.79-.53 2.1-.58.45-.02.87-.03 1.25-.29.49-.34.47-.76.63-.9.21-.14 1.27-.32 1.84-.91.37-.38.47-.83.32-1.23zm-1.03.53c-.37.39-1.26.5-1.73.82-.48.42-.4.74-.59.87-.13.09-.36.1-.72.12-1.4.05-1.91.31-2.52.69-1.43.88-2.23.8-2.48.8s-1.05.08-2.47-.81c-.61-.38-1.11-.63-2.52-.69-.36-.01-.59-.03-.72-.12-.19-.13-.12-.45-.59-.87-.48-.32-1.36-.43-1.73-.82-.06-.06-.11-.14-.12-.15.07-.1.41-.3.66-.44.78-.46 1.98-1.14 2.71-2.75.26-.7.03-1.26-.48-1.59-1.15-.73-1.13-.76-1.24-.96a.62.62 0 0 1-.03-.5c.12-.32.45-.35.58-.35.19 0 .18.01 1.57.37-.02-1.4-.04-1.85.02-2.51.11-1.31.57-1.93.98-2.4C8.9 5.11 9.99 3.98 12 4c2.01-.02 3.1 1.11 3.37 1.41.41.47.87 1.09.98 2.4.06.66.04 1.11.02 2.51 1.4-.36 1.38-.37 1.57-.37.14 0 .46.03.58.35.07.17.06.35-.03.5-.11.2-.09.22-1.23.97-.51.33-.74.89-.48 1.59.73 1.61 1.93 2.29 2.71 2.75.25.15.59.34.66.44 0 .01-.06.09-.11.15z",
    fill: "currentColor"
  }));
};
export default SvgSnapchat;