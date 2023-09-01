function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgOutbox = function SvgOutbox(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11 14h2v-3h3l-4-4-4 4h3z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18V3H3zm16 11h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z",
    fill: "currentColor"
  }));
};
export default SvgOutbox;