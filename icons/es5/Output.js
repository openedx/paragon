function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgOutput = function SvgOutput(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 19H5V5h14v2h2V3H3v18h18v-4h-2z",
    fill: "currentColor"
  }));
};
export default SvgOutput;