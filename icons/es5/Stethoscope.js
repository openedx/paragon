function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStethoscope = function SvgStethoscope(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M540-81q-112 0-186-78.5T280-347v-35q-85-11-142.5-75.71T80-610v-230h120v-40h60v140h-60v-40h-60v169.68q0 71.32 49.5 120.82T310-440q71 0 120.5-49.5T480-610.32V-780h-60v40h-60v-140h60v40h120v230q0 87.58-57.5 152.29T340-382v35q0 85 56.5 145.5T540-141q81 0 140.5-60.15T740-347.23V-424q-35-10-57.5-39T660-530q0-45.83 32.12-77.92 32.12-32.08 78-32.08T848-607.92q32 32.09 32 77.92 0 38-22.5 67T800-424v77q0 111-76.5 188.5T540-81Zm229.82-399q21.18 0 35.68-14.32 14.5-14.33 14.5-35.5 0-21.18-14.32-35.68-14.33-14.5-35.5-14.5-21.18 0-35.68 14.32-14.5 14.33-14.5 35.5 0 21.18 14.32 35.68 14.33 14.5 35.5 14.5Zm.18-50Z",
    fill: "currentColor"
  }));
};
export default SvgStethoscope;