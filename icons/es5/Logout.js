function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgLogout = function SvgLogout(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 5h7V3H3v18h9v-2H5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 12-4-4v3H9v2h8v3z",
    fill: "currentColor"
  }));
};
export default SvgLogout;