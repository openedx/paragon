function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMailLock = function SvgMailLock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 9.97V4H2.01L2 20h14v-5.03c0-2.76 2.24-5 5-5h1zM20 8l-8 5-8-5V6l8 5 8-5v2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 15v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 19 14v1h-1v5h6v-5h-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z",
    fill: "currentColor"
  }));
};
export default SvgMailLock;