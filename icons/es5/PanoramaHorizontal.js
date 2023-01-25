function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgPanoramaHorizontal(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 6.55c2.6.77 5.28 1.16 8 1.16 2.72 0 5.41-.39 8-1.16v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.41.39-8 1.16V6.55M2 3.77v16.47s.77-.26.88-.3A26.24 26.24 0 0112 18.3c3.09 0 6.18.55 9.12 1.64.11.04.88.3.88.3V3.77s-.77.26-.88.3C18.18 5.15 15.09 5.71 12 5.71s-6.18-.56-9.12-1.64c-.11-.05-.88-.3-.88-.3z",
    fill: "currentColor"
  }));
}

export default SvgPanoramaHorizontal;