function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgNoFood = function SvgNoFood(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L18 15.17l-6.65-6.65zM21.9 21.9 2.1 2.1.69 3.51l5.7 5.7C3.46 9.83 1 11.76 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49 1.41-1.42zM1 23h15v-2H1v2z",
    fill: "currentColor"
  }));
};
export default SvgNoFood;