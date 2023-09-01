function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgDateRange = function SvgDateRange(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 11H7v2h2v-2Zm4 0h-2v2h2v-2Zm4 0h-2v2h2v-2Zm4-7h-3V2h-2v2H8V2H6v2H3v18h18V4Zm-2 16H5V9h14v11Z",
    fill: "currentColor"
  }));
};
export default SvgDateRange;