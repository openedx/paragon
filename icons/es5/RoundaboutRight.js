function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgRoundaboutRight = function SvgRoundaboutRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4v1h6.17l-1.59 1.59L18 13l4-4-4-4-1.41 1.41L18.17 8h-4.25C13.44 5.16 10.97 3 8 3 4.69 3 2 5.69 2 9c0 2.97 2.16 5.44 5 5.92V21h2v-8H8z",
    fill: "currentColor"
  }));
};
export default SvgRoundaboutRight;