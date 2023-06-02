function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgFace3(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 13,
    r: 1.25
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 13,
    r: 1.25
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.91 11.96c-.54-5.93-5.75-10.41-11.8-9.92-5.38.42-9.56 4.9-10.05 10.28L0 24h24l-1.09-12.04zM4.54 9.13c.87.55 1.89.87 2.96.87 1.86 0 3.5-.93 4.5-2.35C13 9.07 14.64 10 16.5 10c1.07 0 2.09-.32 2.96-.87.34.89.54 1.86.54 2.87 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-1.01.2-1.98.54-2.87z",
    fill: "currentColor"
  }));
}
export default SvgFace3;