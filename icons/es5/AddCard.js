function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgAddCard = function SvgAddCard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M2.01 4 2 20h12v-2H4v-6h18V4H2.01zM20 8H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z",
    fill: "currentColor"
  }));
};
export default SvgAddCard;