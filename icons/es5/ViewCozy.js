function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgViewCozy = function SvgViewCozy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 4H2v16h20V4zM11.25 16.75h-4v-4h4v4zm0-5.5h-4v-4h4v4zm5.5 5.5h-4v-4h4v4zm0-5.5h-4v-4h4v4z",
    fill: "currentColor"
  }));
};
export default SvgViewCozy;