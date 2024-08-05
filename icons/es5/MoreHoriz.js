function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMoreHoriz = function SvgMoreHoriz(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2Zm2 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm6 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z",
    fill: "currentColor"
  }));
};
export default SvgMoreHoriz;