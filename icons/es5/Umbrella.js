function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgUmbrella = function SvgUmbrella(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.5 6.92 13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58.92-.23L13 14.8V8.29l.28.21zm-3.32.59.76-.58.28-.22v6.51L9.03 8.86l.93.23z",
    fill: "currentColor"
  }));
};
export default SvgUmbrella;