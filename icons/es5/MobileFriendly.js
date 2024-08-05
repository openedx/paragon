function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMobileFriendly = function SvgMobileFriendly(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 1H7v5h2V4h10v16H9v-2H7v5h14V1zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z",
    fill: "currentColor"
  }));
};
export default SvgMobileFriendly;