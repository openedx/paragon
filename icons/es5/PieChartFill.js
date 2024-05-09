function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPieChartFill = function SvgPieChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M510-510v-309q123 8 210.5 97.5T819-510H510Zm-60 369q-131-11-220.5-109T140-480q0-132 89.5-230T450-819v678Zm60 0v-309h309q-11 122-98.5 211.5T510-141Z",
    fill: "currentColor"
  }));
};
export default SvgPieChartFill;