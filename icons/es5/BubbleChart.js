function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgBubbleChart = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 7.2,
  cy: 14.4,
  r: 3.2
}), /*#__PURE__*/React.createElement("circle", {
  cx: 14.8,
  cy: 18,
  r: 2
}), /*#__PURE__*/React.createElement("circle", {
  cx: 15.2,
  cy: 8.8,
  r: 4.8
}));
export default SvgBubbleChart;