function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgDeveloperBoard = function SvgDeveloperBoard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 9V7h-2V3H2v18h18v-4h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z",
    fill: "currentColor"
  }));
};
export default SvgDeveloperBoard;