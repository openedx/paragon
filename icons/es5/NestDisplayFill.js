function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNestDisplayFill = function SvgNestDisplayFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-200q-99 0-169.5-13.5T240-246v-34h-95q-26 0-44-19.5T85-345l31-360q2-23 19-39t40-16h610q23 0 40 16t19 39l31 360q2 26-16 45.5T815-280h-95v34q0 19-70.5 32.5T480-200Z",
    fill: "currentColor"
  }));
};
export default SvgNestDisplayFill;