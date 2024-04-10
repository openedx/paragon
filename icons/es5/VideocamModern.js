function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVideocamModern = function SvgVideocamModern(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.333 7.333v9.334H4.223V7.333h11.11ZM16.444 5H3.111C2.5 5 2 5.525 2 6.167v11.666C2 18.475 2.5 19 3.111 19h13.333c.612 0 1.112-.525 1.112-1.167V13.75L22 18.417V5.583l-4.444 4.667V6.167c0-.642-.5-1.167-1.112-1.167Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M0 0h24v24H0z"
  }))));
};
export default SvgVideocamModern;