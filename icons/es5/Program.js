function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgProgram = function SvgProgram(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.263 3H4v11.842h1.466V4.48h8.797V3Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6.158H7.158v15H19v-15Zm-10.362 1.5h3.7v6l-1.85-1.125-1.85 1.125v-6Z",
    fill: "currentColor"
  }));
};
export default SvgProgram;