function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgGrading = function SvgGrading(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16v2H4V7zm0 6h16v-2H4v2zm0 4h7v-2H4v2zm0 4h7v-2H4v2zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21 20 16.42 18.58 15l-3.17 3.17zM4 3v2h16V3H4z",
    fill: "currentColor"
  }));
};
export default SvgGrading;