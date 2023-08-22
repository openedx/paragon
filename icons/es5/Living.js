function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgLiving = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 12v2.5h-7V12h-2v4.5h11V12z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 2H2v20h20V2zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99H19z",
  fill: "currentColor"
}));
export default SvgLiving;