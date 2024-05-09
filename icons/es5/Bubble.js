function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBubble = function SvgBubble(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-840q75 0 140.5 28T735-735q49 49 77 114.5T840-480q0 75-28 140.5T735-225q-49 49-114.5 77T480-120q-49 0-98-10.5T296-170l43-43q24 17 63.5 25t77.5 8q127 0 213.5-86.5T780-480q0-127-86.5-213.5T480-780q-127 0-213.5 86.5T180-480q0 39 7.5 72.5T211-339l-45 45q-20-32-33-81t-13-105q0-75 28-140.5T225-735q49-49 114.5-77T480-840Zm55 519v-171L163-120l-43-43 372-372H321v-60h274v274h-60Z",
    fill: "currentColor"
  }));
};
export default SvgBubble;