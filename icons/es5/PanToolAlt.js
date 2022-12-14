function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgPanToolAlt(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.18 13.4L19.1 21h-9L5 15.62l1.22-1.23 3.78.85V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38l5.8 2.9z",
    fill: "currentColor"
  }));
}
export default SvgPanToolAlt;