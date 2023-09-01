function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgInstallDesktop = function SvgInstallDesktop(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z",
    fill: "currentColor"
  }));
};
export default SvgInstallDesktop;