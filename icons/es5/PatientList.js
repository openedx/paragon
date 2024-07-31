function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPatientList = function SvgPatientList(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M640-403q-51 0-84.5-33.5T522-521q0-51 33.5-84.5T640-639q51 0 84.5 33.5T758-521q0 51-33.5 84.5T640-403ZM400-160v-66q0-18.86 9-35.93T433-286q45-32 98.5-47.5T640-349q55 0 108 17t99 46q14 10 23.5 25.5T880-226v66H400Zm55-71v11h370v-11q-39-26-90-42t-95-16q-44 0-95.5 16T455-231Zm185-232q26 0 42-16t16-42q0-26-16-42t-42-16q-26 0-42 16t-16 42q0 26 16 42t42 16Zm0-58Zm0 301ZM120-410v-60h306v60H120Zm0-330v-60h473v60H120Zm349 165H120v-60h380q-11 13-18.73 27.92Q473.55-592.16 469-575Z",
    fill: "currentColor"
  }));
};
export default SvgPatientList;