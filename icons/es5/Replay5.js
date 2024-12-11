function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgReplay5 = function SvgReplay5(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.31 8.9.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15a.49.49 0 0 0 .45-.23c.04-.07.08-.15.11-.25s.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z",
    fill: "currentColor"
  }));
};
export default SvgReplay5;