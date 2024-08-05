function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCloseSmall = function SvgCloseSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m15.518 16.5.982-.982L12.982 12 16.5 8.482l-.982-.982L12 11.018 8.482 7.5l-.982.982L11.018 12 7.5 15.518l.982.982L12 12.982l3.518 3.518Z",
    fill: "currentColor"
  }));
};
export default SvgCloseSmall;