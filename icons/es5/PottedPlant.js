function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPottedPlant = function SvgPottedPlant(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M317-140h326l48-190H269l48 190Zm-47 60-63-250h546L690-80H270Zm-90-310h600v-100H180v100Zm301-251q0-87 75-160.5T719-880q-3 81-67 150.5T510-645v95h330v220H120v-220h330v-95q-78-15-141.5-84.5T241-880q88 5 164 78t76 161Z",
    fill: "currentColor"
  }));
};
export default SvgPottedPlant;