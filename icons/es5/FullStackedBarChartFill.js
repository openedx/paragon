function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFullStackedBarChartFill = function SvgFullStackedBarChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-160v-130h140v130H160Zm0-160v-140h140v140H160Zm0-170v-310h140v310H160Zm250 330v-300h140v300H410Zm0-330v-140h140v140H410Zm0-170v-140h140v140H410Zm250 500v-100h140v100H660Zm0-130v-140h140v140H660Zm0-170v-340h140v340H660Z",
    fill: "currentColor"
  }));
};
export default SvgFullStackedBarChartFill;