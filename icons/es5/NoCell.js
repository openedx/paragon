function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgNoCell = function SvgNoCell(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78 1.41-1.42zM7 18V9.83L15.17 18H7zM8.83 6 5 2.17V1h14v15.17l-2-2V6H8.83z",
    fill: "currentColor"
  }));
};
export default SvgNoCell;