function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCloseFullscreenFill = function SvgCloseFullscreenFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m122-80-42-42 298-298H160v-60h320v320h-60v-218L122-80Zm358-400v-320h60v218l298-298 42 42-298 298h218v60H480Z",
    fill: "currentColor"
  }));
};
export default SvgCloseFullscreenFill;