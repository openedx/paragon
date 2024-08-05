function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLmsOutline = function SvgLmsOutline(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7 8h2v12H7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M7 13v-2h7v2zM7 20v-2h7v2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 5,
    r: 2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 12,
    r: 2,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 19,
    r: 2,
    fill: "currentColor"
  }));
};
export default SvgLmsOutline;