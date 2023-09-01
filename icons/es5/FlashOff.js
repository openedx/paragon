function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgFlashOff = function SvgFlashOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 10h-3.61l2.28 2.28zm0-8H7v1.61l6.13 6.13zm-13.59.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z",
    fill: "currentColor"
  }));
};
export default SvgFlashOff;