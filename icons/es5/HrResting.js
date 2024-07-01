function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHrResting = function SvgHrResting(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h720v60H120Zm97-384q-29-27-42.5-64T161-644q0-81 55.5-138.5T352-840q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800-643q0 39-14.5 74.5T744-505L480-249 217-504Zm42-42 221 214 223-215q20-19 29-44.08 9-25.09 9-51.92 0-56-38.32-96t-93.74-40q-25.94 0-50.1 10.05Q534.68-758.91 517-740l-37 37-36-37q-19.2-18.82-42.6-29.41Q378-780 352-780q-54.97 0-92.99 40Q221-700 220-644q0 27.12 9.5 53.06T259-546Zm221-10Z",
    fill: "currentColor"
  }));
};
export default SvgHrResting;