function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSendAndArchive = function SvgSendAndArchive(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3h2.5v-3h1v3H20l-3 3z",
    fill: "currentColor"
  }));
};
export default SvgSendAndArchive;