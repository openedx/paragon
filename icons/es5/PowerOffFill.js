function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPowerOffFill = function SvgPowerOffFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M382-120v-118L240-394v-275h58v84L67-816l42-42 750 750-42 42-207-207-32 35v118H382Zm310-240L342-710v-130h60v171h156v-171h60v171h102v277l-28 32Z",
    fill: "currentColor"
  }));
};
export default SvgPowerOffFill;