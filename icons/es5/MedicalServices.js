function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMedicalServices = function SvgMedicalServices(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 6V2H8v4H2v16h20V6h-6zm-6-2h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z",
    fill: "currentColor"
  }));
};
export default SvgMedicalServices;