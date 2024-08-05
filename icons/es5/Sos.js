function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSos = function SvgSos(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 7h-7v10h7V7zm-2 8h-3V9h3v6zM1 15h4v-2H1V7h6v2H3v2h4v6H1v-2zm16 0h4v-2h-4V7h6v2h-4v2h4v6h-6v-2z",
    fill: "currentColor"
  }));
};
export default SvgSos;