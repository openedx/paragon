function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgCommentsDisabled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17L16.83 14zM2.1 2.1L.69 3.51 2 4.83V18h13.17l5.31 5.31 1.41-1.41L2.1 2.1zM6 9h.17l2 2H6V9zm0 5v-2h3.17l2 2H6z",
    fill: "currentColor"
  }));
}

export default SvgCommentsDisabled;