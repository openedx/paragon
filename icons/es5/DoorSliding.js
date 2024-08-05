function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgDoorSliding = function SvgDoorSliding(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2h-1zm-10-6H8v-2h2v2zm6 0h-2v-2h2v2z",
    fill: "currentColor"
  }));
};
export default SvgDoorSliding;