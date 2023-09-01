function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgCalendarViewMonth = function SvgCalendarViewMonth(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 4H2v16h20V4zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z",
    fill: "currentColor"
  }));
};
export default SvgCalendarViewMonth;