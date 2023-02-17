function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgNightShelter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 3L4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H17v6z",
    fill: "currentColor"
  }));
}

export default SvgNightShelter;