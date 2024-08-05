function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgKeyboardDoubleArrowDown = function SvgKeyboardDoubleArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z",
    fill: "currentColor"
  }));
};
export default SvgKeyboardDoubleArrowDown;