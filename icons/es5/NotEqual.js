function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgNotEqual = function SvgNotEqual(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 9.998H5v-2h14zm0 6H5v-2h14z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m14.08 4.605 1.84.79-6 14-1.84-.79z",
    fill: "currentColor"
  }));
};
export default SvgNotEqual;