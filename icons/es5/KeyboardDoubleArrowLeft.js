function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgKeyboardDoubleArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z",
    fill: "currentColor"
  }));
}

export default SvgKeyboardDoubleArrowLeft;