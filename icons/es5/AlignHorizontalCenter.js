function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgAlignHorizontalCenter = function SvgAlignHorizontalCenter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z",
    fill: "currentColor"
  }));
};
export default SvgAlignHorizontalCenter;