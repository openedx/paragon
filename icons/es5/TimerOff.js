function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgTimerOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 1h6v2H9zm4 7v2.17l6.98 6.98a8.963 8.963 0 00-.95-9.76l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42a8.962 8.962 0 00-9.77-.96L10.83 8H13zM2.81 2.81L1.39 4.22l3.4 3.4a8.994 8.994 0 0012.59 12.59l2.4 2.4 1.41-1.41L2.81 2.81z",
    fill: "currentColor"
  }));
}

export default SvgTimerOff;