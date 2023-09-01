function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgOfflineShare = function SvgOfflineShare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 5H4v18h12v-2H6z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 1H8v18h12V1zm-2 14h-8V5h8v10z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z",
    fill: "currentColor"
  }));
};
export default SvgOfflineShare;