function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var Svg4Mp = function Svg4Mp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 14h1.5v1.5H15z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zm-3-8.5V5.5H11v3h1.5v-3H14v3h1V10h-1v1.5h-1.5V10h-3zm8.5 7h-3v1.5h-1.5v-6H18V17z",
    fill: "currentColor"
  }));
};
export default Svg4Mp;