function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgFace4(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 005 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 009.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 13,
    r: 1.25
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 13,
    r: 1.25
  }));
}

export default SvgFace4;