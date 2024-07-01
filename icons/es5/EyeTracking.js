function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEyeTracking = function SvgEyeTracking(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-40v-183h60v123h123v60H40Zm697 0v-60h123v-123h60v183H737ZM479.17-225Q360-225 264-293.5 168-362 119-480q49-119 145-187.5T479.5-736q119.5 0 216 68.5T840-480q-48 118-144.83 186.5-96.83 68.5-216 68.5Zm-.17-60q93 0 173-52.5T774-480q-42-90-122-143t-173-53q-93 0-172.5 53T185-480q42 90 121.5 142.5T479-285Zm1.22-63Q535-348 574-386.72t39-93.5Q613-535 574.07-574t-94-39q-55.07 0-93.57 38.93-38.5 38.93-38.5 94t38.72 93.57q38.72 38.5 93.5 38.5Zm-.22-60q-30 0-51-21t-21-51q0-30 21-51.5t51-21.5q30 0 51.5 21.29T553-480q0 30-21.29 51T480-408ZM40-737v-183h183v60H100v123H40Zm820 0v-123H737v-60h183v183h-60ZM480-481Z",
    fill: "currentColor"
  }));
};
export default SvgEyeTracking;