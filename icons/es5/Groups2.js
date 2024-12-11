function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgGroups2 = function SvgGroups2(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10.27 12h3.46a1.5 1.5 0 0 0 1.48-1.75l-.3-1.79a2.951 2.951 0 0 0-5.82.01l-.3 1.79c-.15.91.55 1.74 1.48 1.74zm-8.61-.89c-.13.26-.18.57-.1.88.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29 0-.14-.03-.27-.07-.4-.01-.03-.01-.05.01-.08.09-.16.14-.34.14-.53 0-.31-.14-.6-.36-.82-.03-.03-.03-.06-.02-.1.07-.2.07-.43.01-.65a1.12 1.12 0 0 0-.99-.74.09.09 0 0 1-.07-.03C5.03 8.14 4.72 8 4.37 8c-.3 0-.57.1-.75.26-.03.03-.06.03-.09.02a1.24 1.24 0 0 0-1.7 1.03c0 .02-.01.04-.03.06-.29.26-.46.65-.41 1.05.03.22.12.43.25.6.03.02.03.06.02.09zm14.58 2.54c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 0 0 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zm-15.02.93A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zm21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06 0 1.1.9 2 2 2s2-.9 2-2z",
    fill: "currentColor"
  }));
};
export default SvgGroups2;