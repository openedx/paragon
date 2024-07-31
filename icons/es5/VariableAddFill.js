function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgVariableAddFill = function SvgVariableAddFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-280v-400h720v162q-8-1-14.97-1.5-6.96-.5-15.03-.5-87.5 0-148.75 61.25T600-310q0 8.07.5 15.03Q601-288 602-280H120Zm660 120v-120H660v-60h120v-120h60v120h120v60H840v120h-60Z",
    fill: "currentColor"
  }));
};
export default SvgVariableAddFill;