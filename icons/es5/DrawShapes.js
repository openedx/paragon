function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgDrawShapes = function SvgDrawShapes(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13 13v8h8v-8h-8ZM3 21h8v-8H3v8ZM3 3v8h8V3H3Zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65Z",
    fill: "currentColor"
  }));
};
export default SvgDrawShapes;