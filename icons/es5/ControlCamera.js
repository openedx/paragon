function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgControlCamera = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm12.92 0-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zM8.46 5.54l1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 3,
  fill: "currentColor"
}));
export default SvgControlCamera;