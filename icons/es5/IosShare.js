function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgIosShare = function SvgIosShare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 8h-5v2h3v11H6V10h3V8H4v15h16V8Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 16h2V5h3l-4-4-4 4h3v11Z",
    fill: "currentColor"
  }));
};
export default SvgIosShare;