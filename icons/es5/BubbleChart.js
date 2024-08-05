function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBubbleChart = function SvgBubbleChart(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 7.2,
    cy: 14.4,
    r: 3.2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14.8,
    cy: 18,
    r: 2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15.2,
    cy: 8.8,
    r: 4.8,
    fill: "currentColor"
  }));
};
export default SvgBubbleChart;