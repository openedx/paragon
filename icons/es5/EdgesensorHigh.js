function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgEdgesensorHigh = function SvgEdgesensorHigh(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 7h2v7H3V7zm-3 3h2v7H0v-7zm22-3h2v7h-2V7zm-3 3h2v7h-2v-7zm-1-8H6v20h12V2zm-2 15H8V7h8v10z",
    fill: "currentColor"
  }));
};
export default SvgEdgesensorHigh;