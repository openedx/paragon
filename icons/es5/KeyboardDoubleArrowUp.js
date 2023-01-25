function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgKeyboardDoubleArrowUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 17.59L7.41 19 12 14.42 16.59 19 18 17.59l-6-6z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z",
    fill: "currentColor"
  }));
}

export default SvgKeyboardDoubleArrowUp;