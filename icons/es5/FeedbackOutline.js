function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgFeedbackOutline = function SvgFeedbackOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2.01v2L2 22l4-4h16V2Zm-2 14H5.17l-.59.59-.58.58V4h16v12Zm-9-4h2v2h-2v-2Zm0-6h2v4h-2V6Z",
    fill: "currentColor"
  }));
};
export default SvgFeedbackOutline;