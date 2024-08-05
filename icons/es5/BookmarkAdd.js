function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgBookmarkAdd = function SvgBookmarkAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9V21z",
    fill: "currentColor"
  }));
};
export default SvgBookmarkAdd;