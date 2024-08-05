function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgRequestQuote = function SvgRequestQuote(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 2H4v20h16V8l-6-6zm1 10h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9v-5h2V9h2v1h2v2zm-2-4V3.5L17.5 8H13z",
    fill: "currentColor"
  }));
};
export default SvgRequestQuote;