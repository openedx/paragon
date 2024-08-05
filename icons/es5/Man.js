function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMan = function SvgMan(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 7H8v8h2v7h4v-7h2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 4,
    r: 2,
    fill: "currentColor"
  }));
};
export default SvgMan;