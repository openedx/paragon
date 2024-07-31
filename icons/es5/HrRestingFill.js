function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHrRestingFill = function SvgHrRestingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h720v60H120Zm97-384q-29-27-42.5-64T161-644q0-81 55.5-138.5T352-840q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800-643q0 39-14.5 74.5T744-505L480-249 217-504Z",
    fill: "currentColor"
  }));
};
export default SvgHrRestingFill;