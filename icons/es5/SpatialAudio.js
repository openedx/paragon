function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSpatialAudio = function SvgSpatialAudio(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 9,
    r: 4,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM16 1h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3z",
    fill: "currentColor"
  }));
};
export default SvgSpatialAudio;