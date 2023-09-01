function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgLiveTv = function SvgLiveTv(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 6h-9.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H1v16h22V6zm-2 14H3V8h18v12zM9 10v8l7-4-7-4z",
    fill: "currentColor"
  }));
};
export default SvgLiveTv;