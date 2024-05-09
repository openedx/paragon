function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTableBarFill = function SvgTableBarFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m240-160 80-200h130v-161q-159-5-264.5-45T80-660q0-58 117-99t283-41q166 0 283 41t117 99q0 54-105.5 94T510-521v161h130l80 200h-60l-55-140H356l-56 140h-60Z",
    fill: "currentColor"
  }));
};
export default SvgTableBarFill;