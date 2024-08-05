function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgOilBarrel = function SvgOilBarrel(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v-2h-2V5h2V3H3v2h2v6H3v2h2v6H3v2h18v-2h-2v-6h2zm-9 3c-1.66 0-3-1.32-3-2.95 0-1.3.52-1.67 3-4.55 2.47 2.86 3 3.24 3 4.55 0 1.63-1.34 2.95-3 2.95z",
    fill: "currentColor"
  }));
};
export default SvgOilBarrel;