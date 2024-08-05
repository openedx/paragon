function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgViewQuilt = function SvgViewQuilt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 5v6.5H9.33V5H21zm-6.33 14v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zM8.33 19V5H3v14h5.33z",
    fill: "currentColor"
  }));
};
export default SvgViewQuilt;