function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScatterPlot = function SvgScatterPlot(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 7,
    cy: 14,
    r: 3,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 11,
    cy: 6,
    r: 3,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16.6,
    cy: 17.6,
    r: 3,
    fill: "currentColor"
  }));
};
export default SvgScatterPlot;