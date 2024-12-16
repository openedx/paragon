function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var SvgShopify = function SvgShopify(props) {
  return /*#__PURE__*/React.createElement("svg", _objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.9 5.1s-.2.06-.54.17c-.06-.18-.14-.41-.26-.63-.38-.73-.94-1.11-1.62-1.12-.05 0-.09 0-.14.01-.02-.02-.04-.05-.06-.07-.29-.32-.67-.47-1.12-.46-.87.03-1.74.66-2.45 1.78-.5.79-.87 1.78-.98 2.54-1 .31-1.7.53-1.72.53-.51.16-.52.18-.59.65-.05.36-1.37 10.6-1.37 10.6L15.03 21V5.08c-.05 0-.1.01-.13.02zm-2.54.79c-.58.18-1.22.38-1.85.57.18-.69.52-1.37.94-1.82.16-.17.37-.35.63-.46.24.51.29 1.22.28 1.71zm-1.19-2.31c.2 0 .38.04.53.14-.24.12-.46.3-.68.53-.55.59-.98 1.52-1.15 2.41-.53.16-1.04.32-1.52.47.3-1.41 1.48-3.51 2.82-3.55zm-1.7 7.99c.06.93 2.52 1.14 2.66 3.33.11 1.72-.91 2.9-2.39 2.99C7.98 18 7 16.96 7 16.96l.37-1.59s.98.74 1.76.69c.51-.03.69-.45.68-.74-.08-1.22-2.08-1.15-2.2-3.15-.11-1.69 1-3.39 3.44-3.55.95-.06 1.43.18 1.43.18l-.56 2.09s-.62-.28-1.36-.24c-1.08.07-1.1.75-1.09.92zm3.47-5.86c-.01-.44-.06-1.06-.27-1.59.66.13.99.87 1.13 1.32-.25.08-.54.17-.86.27zm2.45 15.25 4.56-1.13S17.99 6.57 17.98 6.48c-.01-.09-.09-.14-.16-.15-.07-.01-1.35-.03-1.35-.03s-.78-.76-1.08-1.05v15.71z",
    fill: "currentColor"
  }));
};
export default SvgShopify;