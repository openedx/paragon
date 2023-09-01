function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgSpatialTracking = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 10,
  cy: 9,
  r: 4
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zm3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22.88 5.24-1.41-1.41a5.003 5.003 0 0 0 0 7.07l1.41-1.41a3.012 3.012 0 0 1 0-4.25z",
  fill: "currentColor"
}));
export default SvgSpatialTracking;