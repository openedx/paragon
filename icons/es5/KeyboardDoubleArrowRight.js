function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgKeyboardDoubleArrowRight = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z",
  fill: "currentColor"
}));
export default SvgKeyboardDoubleArrowRight;