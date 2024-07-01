function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgRipples = function SvgRipples(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-180h600v-371q-21 13-45.14 19-24.13 6-48.86 6-66.83 0-114.41-47.59Q524-621.17 524-688q0-24.05 6-47.52Q536-759 549-780H180v600Zm-60 60v-720h720v720H120Zm60-660v600-600Z",
    fill: "currentColor"
  }));
};
export default SvgRipples;