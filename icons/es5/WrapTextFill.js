function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWrapTextFill = function SvgWrapTextFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M579-130 440-270l139-141 42 43-67 69h141q35 0 60-25.5t25-60.5q0-35-25-60t-60-25H160v-60h535q60 0 102.5 42.5T840-385q0 60-42.5 103T695-239H554l67 66-42 43ZM160-239v-60h200v60H160Zm0-461v-60h640v60H160Z",
    fill: "currentColor"
  }));
};
export default SvgWrapTextFill;