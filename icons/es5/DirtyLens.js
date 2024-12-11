function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgDirtyLens = function SvgDirtyLens(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 5h-5.17L15 3H9L7.17 5H2v16h20V5zm-5.34 11.58c-1.14 1.86-3-1.03-3.81.09-.39.57-.09 1.49.13 2.33 0 .47-.38.85-.85.85s-.86-.38-.86-.85c.14-.98.42-2.05-.16-2.43-.89-.59-1.27 2.06-2.8 1.35-1.39-1.12 1.05-1.29.5-3.27-.22-.79-2.28.36-2.4-1.24-.08-1 1.49-.74 1.51-1.49.03-.75-1.03-1.05-.25-1.91.22-.24.71-.26.91-.19.79.27 1.55 1.82 2.51 1.19 1.03-.66-1.88-2.35 0-2.86 1.64-.44 1.31 2.08 2.65 2.44 1.94.52 2.65-4.55 4.41-2.33 1.85 2.33-3.43 2.27-2.85 4.01.34 1.01 2.15-1.2 2.76.53.64 1.83-3.09.82-3.04 1.66.06.83 2.41.55 1.64 2.12zm1.48 1.43c-.47 0-.86-.38-.86-.86s.38-.86.86-.86c.47 0 .86.38.86.86s-.38.86-.86.86z",
    fill: "currentColor"
  }));
};
export default SvgDirtyLens;