function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgSignalCellular3Bar = function SvgSignalCellular3Bar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M2 22h20V2L2 22z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7 2 22h15V7z",
    fill: "currentColor"
  }));
};
export default SvgSignalCellular3Bar;