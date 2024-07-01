function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScreenshotKeyboard = function SvgScreenshotKeyboard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480.5-390q-37.5 0-64-26.44T390-480q0-38 26.44-64T480-570q38 0 64 26t26 63.5q0 37.5-26 64T480.5-390Zm-.5 60q63 0 106.5-43.5T630-480q0-63-43.5-106.5T480-630q-63 0-106.5 43.5T330-480q0 63 43.5 106.5T480-330ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z",
    fill: "currentColor"
  }));
};
export default SvgScreenshotKeyboard;