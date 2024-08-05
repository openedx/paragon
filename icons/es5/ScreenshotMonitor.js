function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgScreenshotMonitor = function SvgScreenshotMonitor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z",
    fill: "currentColor"
  }));
};
export default SvgScreenshotMonitor;