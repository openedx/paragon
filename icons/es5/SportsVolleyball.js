function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSportsVolleyball(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31V4.01zm5 7.41V2.05c-1.06.11-2.07.38-3 .79v10.32l3-1.74zm1 1.73l-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89l-3-1.74zm1-5.19v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98L13 7.96zM8.07 21.2c1.21.51 2.53.8 3.93.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04 8.07 21.2zm13.85-10.39c-.55-4.63-4.26-8.3-8.92-8.76v3.6l8.92 5.16z",
    fill: "currentColor"
  }));
}

export default SvgSportsVolleyball;