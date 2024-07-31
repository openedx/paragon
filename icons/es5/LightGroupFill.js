function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLightGroupFill = function SvgLightGroupFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M130-80v-60h300v60H130Zm550-50q-29 0-49.5-20.5T610-200H440v-35q0-96 60-163.5T650-477v-393h60v393q91 11 150.5 78.5T920-235v35H750q0 29-20.5 49.5T680-130Zm-430-70v-320H28l97-360h311l97 360H310v320h-60Z",
    fill: "currentColor"
  }));
};
export default SvgLightGroupFill;