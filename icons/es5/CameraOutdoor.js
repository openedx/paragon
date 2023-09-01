function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCameraOutdoor = function SvgCameraOutdoor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 14v-2h-6v6h6v-2l2 1.06v-4.12L18 14zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9l-8-6z",
    fill: "currentColor"
  }));
};
export default SvgCameraOutdoor;