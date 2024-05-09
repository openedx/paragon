function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgControllerGen = function SvgControllerGen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480.5-250q95.5 0 162.5-67.5t67-163q0-95.5-67.08-162.5-67.09-67-162.92-67-95 0-162.5 67.08Q250-575.83 250-480q0 95 67.5 162.5t163 67.5Zm0-60Q410-310 360-359.94T310-480q0-71 49.94-120.5T480-650q71 0 120.5 49.5t49.5 120q0 70.5-49.5 120.5t-120 50Zm-.5-128 98-98-42-42-98 98 42 42ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0-600v600-600Z",
    fill: "currentColor"
  }));
};
export default SvgControllerGen;