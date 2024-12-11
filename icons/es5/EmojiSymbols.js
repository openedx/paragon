function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgEmojiSymbols = function SvgEmojiSymbols(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.404 9.182 7.778-7.778 1.414 1.414-7.778 7.778z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14.5,
    cy: 14.5,
    r: 1.5,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19.5,
    cy: 19.5,
    r: 1.5,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 11A2.5 2.5 0 0 0 18 8.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5zm-5.76 4.96-1.41 1.41-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06 1.41 1.41 1.41-1.41-1.41-1.41 1.41-1.41-1.41-1.43zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.501.501 0 0 1 0-.7zm0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15a.513.513 0 0 1 0-.71l1.06-1.06.71.71-1.07 1.06z",
    fill: "currentColor"
  }));
};
export default SvgEmojiSymbols;