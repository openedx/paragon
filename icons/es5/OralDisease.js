function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOralDisease = function SvgOralDisease(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M200-80v-360h80v-198L148-770l146-146 42 42-104 104 108 108v222h80v360H200Zm340 0v-360h80v-133q-52-11-86-53.5t-34-98.11q0-64.39 43.5-109.89T650-880q63 0 106.5 45.53T800-725q0 56-34 98.5T680-573v133h80v360H540Zm110-550q38 0 64-27.87 26-27.86 26-67Q740-764 714-792q-26-28-64-28t-64 27.87q-26 27.86-26 67Q560-686 586-658q26 28 64 28ZM260-140h100v-240H260v240Zm340 0h100v-240H600v240Zm-340 0h100-100Zm340 0h100-100Z",
    fill: "currentColor"
  }));
};
export default SvgOralDisease;