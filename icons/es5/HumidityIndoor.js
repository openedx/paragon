function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHumidityIndoor = function SvgHumidityIndoor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M481-300q66 0 112.5-46T640-458q0-32-12-60.5T593-569L480-680 367-569q-23 22-35 50.5T320-458q0 66 47.5 112T481-300ZM380-460q0-19 7.57-35.51Q395.13-512.03 409-526l71-70 71.25 70.21Q565-512 572.5-495.51 580-479.02 580-460H380ZM160-160v-480l320-240 320 240v480H160Zm60-60h520v-394L480-803 220-614v394Zm260-292Z",
    fill: "currentColor"
  }));
};
export default SvgHumidityIndoor;