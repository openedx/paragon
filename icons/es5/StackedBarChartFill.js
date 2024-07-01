function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgStackedBarChartFill = function SvgStackedBarChartFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-160v-470h140v470H160Zm0-500v-140h140v140H160Zm250 500v-350h140v350H410Zm0-380v-140h140v140H410Zm250 380v-230h140v230H660Zm0-260v-140h140v140H660Z",
    fill: "currentColor"
  }));
};
export default SvgStackedBarChartFill;