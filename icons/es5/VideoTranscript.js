function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgVideoTranscript = function SvgVideoTranscript(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2.01L2 22l4-4h16V2ZM8 14H6v-2h2v2Zm0-3H6V9h2v2Zm0-3H6V6h2v2Zm7 6h-5v-2h5v2Zm3-3h-8V9h8v2Zm0-3h-8V6h8v2Z",
    fill: "currentColor"
  }));
};
export default SvgVideoTranscript;