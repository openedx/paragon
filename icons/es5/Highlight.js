function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgHighlight = function SvgHighlight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m15 16-4 4h10v-4h-6ZM12.06 7.19 3 16.25V20h3.75l9.06-9.06-3.75-3.75ZM15.67 3.584l-2.538 2.539L16.88 9.87l2.538-2.538-3.747-3.748Z",
    fill: "currentColor"
  }));
};
export default SvgHighlight;