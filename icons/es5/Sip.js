function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSip = function SvgSip(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 10.5h2v1h-2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-10 6.5H6.5v.75H10V15H5v-1.5h3.5v-.75H5V9h5v1.5zm3 4.5h-2V9h2v6zm6-6v4h-3.5v2H14V9h5z",
    fill: "currentColor"
  }));
};
export default SvgSip;