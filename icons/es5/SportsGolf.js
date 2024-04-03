function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSportsGolf = function SvgSportsGolf(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 8,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 8,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 6,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7v2z",
    fill: "currentColor"
  }));
};
export default SvgSportsGolf;