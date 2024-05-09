function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgWindowSensor = function SvgWindowSensor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M889.82-620q-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-160q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v160q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63ZM120-120v-720h640v720H120Zm60-390h220v-40h80v40h220v-270H180v270Zm0 330h520v-270H180v270Zm0 0h520-520Z",
    fill: "currentColor"
  }));
};
export default SvgWindowSensor;