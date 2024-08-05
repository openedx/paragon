function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBatteryCharging30 = function SvgBatteryCharging30(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M17 4h-3V2h-4v2H7v10.5h2L13 7v5.5h2l-1.07 2H17V4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 20v-5.5H7V22h10v-7.5h-3.07L11 20z",
    fill: "currentColor"
  }));
};
export default SvgBatteryCharging30;