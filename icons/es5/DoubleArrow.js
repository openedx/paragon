function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgDoubleArrow = function SvgDoubleArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 5H11l5 7-5 7h4.5l5-7z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 5H4l5 7-5 7h4.5l5-7z",
    fill: "currentColor"
  }));
};
export default SvgDoubleArrow;