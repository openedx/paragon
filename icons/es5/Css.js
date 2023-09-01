function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCss = function SvgCss(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15v-2H11v.5h2v-1H9.5V9h5v2H13v-.5h-2v1h3.5V15h-5zm6.5 0h5v-3.5h-3.5v-1h2v.5H21V9h-5v3.5h3.5v1h-2V13H16v2zm-8-4V9H3v6h5v-2H6.5v.5h-2v-3h2v.5H8z",
    fill: "currentColor"
  }));
};
export default SvgCss;