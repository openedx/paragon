function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBookOnline = function SvgBookOnline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 1H5v22h14V1zM7 18V6h10v12H7zm9-7V8H8v3.1c.55 0 1 .45 1 1s-.45 1-1 1V16h8v-3c-.55 0-1-.45-1-1s.45-1 1-1zm-3.5 3.5h-1v-1h1v1zm0-2h-1v-1h1v1zm0-2h-1v-1h1v1z",
    fill: "currentColor"
  }));
};
export default SvgBookOnline;