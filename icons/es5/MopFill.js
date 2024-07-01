function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMopFill = function SvgMopFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M116-100h134v-120h60v120h140v-120h60v120h140v-120h60v120h134l-50-200H166l-50 200ZM40-40l80-320v-160h240v-280q0-50 35-85t85-35q50 0 85 35t35 85v280h240v160l80 320H40Z",
    fill: "currentColor"
  }));
};
export default SvgMopFill;