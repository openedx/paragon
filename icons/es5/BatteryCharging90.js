function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgBatteryCharging90(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z",
    fill: "currentColor"
  }));
}

export default SvgBatteryCharging90;