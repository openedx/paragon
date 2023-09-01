function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgMarkAsUnread = function SvgMarkAsUnread(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 8v13h17V8H5zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10v2z",
    fill: "currentColor"
  }));
};
export default SvgMarkAsUnread;