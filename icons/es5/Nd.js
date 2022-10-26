function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgNd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.983 2c2.797 0 5.166.97 7.107 2.91C21.03 6.84 22 9.203 22 12s-.952 5.143-2.857 7.036C17.13 21.012 14.743 22 11.983 22c-2.704 0-5.049-.982-7.036-2.947C2.983 17.09 2 14.738 2 12c0-2.726.983-5.089 2.947-7.089C6.887 2.971 9.233 2 11.983 2zm.036 1.804c-2.274 0-4.197.803-5.768 2.41C4.619 7.87 3.804 9.799 3.804 12c0 2.227.81 4.143 2.428 5.75 1.62 1.62 3.548 2.429 5.786 2.429 2.226 0 4.167-.815 5.822-2.447 1.57-1.523 2.357-3.434 2.357-5.732 0-2.285-.798-4.214-2.393-5.785-1.583-1.608-3.512-2.411-5.785-2.411zm3.768 5.839v1.714H8.519V9.643h7.268zm0 3.214v1.713H8.519v-1.713h7.268z",
    fill: "currentColor"
  }));
}

export default SvgNd;