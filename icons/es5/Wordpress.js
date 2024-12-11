function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgWordpress = function SvgWordpress(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zM3.01 12c0-1.3.28-2.54.78-3.66l4.29 11.75c-3-1.46-5.07-4.53-5.07-8.09zM12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84 2.76 7.57c.02.04.04.09.06.12-.93.34-1.93.52-2.98.52zm1.24-13.21c.54-.03 1.03-.09 1.03-.09.48-.06.43-.77-.06-.74 0 0-1.46.11-2.4.11-.88 0-2.37-.11-2.37-.11-.48-.02-.54.72-.05.75 0 0 .46.06.94.09l1.4 3.84-1.97 5.9-3.27-9.75c.54-.02 1.03-.08 1.03-.08.48-.06.43-.77-.06-.74 0 0-1.46.11-2.4.11-.17 0-.37 0-.58-.01C6.1 4.62 8.86 3.01 12 3.01c2.34 0 4.47.89 6.07 2.36-.04 0-.08-.01-.12-.01-.88 0-1.51.77-1.51 1.6 0 .74.43 1.37.88 2.11.34.6.74 1.37.74 2.48 0 .77-.3 1.66-.68 2.91l-.9 3-3.24-9.68zm6.65-.09a8.988 8.988 0 0 1-3.37 12.08l2.75-7.94c.51-1.28.68-2.31.68-3.22 0-.33-.02-.64-.06-.92z",
    fill: "currentColor"
  }));
};
export default SvgWordpress;