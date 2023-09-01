function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var SvgThumbUpOutline = function SvgThumbUpOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 21h4V9H1v12ZM23 12.4V8h-8.31l1.12-5.38L14.17 1 7 8.18V21h12.31L23 12.4ZM9 19V9.01l4.34-4.35-.61 2.93-.5 2.41H21v1.99L17.99 19H9Z",
    fill: "currentColor"
  }));
};
export default SvgThumbUpOutline;