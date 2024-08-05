function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCategory = function SvgCategory(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m12 2-5.5 9h11z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17.5,
    cy: 17.5,
    r: 4.5,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 13.5h8v8H3z",
    fill: "currentColor"
  }));
};
export default SvgCategory;