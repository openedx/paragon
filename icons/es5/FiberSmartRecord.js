function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgFiberSmartRecord(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 12,
    r: 8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 4.26v2.09a5.99 5.99 0 010 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z",
    fill: "currentColor"
  }));
}

export default SvgFiberSmartRecord;