function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBattery80 = function SvgBattery80(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M17 4h-3V2h-4v2H7v5h10V4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 9v13h10V9H7z",
    fill: "currentColor"
  }));
};
export default SvgBattery80;