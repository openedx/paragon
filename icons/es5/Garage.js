function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgGarage = function SvgGarage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 13,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 13,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.33 7.5-.66 2h8.66l-.66-2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z",
    fill: "currentColor"
  }));
};
export default SvgGarage;