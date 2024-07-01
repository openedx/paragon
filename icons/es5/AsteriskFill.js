function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgAsteriskFill = function SvgAsteriskFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M450-120v-288L247-205l-42-42 203-203H120v-60h289L205-714l42-42 203 203v-287h60v288l204-204 42 42-204 204h288v60H553l203 203-42 42-204-204v289h-60Z",
    fill: "currentColor"
  }));
};
export default SvgAsteriskFill;