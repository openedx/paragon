function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgAirlineSeatFlatAngled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.56 16.18L9.2 11.71l2.08-5.66 12.35 4.47-2.07 5.66zM1.5 12.14L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86-.69 1.89zm5.8-1.94a3.01 3.01 0 001.41-4A3.005 3.005 0 004.7 4.8a2.99 2.99 0 00-1.4 4 2.99 2.99 0 004 1.4z",
    fill: "currentColor"
  }));
}

export default SvgAirlineSeatFlatAngled;