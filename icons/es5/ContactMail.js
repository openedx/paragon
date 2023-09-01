function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgContactMail = function SvgContactMail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 8V7l-3 2-3-2v1l3 2 3-2Zm3-5H0v18h23.99L24 3ZM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1Zm8-6h-8V6h8v6Z",
    fill: "currentColor"
  }));
};
export default SvgContactMail;