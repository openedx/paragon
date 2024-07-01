function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgCinematicBlur = function SvgCinematicBlur(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m140-840 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h172v720H80v-720h60Zm0 212v448h680v-448H140Zm0 0v448-448Zm180 388h320v-32q0-42-42.5-65T480-360q-75 0-117.5 23T320-272v32Zm160-180q31 0 52.5-21.5T554-494q0-31-21.5-52.5T480-568q-31 0-52.5 21.5T406-494q0 31 21.5 52.5T480-420Z",
    fill: "currentColor"
  }));
};
export default SvgCinematicBlur;