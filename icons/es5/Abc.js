function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgAbc = function SvgAbc(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 11h-1.5v-.5h-2v3h2V13H21v2h-5V9h5v2zM8 9v6H6.5v-1.5h-2V15H3V9h5zm-1.5 1.5h-2V12h2v-1.5zm7 1.5c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-4V9h4c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zM11 10.5v.75h2v-.75h-2zm2 2.25h-2v.75h2v-.75z",
    fill: "currentColor"
  }));
};
export default SvgAbc;