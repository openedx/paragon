function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgQuickreply = function SvgQuickreply(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 2H2v20l4-4h9v-8h7z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 16h-2.2l1.7-4h-5v6h2v5z",
    fill: "currentColor"
  }));
};
export default SvgQuickreply;