function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShieldWithHouseFill = function SvgShieldWithHouseFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m480-592 294 228q-26 85-84.5 152T550-107v-243H410v242q-81-38-139.5-105T186-365l294-227Zm0-289 320 120v238q0 22-2.5 48.5T790-427L480-667 170-427q-5-21-7.5-47.5T160-523v-238l320-120Z",
    fill: "currentColor"
  }));
};
export default SvgShieldWithHouseFill;