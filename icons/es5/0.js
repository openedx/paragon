function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var Svg0 = function Svg0(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.87 12c0-2.64.83-5.756 4.13-5.756 3.302 0 4.132 3.115 4.132 5.756 0 2.64-.83 5.756-4.132 5.756-3.3 0-4.131-3.115-4.13-5.756Zm4.502-3.538A1.553 1.553 0 0 0 12 8.416v-.002c-1.697 0-1.778 2.422-1.778 3.586 0 .374.01.875.077 1.386l2.198-4.04c.228-.395.113-.677-.125-.884ZM13.782 12c0-.455 0-1.103-.136-1.723l-2.458 4.245c-.342.514-.104.805.274.965.032.013.07.025.104.035.022.01.04.015.064.022.114.028.238.042.37.042 1.7 0 1.782-2.424 1.782-3.586Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.963 4.906C6.867 2.966 9.206 2 11.979 2c2.8 0 5.185.975 7.15 2.927a9.57 9.57 0 0 1 2.143 3.23C21.759 9.358 22 10.643 22 12c0 1.369-.24 2.656-.728 3.86a9.056 9.056 0 0 1-2.128 3.156 10.286 10.286 0 0 1-3.319 2.215 10.05 10.05 0 0 1-3.847.769 9.895 9.895 0 0 1-3.803-.75 10.414 10.414 0 0 1-3.247-2.197 10.126 10.126 0 0 1-2.178-3.25A9.804 9.804 0 0 1 2 12c0-1.322.25-2.588.75-3.803a10.109 10.109 0 0 1 2.213-3.29ZM17.819 6.21C16.212 4.603 14.283 3.8 12.02 3.8c-2.287 0-4.212.822-5.771 2.394A8.72 8.72 0 0 0 4.431 8.89a7.972 7.972 0 0 0-.001 6.212 8.551 8.551 0 0 0 1.82 2.66 8.466 8.466 0 0 0 2.662 1.787c.988.404 2.15.608 3.109.608a7.956 7.956 0 0 0 3.104-.624 8.575 8.575 0 0 0 2.728-1.806C19.414 16.203 20.2 14.297 20.2 12c0-1.1-.203-2.156-.61-3.144A7.994 7.994 0 0 0 17.82 6.21Z",
    fill: "currentColor"
  }));
};
export default Svg0;