function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgPhp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zM8 9v4H4.5v2H3V9h5zm-1.5 1.5h-2v1h2v-1zm15-1.5v4H18v2h-1.5V9h5zM20 10.5h-2v1h2v-1z",
    fill: "currentColor"
  }));
}

export default SvgPhp;