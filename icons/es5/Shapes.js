function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgShapes = function SvgShapes(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M600-360Zm-280 98q10 2 19.5 2H360q5.5 0 10.25-.25T380-261v121h440v-440H699q.5-5 .75-9.75T700-600v-20.5q0-9.5-2-19.5h182v560H320v-182Zm40-58q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm-.21-60q91.21 0 155.71-64.29 64.5-64.29 64.5-155.5T515.71-755.5Q451.42-820 360.21-820T204.5-755.71Q140-691.42 140-600.21t64.29 155.71q64.29 64.5 155.5 64.5Zm.21-220Z",
    fill: "currentColor"
  }));
};
export default SvgShapes;