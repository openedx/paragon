function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBatteryCharging80 = function SvgBatteryCharging80(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M17 4h-3V2h-4v2H7v5h4.93L13 7v2h4V4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 12.5h2L11 20v-5.5H9L11.93 9H7v13h10V9h-4v3.5z",
    fill: "currentColor"
  }));
};
export default SvgBatteryCharging80;