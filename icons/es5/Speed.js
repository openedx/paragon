function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSpeed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.39 8.56l-1.24 1.86a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.86-1.24A10 10 0 004 20h16a10 10 0 00.38-11.44h.01z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.59 15.41a1.998 1.998 0 002.83 0l5.66-8.49-8.49 5.66a1.999 1.999 0 000 2.83z",
    fill: "currentColor"
  }));
}

export default SvgSpeed;