function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBlindsFill = function SvgBlindsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-120v-60h80v-660h640v660h80v60H80Zm140-555h355v-105H220v105Zm0 165h355v-105H220v105Zm0 330h520v-270H635v88q14 8 22 21.5t8 30.5q0 24.86-17.6 42.43T604.9-250q-24.9 0-42.4-17.57T545-310q0-17 8-30.5t22-21.5v-88H220v270Zm415-495h105v-105H635v105Zm0 165h105v-105H635v105Z",
    fill: "currentColor"
  }));
};
export default SvgBlindsFill;