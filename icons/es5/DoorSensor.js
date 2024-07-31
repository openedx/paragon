function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDoorSensor = function SvgDoorSensor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M340-360v-420 600-180Zm-60 30h60v150h280v-600H340v390h-60v-450h400v720H280v-210Zm200.5-240q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21-8.63-8.5-21.38-8.5-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9ZM780-830h60v220h-60v-220ZM510-330H160v-60h350v60Z",
    fill: "currentColor"
  }));
};
export default SvgDoorSensor;