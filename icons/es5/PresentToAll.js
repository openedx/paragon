function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgPresentToAll = function SvgPresentToAll(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 3H1v18h22V3zm-2 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z",
    fill: "currentColor"
  }));
};
export default SvgPresentToAll;