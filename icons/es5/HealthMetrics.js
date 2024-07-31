function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHealthMetrics = function SvgHealthMetrics(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M280-80v-200H80v-400h200v-200h400v200h200v400H680v200H280ZM140-510h236l56 83 69-218h26l91 135h202v-110H620v-200H340v200H140v110Zm200 370h280v-200h200v-110H586l-56-83-70 217h-25l-91-134H140v110h200v200Zm140-340Z",
    fill: "currentColor"
  }));
};
export default SvgHealthMetrics;