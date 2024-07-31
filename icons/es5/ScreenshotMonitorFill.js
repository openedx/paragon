function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScreenshotMonitorFill = function SvgScreenshotMonitorFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M600-320h160v-160h-40v120H600v40ZM200-560h40v-120h120v-40H200v160Zm130 440v-80H80v-640h800v640H630v80H330Z",
    fill: "currentColor"
  }));
};
export default SvgScreenshotMonitorFill;