function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHighRes = function SvgHighRes(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M400-220h160v-60H460v-30h80v-60h-80v-30h100v-60H400v240Zm200 0h180v-140H660v-40h120v-60H600v140h120v40H600v60ZM300-500h60v-90h60v90h60v-240h-60v90h-60v-90h-60v240Zm280 0h60v-240h-60v240ZM40-120v-720h880v720H40Zm60-60h760v-600H100v600Zm0 0v-600 600Zm80-40h60v-80h24l36 80h60l-39-92q17-6 28-18t11-30v-55q0-19-13-32t-32-13H180v240Zm60-140v-40h60v40h-60Z",
    fill: "currentColor"
  }));
};
export default SvgHighRes;