function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgSensorOccupiedFill = function SvgSensorOccupiedFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-520q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-280v-76q0-26 14-45t46-36q42-22 87-32.5t93-10.5q48 0 93 10.5t87 32.5q32 17 46 36t14 45v76H240Zm627-362q-32-76-91-135t-134-91l23-55q87 36 154 103t104 155l-56 23Zm-774 0-56-23q37-88 103.5-154.5T295-923l23 56q-79 33-135.5 89.5T93-642ZM295-37q-87-36-154-103T37-295l56-24q33 78 90 135.5T319-93l-24 56Zm370 0-23-56q76-32 134.5-90.5T867-318l56 23q-36 87-103 154T665-37Z",
    fill: "currentColor"
  }));
};
export default SvgSensorOccupiedFill;