function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFramePerson = function SvgFramePerson(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-232h60v172h172v60H80Zm0-568v-232h232v60H140v172H80ZM648-80v-60h172v-172h60v232H648Zm172-568v-172H648v-60h232v232h-60ZM480-480q-51 0-85.5-34.5T360-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T480-480Zm-.35-60q25.35 0 42.85-17.15t17.5-42.5q0-25.35-17.35-42.85t-43-17.5Q454-660 437-642.65t-17 43Q420-574 437.15-557t42.5 17ZM240-240v-76q0-27 17.5-47.5T300-397q42-22 86.94-32.5 44.95-10.5 93-10.5Q528-440 573-429.5t87 32.5q25 13 42.5 33.5T720-316v76H240Zm240-140q-47.55 0-92.77 13Q342-354 300-328v28h360v-28q-42-26-87.23-39-45.22-13-92.77-13Zm0-220Zm0 300h180-360 180Z",
    fill: "currentColor"
  }));
};
export default SvgFramePerson;