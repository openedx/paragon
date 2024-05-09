function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLowercase = function SvgLowercase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M334-240q-51 0-83.5-26T218-336q0-47 35.5-75.5T346-440q26 0 48.5 4.5T433-423v-18q0-38-20.5-58.5T353-520q-23 0-43 8t-37 25l-31-28q24-23 50-34t61-11q62 0 93.5 31t31.5 93v186h-44v-42h-4q-16 26-43.5 39T334-240Zm0-38q36 0 68-30t32-76q-16-8-38-13t-43-5q-42 0-65.5 17.5T264-336q0 26 20.5 42t49.5 16Zm370 38L558-386l42-42 74 74v-286h60v286l74-74 42 42-146 146Z",
    fill: "currentColor"
  }));
};
export default SvgLowercase;