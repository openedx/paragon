function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgWoman = function SvgWoman(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.41 7h-2.82L7 16h3v6h4v-6h3z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 4,
    r: 2,
    fill: "currentColor"
  }));
};
export default SvgWoman;