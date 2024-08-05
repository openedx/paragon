function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgLmsOutline = function SvgLmsOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7 8h2v12H7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7 13v-2h7v2zM7 20v-2h7v2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 5,
    r: 2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 12,
    r: 2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 19,
    r: 2,
    fill: "currentColor"
  }));
};
export default SvgLmsOutline;