function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgElectricMeter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c-4.96 0-9 4.04-9 9 0 3.91 2.51 7.24 6 8.47V22h2v-2.06a8.262 8.262 0 002 0V22h2v-2.53c3.49-1.24 6-4.57 6-8.47 0-4.96-4.04-9-9-9zm2.25 12l-3 3-1.5-1.5L11 14.25 9.75 13l3-3 1.5 1.5L13 12.75 14.25 14zM16 9H8V7h8v2z",
    fill: "currentColor"
  }));
}

export default SvgElectricMeter;