function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgCategory = props => /*#__PURE__*/React.createElement("svg", _extends({
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
export default SvgCategory;