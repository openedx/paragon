function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgDining(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2v20h20V2zm-11 8.3c0 .93-.64 1.71-1.5 1.93V19H8v-6.77c-.86-.22-1.5-1-1.5-1.93V6h1v3h.75V6h1v3H10V6h1v4.3zm4.58 2.29l-.08.03V19H14v-6.38l-.08-.04c-.97-.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4 1.38 0 2.5 1.53 2.5 3.41 0 1.48-.7 2.71-1.67 3.18z",
    fill: "currentColor"
  }));
}

export default SvgDining;