function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgLmsBookComplete = function SvgLmsBookComplete(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 22h-7.255c.422-.604.75-1.278.965-2h4.115c-.1-.233-.18-.47-.238-.712a3.354 3.354 0 0 1-.087-.788c0-.267.025-.525.075-.775.05-.25.133-.492.25-.725h-3.896A6.999 6.999 0 0 0 10 12.255V5a.968.968 0 0 0-.287-.713A.968.968 0 0 0 9 4a.968.968 0 0 0-.713.287A.968.968 0 0 0 8 5v6.29A7.001 7.001 0 0 0 6 11c-.695 0-1.366.101-2 .29V5.5c0-.967.342-1.792 1.025-2.475A3.372 3.372 0 0 1 7.5 2H18c.55 0 1.02.196 1.413.587C19.803 2.98 20 3.45 20 4v12.525a.502.502 0 0 1-.163.363c-.108.108-.304.229-.587.362a1.33 1.33 0 0 0-.55.5c-.133.217-.2.467-.2.75s.067.538.2.762c.133.226.317.388.55.488.233.1.417.238.55.413.133.174.2.362.2.562v.25c0 .283-.096.525-.288.725-.191.2-.429.3-.712.3ZM0 18c0-3.312 2.688-6 6-6s6 2.688 6 6-2.688 6-6 6-6-2.688-6-6Zm1.8 0 3 3 5.4-5.4-.846-.852L4.8 19.302l-2.154-2.148L1.8 18Z",
    fill: "currentColor"
  }));
};
export default SvgLmsBookComplete;