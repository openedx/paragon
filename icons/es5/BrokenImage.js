function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBrokenImage = function SvgBrokenImage(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v8.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V3h18zm-3 8.42 3 3.01V21H3v-8.58l3 2.99 4-4 4 4 4-3.99z",
    fill: "currentColor"
  }));
};
export default SvgBrokenImage;