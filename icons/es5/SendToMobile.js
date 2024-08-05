function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSendToMobile = function SvgSendToMobile(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 18H7V6h10v1h2V1H5v22h14v-6h-2z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 12-4-4v3h-5v2h5v3z",
    fill: "currentColor"
  }));
};
export default SvgSendToMobile;