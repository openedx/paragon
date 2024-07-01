function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSatelliteFill = function SvgSatelliteFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M234-280h490L577-476 445-305l-93-127-118 152Zm6-218q93 0 157.5-64.5T462-720h-54q0 70-49 119t-119 49v54Zm0-131q39 0 67-26.5t28-64.5h-95v91ZM120-120v-720h720v720H120Z",
    fill: "currentColor"
  }));
};
export default SvgSatelliteFill;