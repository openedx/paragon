function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgNumbers = function SvgNumbers(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m20.5 10 .5-2h-4l1-4h-2l-1 4h-4l1-4h-2L9 8H5l-.5 2h4l-1 4h-4L3 16h4l-1 4h2l1-4h4l-1 4h2l1-4h4l.5-2h-4l1-4h4zm-7 4h-4l1-4h4l-1 4z",
    fill: "currentColor"
  }));
};
export default SvgNumbers;