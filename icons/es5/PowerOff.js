function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgPowerOff = function SvgPowerOff(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69.19-.2zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41L4.12 3.84z",
    fill: "currentColor"
  }));
};
export default SvgPowerOff;