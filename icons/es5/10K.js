function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Svg10K(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 10.5h1.5v3H10v-3zM21 3H3v18h18V3zM7.5 15H6v-4.5H4.5V9h3v6zM13 9v6H8.5V9H13zm6 6h-1.75l-1.75-2.25V15H14V9h1.5v2.25L17.25 9H19l-2.25 3L19 15z",
    fill: "currentColor"
  }));
}

export default Svg10K;