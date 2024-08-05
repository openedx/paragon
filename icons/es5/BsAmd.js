function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBsAmd = function SvgBsAmd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    className: "bi bi-amd",
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z",
    fill: "currentColor"
  }));
};
export default SvgBsAmd;