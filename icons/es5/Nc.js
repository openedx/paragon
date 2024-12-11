function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgNc = function SvgNc(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.982 2c2.81 0 5.178.964 7.107 2.893C21.03 6.82 22 9.19 22 12c0 2.81-.953 5.149-2.858 7.018C17.12 21.006 14.732 22 11.982 22c-2.714 0-5.06-.988-7.035-2.964C2.982 17.07 2 14.726 2 12c0-2.738.982-5.107 2.947-7.107C6.875 2.964 9.22 2 11.982 2ZM4.25 9.304c-.297.821-.447 1.72-.447 2.696 0 2.215.81 4.132 2.429 5.75 1.63 1.608 3.56 2.411 5.785 2.411 2.25 0 4.19-.815 5.822-2.446.584-.56 1.041-1.143 1.374-1.75l-3.767-1.68a2.577 2.577 0 0 1-.955 1.545c-.507.399-1.105.628-1.795.687v1.536h-1.161v-1.536c-1.107-.01-2.12-.41-3.036-1.195l1.375-1.393c.655.607 1.4.91 2.233.91.345 0 .64-.077.884-.232.244-.154.366-.41.366-.768 0-.25-.09-.452-.268-.607l-.964-.411-1.178-.536-1.59-.697L4.25 9.304Zm7.768-5.518c-2.274 0-4.196.803-5.768 2.41a9.57 9.57 0 0 0-1.107 1.34L8.964 9.25c.167-.524.482-.943.947-1.259.464-.315 1.006-.49 1.625-.527V5.928h1.16v1.536c.918.048 1.75.358 2.5.929l-1.303 1.34c-.56-.394-1.13-.59-1.714-.59-.31 0-.587.06-.83.179-.244.119-.367.321-.367.607 0 .083.03.166.09.25l1.267.572.875.392 1.608.714 5.124 2.286a9.22 9.22 0 0 0 .25-2.143c0-2.297-.797-4.232-2.392-5.804-1.584-1.607-3.513-2.41-5.786-2.41Z",
    fill: "currentColor"
  }));
};
export default SvgNc;